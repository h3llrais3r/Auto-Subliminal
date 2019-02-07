/**
 * Javascript needed on the library show details page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    var init = function () {

        // Check if the library scanner is running
        autosubliminal.library.checkScannerRunning();

        // Subscribe to library scanner events
        PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
        PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);

        // Init vue component
        window.Vue.component('library-show-details', {
            data: function () {
                return {
                    show: null,
                    tvdbUrl: autosubliminal.TVDB_URL,
                    posterFullSizeUrl: autosubliminal.getUrl('/artwork/tvdb/poster/fullsize/'),
                    posterThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/poster/thumbnail/'),
                    languages: autosubliminal.LANGUAGES,
                    showSettings: null,
                    showSettingsWantedLanguages: [],
                    selectedEpisodeTvdbId: null,
                    selectedFileLocation: null,
                    selectedFileName: null,
                    selectedHardcodedLanguages: []
                };
            },
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
                var self = this;
                self.getShowDetails();
            },
            updated: function () {
                //console.log('updated');
                var self = this;
                autosubliminal.vue.styleProgressBar(self.showProgressPercentage);
            },
            computed: {
                showProgressPercentage: function () {
                    var self = this;
                    return self.show.total_subtitles_available / self.show.total_subtitles_wanted * 100;
                }
            },
            methods: {
                getShowDetails: function () {
                    var self = this;
                    var tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                    $.get(autosubliminal.getUrl('/api/shows/' + tvdbId), function (data) {
                        self.show = data;
                        self.showSettings = self.show.settings;
                    });
                },
                getPlayVideoUrl: autosubliminal.constructPlayVideoUrl,
                getLanguages: autosubliminal.convertToLanguages,
                getAlpha2Languages: autosubliminal.convertToAlpha2Languages,
                internalLanguagesAvailable: function (file) {
                    var available = false;
                    if ((file.hardcoded_languages && file.hardcoded_languages.length > 0) ||
                        (file.embedded_languages && file.embedded_languages.length > 0)) {
                        available = true;
                    }
                    return available;
                },
                refreshShowDetails: function (event) {
                    event.preventDefault();
                    var self = this;
                    // Show refresh indication
                    $('.refresh-running').removeClass('hidden');
                    $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/refresh'), null, function () {
                        // Get show details again to get the updates
                        self.getShowDetails();
                        // Hide refresh indication
                        $('.refresh-running').addClass('hidden');
                    });
                },
                openSettingsModal: function (event) {
                    event.preventDefault();
                    // Set default values
                    var self = this;
                    self.showSettings = self.show.settings;
                    self.showSettingsWantedLanguages = self.getLanguages(self.show.settings.wanted_languages);
                    // Open modal
                    $('#settingsModal').modal('show');
                },
                openDeleteModal: function (event) {
                    event.preventDefault();
                    // Open modal
                    $('#deleteModal').modal('show');
                },
                openSubtitlesModal: function (fileLocation, fileName, hardcodedLanguages, episodeTvdbId, event) {
                    event.preventDefault();
                    // Set selected video file and clear language selection
                    var self = this;
                    self.selectedEpisodeTvdbId = episodeTvdbId;
                    self.selectedFileLocation = fileLocation;
                    self.selectedFileName = fileName;
                    self.selectedHardcodedLanguages = self.getLanguages(hardcodedLanguages);
                    // Open modal
                    $('#subtitlesModal').modal('show');
                },
                saveSettings: function (event) {
                    event.preventDefault();
                    // Get data
                    var self = this;
                    var data = self.showSettings;
                    data.wanted_languages = self.getAlpha2Languages(self.showSettingsWantedLanguages);
                    $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/settings'), data, function () {
                        // Close modal on success
                        $('#settingsModal').modal('hide');
                        // Refresh show details
                        self.refreshShowDetails(event);
                    });
                },
                deleteShow: function (event) {
                    event.preventDefault();
                    // Delete the show
                    var self = this;
                    $.deleteJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id), null, function () {
                        // Close modal on success
                        $('#deleteModal').modal('hide');
                        // Redirect to library shows view
                        window.location = autosubliminal.getUrl('/library/shows');
                    });
                },
                saveHardcodedSubtitles: function (event) {
                    event.preventDefault();
                    // Get data
                    var self = this;
                    var data = {
                        'file_location': self.selectedFileLocation,
                        'file_name': self.selectedFileName,
                        'languages': self.getAlpha2Languages(self.selectedHardcodedLanguages)
                    };
                    $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/subtitles/hardcoded/' + self.selectedEpisodeTvdbId), data, function () {
                        // Close modal on success
                        $('#subtitlesModal').modal('hide');
                        // Get show details again to get the updates
                        self.getShowDetails();
                    });
                },
                getNrOfSubtitles: function (files, language) {
                    var subtitleCount = 0;
                    for (var i = 0; i < files.length; i++) {
                        if (files[i].type == 'subtitle' && files[i].language != null && files[i].language == language) {
                            // A subtitle file can have only 1 language
                            subtitleCount++;
                        } else if (files[i].type == 'video') {
                            // A video file can have multiple hardcoded languages
                            if (files[i].hardcoded_languages != null) {
                                for (var j = 0; files[i].hardcoded_languages[j]; j++) {
                                    if (files[i].hardcoded_languages[j] == language) {
                                        subtitleCount++;
                                    }
                                }
                            }
                            // A video file can have multiple embedded languages
                            if (files[i].embedded_languages != null) {
                                for (var k = 0; files[i].embedded_languages[k]; k++) {
                                    if (files[i].embedded_languages[k] == language) {
                                        subtitleCount++;
                                    }
                                }
                            }
                        }
                    }
                    return subtitleCount;
                },
                getNrOfVideos: function (files) {
                    var videoCount = 0;
                    for (var i = 0; i < files.length; i++) {
                        if (files[i].type == 'video') {
                            videoCount++;
                        }
                    }
                    return videoCount;
                }
            }
        });

        // Init vue components
        window.Vue.component('multiselect', window.VueMultiselect.default);

        // Init vue app
        new window.Vue({
            el: '#app'
        });

    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

}(autosubliminal));
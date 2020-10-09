/**
 * Javascript needed on the library show details page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    const init = function () {

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
                    posterPlaceholderUrl: autosubliminal.vue.getPosterPlaceholderUrl(),
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
                const self = this;
                self.getShowDetails();
            },
            updated: function () {
                //console.log('updated');
                const self = this;
                autosubliminal.keepDropdownsOpen();
                autosubliminal.vue.styleProgressBar(self.showProgressPercentage);
            },
            computed: {
                showPosterThumbnailUrl: function () {
                    const self = this;
                    return autosubliminal.getUrl(`/artwork/tvdb/poster/thumbnail/${self.show.tvdbId}`);
                },
                showPosterFullSizeUrl: function () {
                    const self = this;
                    return autosubliminal.getUrl(`/artwork/tvdb/poster/fullsize/${self.show.tvdbId}`);
                },
                showProgressPercentage: function () {
                    const self = this;
                    return self.show.totalSubtitlesAvailable / self.show.totalSubtitlesWanted * 100;
                },
                showProgressText: function () {
                    const self = this;
                    return `${self.show.totalSubtitlesAvailable} of ${self.show.totalSubtitlesWanted}`;
                }
            },
            methods: {
                getShowDetails: function () {
                    const self = this;
                    const tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                    // Show loading icon
                    $('.loading').removeClass('hidden');
                    // Get show details
                    $.get(autosubliminal.getUrl(`/api/shows/${tvdbId}`), function (data) {
                        self.show = data;
                        self.showSettings = self.show.settings;
                    }).fail(function (response) {
                        // Remove show if it does not longer exists
                        if (response.status == 404) {
                            $.deleteJson(autosubliminal.getUrl(`/api/shows/${tvdbId}`), null, function () {
                                // Show notification
                                const notification = autosubliminal.types.Notification();
                                notification.message = 'Show does not exist anymore and has been removed from the library!';
                                notification.type = autosubliminal.notifications.WARNING;
                                notification.sticky = false;
                                autosubliminal.notifications.showNotification(notification);
                                // Redirect to library movies view
                                window.location = autosubliminal.getUrl('/library/shows');
                            });
                        }
                    }).always(function () {
                        // Hide loading icon
                        $('.loading').addClass('hidden');
                    });
                },
                getPlayVideoUrl: autosubliminal.constructPlayVideoUrl,
                getLanguages: autosubliminal.convertToLanguages,
                getLanguageCodes: autosubliminal.convertToLanguageCodes,
                internalLanguagesAvailable: function (file) {
                    let available = false;
                    if ((file.hardcodedLanguages && file.hardcodedLanguages.length > 0) ||
                        (file.embeddedLanguages && file.embeddedLanguages.length > 0)) {
                        available = true;
                    }
                    return available;
                },
                refreshShowDetails: function (event) {
                    event.preventDefault();
                    const self = this;
                    // Show refresh indication
                    $('.refresh-running').removeClass('hidden');
                    $.putJson(autosubliminal.getUrl(`/api/shows/${self.show.tvdbId}/refresh`), null, function () {
                        // Get show details again to get the updates
                        self.getShowDetails();
                        // Hide refresh indication
                        $('.refresh-running').addClass('hidden');
                    });
                },
                openSettingsModal: function (event) {
                    event.preventDefault();
                    // Set default values
                    const self = this;
                    self.showSettings = self.show.settings;
                    self.showSettingsWantedLanguages = self.getLanguages(self.show.settings.wantedLanguages);
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
                    const self = this;
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
                    const self = this;
                    const data = self.showSettings;
                    data.wantedLanguages = self.getLanguageCodes(self.showSettingsWantedLanguages);
                    $.putJson(autosubliminal.getUrl(`/api/shows/${self.show.tvdbId}/settings`), data, function () {
                        // Close modal on success
                        $('#settingsModal').modal('hide');
                        // Refresh show details
                        self.refreshShowDetails(event);
                    });
                },
                deleteShow: function (event) {
                    event.preventDefault();
                    // Delete the show
                    const self = this;
                    $.deleteJson(autosubliminal.getUrl(`/api/shows/${self.show.tvdbId}`), null, function () {
                        // Close modal on success
                        $('#deleteModal').modal('hide');
                        // Redirect to library shows view
                        window.location = autosubliminal.getUrl('/library/shows');
                    });
                },
                saveHardcodedSubtitles: function (event) {
                    event.preventDefault();
                    // Get data
                    const self = this;
                    const data = {
                        'fileLocation': self.selectedFileLocation,
                        'fileName': self.selectedFileName,
                        'languages': self.getLanguageCodes(self.selectedHardcodedLanguages)
                    };
                    $.putJson(autosubliminal.getUrl(`/api/shows/${self.show.tvdbId}/subtitles/hardcoded/${self.selectedEpisodeTvdbId}`), data, function () {
                        // Close modal on success
                        $('#subtitlesModal').modal('hide');
                        // Get show details again to get the updates
                        self.getShowDetails();
                    });
                },
                addShowPathToVideoPaths: function (event) {
                    event.preventDefault();
                    // Get data
                    const self = this;
                    const data = {
                        'videoPath': self.show.path
                    };
                    $.putJson(autosubliminal.getUrl('/api/settings/general/videoPaths'), data, function () {
                        // Get show details again to get the updates
                        self.getShowDetails();
                    });
                },
                getNrOfSubtitles: function (files, language) {
                    let subtitleCount = 0;
                    files.forEach((file) => {
                        if (file.type == 'subtitle' && file.language != null && file.language == language) {
                            // A subtitle file can have only 1 language
                            subtitleCount++;
                        } else if (file.type == 'video') {
                            // A video file can have multiple hardcoded languages
                            if (file.hardcodedLanguages != null) {
                                file.hardcodedLanguages.forEach((harcodedLanguage) => {
                                    if (harcodedLanguage == language) {
                                        subtitleCount++;
                                    }
                                });
                            }
                            // A video file can have multiple embedded languages
                            if (file.embeddedLanguages != null) {
                                file.embeddedLanguages.forEach((embeddedLanguage) => {
                                    if (embeddedLanguage == language) {
                                        subtitleCount++;
                                    }
                                });
                            }
                        }
                    });
                    return subtitleCount;
                },
                getNrOfVideos: function (files) {
                    let videoCount = 0;
                    files.forEach((file) => {
                        if (file.type == 'video') {
                            videoCount++;
                        }
                    });
                    return videoCount;
                }
            }
        });

        // Init vue components
        window.Vue.component('multiselect', window.VueMultiselect.default);
        window.Vue.use(window.VueLazyload);

        // Init vue app
        new window.Vue({
            el: '#app'
        });

    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
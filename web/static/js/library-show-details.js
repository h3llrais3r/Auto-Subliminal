/**
 * Javascript needed on the library show details page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Init vue component
    Vue.component('library-show-details', {
        data: function () {
            return {
                show: null,
                tvdbUrl: TVDB_URL,
                posterFullSizeUrl: getUrl('/artwork/tvdb/poster/fullsize/'),
                posterThumbnailUrl: getUrl('/artwork/tvdb/poster/thumbnail/'),
                languages: LANGUAGES,
                showSettings: null,
                showSettingsWantedLanguages: [],
                selectedEpisodeTvdbId: null,
                selectedFileLocation: null,
                selectedFileName: null,
                selectedHardcodedLanguages: []
            }
        },
        created: function () {
            //console.log('created');
        },
        mounted: function () {
            //console.log('mounted');
            this.getShowDetails();
        },
        updated: function () {
            //console.log('updated');
            styleProgressBar();
            enableVueBootstrapToggle();
        },
        methods: {
            getShowDetails: function () {
                var self = this;
                var tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                $.get('/api/shows/' + tvdbId, function (data) {
                    self.show = data;
                    self.showSettings = self.show.settings;
                });
            },
            getProcessPercentage: function (show) {
                return show.total_subtitles_available / show.total_subtitles_wanted * 100;
            },
            getPlayVideoUrl: constructPlayVideoUrl,
            getLanguages: convertToLanguages,
            getAlpha2Languages: convertToAlpha2Languages,
            internalLanguagesAvailable: function (file) {
                var available = false;
                if ((file.hardcoded_languages && file.hardcoded_languages.length > 0) ||
                    (file.embedded_languages && file.embedded_languages.length > 0)) {
                    available = true;
                }
                return available;
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
                $.postJson(getUrl('/api/shows/settings/' + self.show.tvdb_id), data, function (data) {
                    // Close modal on success
                    $('#settingsModal').modal('hide');
                    // Get movie details again to get the updates
                    self.getShowDetails();
                });
            },
            saveHardcodedSubtitles: function (event) {
                event.preventDefault();
                // Get data
                var self = this;
                var data = {
                    'tvdb_id': self.selectedEpisodeTvdbId,
                    'file_location': self.selectedFileLocation,
                    'file_name': self.selectedFileName,
                    'languages': self.getAlpha2Languages(self.selectedHardcodedLanguages)
                };
                $.postJson(getUrl('/api/shows/subtitles/hardcoded'), data, function (data) {
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
                    } else if (files[i].type == 'video' && files[i].languages != null) {
                        // A video file can have multiple embedded languages, so we need to check if it contains it
                        for (var j = 0; files[i].languages[j]; j++) {
                            if (files[i].languages[j] == language) {
                                subtitleCount++;
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
    Vue.component('multiselect', window.VueMultiselect.default);

    // Init vue app
    new Vue({
        el: '#app'
    });
}

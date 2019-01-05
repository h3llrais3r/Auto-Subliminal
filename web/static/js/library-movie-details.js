/**
 * Javascript needed on the library movie details page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Check if the library scanner is running
    checkLibraryScannerRunning();

    // Subscribe to library scanner events
    PubSub.subscribe(PROCESS_STARTED, libraryScannerStartedEventSubscriber);
    PubSub.subscribe(PROCESS_FINISHED, libraryScannerFinishedEventSubscriber);

    // Init vue component
    Vue.component('library-movie-details', {
        data: function () {
            return {
                movie: null,
                imdbUrl: IMDB_URL,
                posterFullSizeUrl: getUrl('/artwork/imdb/poster/fullsize/'),
                posterThumbnailUrl: getUrl('/artwork/imdb/poster/thumbnail/'),
                languages: LANGUAGES,
                movieSettings: null,
                movieSettingsWantedLanguages: [],
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
            var self = this;
            self.getMovieDetails();
        },
        updated: function () {
            //console.log('updated');
            var self = this;
            styleProgressBar(self.movieProgressPercentage);
            enableVueBootstrapToggle();
        },
        computed: {
            movieProgressPercentage: function () {
                var self = this;
                return self.movie.total_subtitles_available / self.movie.total_subtitles_wanted * 100;
            }
        },
        methods: {
            getMovieDetails: function () {
                var self = this;
                var imdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                $.get('/api/movies/' + imdbId, function (data) {
                    self.movie = data;
                    self.movieSettings = self.movie.settings;
                });
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
                self.movieSettings = self.movie.settings;
                self.movieSettingsWantedLanguages = self.getLanguages(self.movie.settings.wanted_languages);
                // Open modal
                $('#settingsModal').modal('show');
            },
            openSubtitlesModal: function (fileLocation, fileName, hardcodedLanguages, event) {
                event.preventDefault();
                // Set selected video file and clear language selection
                var self = this;
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
                var data = self.movieSettings;
                data.wanted_languages = self.getAlpha2Languages(self.movieSettingsWantedLanguages);
                $.putJson(getUrl('/api/movies/' + self.movie.imdb_id + '/settings'), data, function (data) {
                    // Close modal on success
                    $('#settingsModal').modal('hide');
                    // Show refresh indication
                    $('.refresh-running').removeClass('hidden');
                    $.putJson(getUrl('/api/movies/' + self.movie.imdb_id + '/refresh'), null, function (data) {
                        // Get movie details again to get the updates
                        self.getMovieDetails();
                        // Hide refresh indication
                        $('.refresh-running').addClass('hidden');
                    });
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
                $.putJson(getUrl('/api/movies/subtitles/hardcoded/' + self.movie.imdb_id), data, function (data) {
                    // Close modal on success
                    $('#subtitlesModal').modal('hide');
                    // Get movie details again to get the updates
                    self.getMovieDetails();
                });
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

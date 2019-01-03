/**
 * Javascript needed on the library movie details page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Init vue component
    Vue.component('library-movie-details', {
        data: function () {
            return {
                movie: null,
                imdbUrl: IMDB_URL,
                posterFullSizeUrl: getUrl('/artwork/imdb/poster/fullsize/'),
                posterThumbnailUrl: getUrl('/artwork/imdb/poster/thumbnail/'),
                languages: LANGUAGES,
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
            this.getMovieDetails();
        },
        updated: function () {
            //console.log('updated');
            styleProgressBar();
        },
        methods: {
            getMovieDetails: function () {
                var self = this;
                var imdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                $.get('/api/movies/' + imdbId, function (data) {
                    self.movie = data;
                });
            },
            getProcessPercentage: function (movie) {
                return movie.total_subtitles_available / movie.total_subtitles_wanted * 100;
            },
            getPlayVideoUrl: function (filePath, filename) {
                return 'playvideo://' + filePath + PATH_SEPARTOR + filename;
            },
            internalLanguagesAvailable: function (file) {
                var available = false;
                if ((file.hardcoded_languages && file.hardcoded_languages.length > 0) ||
                    (file.embedded_languages && file.embedded_languages.length > 0)) {
                    available = true;
                }
                return available;
            },
            openSubtitlesModal: function (fileLocation, fileName, hardcodedSubtitles, event) {
                event.preventDefault();
                // Set selected video file and clear language selection
                var self = this;
                self.selectedFileLocation = fileLocation;
                self.selectedFileName = fileName;
                self.selectedHardcodedLanguages = hardcodedSubtitles;
                // Open modal
                $('#subtitlesModal').modal('show');
            },
            saveHardcodedSubtitles: function (event) {
                event.preventDefault();
                // Get data
                var self = this;
                var data = {
                    'file_location': self.selectedFileLocation,
                    'file_name': self.selectedFileName,
                    'languages': self.selectedHardcodedLanguages
                };
                $.postJson(getUrl('/api/movies/subtitles/hardcoded'), data, function (data) {
                    // Close modal on success
                    $('#subtitlesModal').modal('hide');
                });
            }
        }
    });

    // Init vue plugins

    // Init vue app
    new Vue({
        el: '#app'
    });
}

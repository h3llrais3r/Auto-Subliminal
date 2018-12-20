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
                posterThumbnailUrl: getUrl('/artwork/imdb/poster/thumbnail/')
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
                var imdb_id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                $.get('/api/movies/' + imdb_id, function (data) {
                    self.movie = data;
                });
            },
            getProcessPercentage: function (movie) {
                return movie.total_subtitles_available / movie.total_subtitles_wanted * 100;
            }
        }
    });

    // Init vue plugins

    // Init vue app
    new Vue({
        el: '#app'
    });
}

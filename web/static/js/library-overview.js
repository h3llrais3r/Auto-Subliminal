/**
 * Javascript needed on the library overview page
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
    Vue.component('library-overview', {
        data: function () {
            return {
                showsOverview: null,
                moviesOverview: null
            }
        },
        created: function () {
            //console.log('created');
        },
        mounted: function () {
            //console.log('mounted');
            this.getShowsOverview();
            this.getMoviesOverview();
        },
        updated: function () {
            //console.log('updated');
            styleProgressBar();
        },
        methods: {
            getShowsOverview: function () {
                var self = this;
                $.get(getUrl('/api/shows/overview'), function (data) {
                    self.showsOverview = data;
                });
            },
            getMoviesOverview: function () {
                var self = this;
                $.get(getUrl('/api/movies/overview'), function (data) {
                    self.moviesOverview = data;
                });
            },
            getProgressPercentage: function (overview) {
                return overview.total_subtitles_available / overview.total_subtitles_wanted * 100;
            }
        }
    });

    // Init vue app
    new Vue({
        el: '#app'
    });
}

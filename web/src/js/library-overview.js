/**
 * Javascript needed on the library overview page
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
        window.Vue.component('library-overview', {
            data: function () {
                return {
                    showsOverview: null,
                    moviesOverview: null
                };
            },
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
                var loadingIcon = $('.loading');
                // Show loading icon
                loadingIcon.removeClass('hidden');
                // Get overview
                this.getShowsOverview();
                this.getMoviesOverview();
                // Hide loading icon
                loadingIcon.addClass('hidden');
            },
            updated: function () {
                //console.log('updated');
                autosubliminal.vue.styleProgressBar();
            },
            methods: {
                getShowsOverview: function () {
                    var self = this;
                    $.get(autosubliminal.getUrl('/api/shows/overview'), function (data) {
                        self.showsOverview = data;
                    });
                },
                getMoviesOverview: function () {
                    var self = this;
                    $.get(autosubliminal.getUrl('/api/movies/overview'), function (data) {
                        self.moviesOverview = data;
                    });
                },
                getProgressPercentage: function (overview) {
                    return overview.total_subtitles_available / overview.total_subtitles_wanted * 100;
                },
                getProgressText: function (overview) {
                    return overview.total_subtitles_available + ' of ' + overview.total_subtitles_wanted;
                }
            }
        });

        // Init vue app
        new window.Vue({
            el: '#app'
        });

    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
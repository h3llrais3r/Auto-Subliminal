/**
 * Javascript needed on the library movies page
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
        window.Vue.component('library-movies', {
            data: function () {
                return {
                    movies: [],
                    posterPlaceholderUrl: autosubliminal.vue.getPosterPlaceholderUrl()
                };
            },
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
                this.getMovies();
            },
            updated: function () {
                //console.log('updated');
                this.setupMovies();
                autosubliminal.vue.styleProgressBar();
            },
            methods: {
                getMovies: function () {
                    const self = this;
                    $.get(autosubliminal.getUrl('/api/movies'), function (data) {
                        self.movies = data;
                    });
                },
                setupMovies: function () {
                    // Setup the movies table
                    $('#movies')
                        .tablesorter({
                            debug: false, // Put on true to debug
                            // Enable widgets
                            widgets: ['reflow', 'filter', 'saveSort'],
                            widgetOptions: {
                                // No column filters
                                filter_columnFilters: false,
                                // External filter selector
                                filter_external: '.movies-filter',
                                // Search faster (default 300)
                                filter_searchDelay: 50,
                                // Save filters
                                filter_saveFilters: true,
                                // Reset filter selector
                                filter_reset: '.movies-filter-reset'
                            },
                            // Use configured date format
                            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
                            // Force text sorter in title column (this is needed due to img in table cell)
                            // See https://github.com/Mottie/tablesorter/issues/1149
                            headers: {
                                0: {sorter: 'text'}
                            },
                            // Sort default by title asc
                            sortList: [[0, 0]],
                            // Use image title for sorting/filtering
                            textExtraction: {
                                0: function (node, table, cellIndex) {
                                    return $(node).find('a').attr('title');
                                }
                            },
                            // Remove loading indication and movie content when initialized
                            initialized: function () {
                                const self = $('#movies');
                                self.find('.loading-row').remove();
                                self.find('.content-row').removeClass('hidden');
                                self.trigger('update'); // Trigger table update for the removed loading row
                            }
                        })
                        .tablesorterPager({
                            container: $('#moviesPager'),
                            output: '{startRow} to {endRow} ({filteredRows})'
                        });

                    // Setup the movies filter
                    $('.movies-filter-reset').on('click', function () {
                        $(this).prev('input').val('').focus();
                        $.tablesorter.storage($('#movies'), 'tablesorter-filters', '');
                    });
                },
                getMoviePosterThumbnailUrl: function (imdbId) {
                    return autosubliminal.getUrl(`/artwork/imdb/poster/thumbnail/${imdbId}`);
                },
                getMovieDetailsUrl: function (imdbId) {
                    return autosubliminal.getUrl(`/library/movies/${imdbId}`);
                },
                getMovieProgressPercentage: function (movie) {
                    return movie.totalSubtitlesAvailable / movie.totalSubtitlesWanted * 100;
                },
                getMovieProgressText: function (movie) {
                    return `${movie.totalSubtitlesAvailable} of ${movie.totalSubtitlesWanted}`;
                }
            }
        });

        // Init vue plugins
        window.Vue.use(window.VueLazyload);

        // Init vue app
        new window.Vue({
            el: '#app'
        });
    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
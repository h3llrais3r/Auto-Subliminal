/**
 * Javascript needed on the library movies page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Init vue component
    Vue.component('library-movies', {
        data: function () {
            return {
                movies: [],
                posterThumbnailUrl: getUrl('/artwork/imdb/poster/thumbnail/')
            }
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
            styleProgressBar();
        },
        methods: {
            getMovies: function () {
                var self = this;
                $.get('/api/movies', function (data) {
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
                        dateFormat: TABLESORTER_DATE_FORMAT,
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
                            $('#movies').find('.loading-row').remove();
                            $('#movies').find('.content-row').removeClass('hidden');
                            $('#movies').trigger('update'); // Trigger table update for the removed loading row
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
            getMovieDetailsUrl: function (imdb_id) {
                return getUrl('/library/movies/' + imdb_id);
            },
            getProcessPercentage: function (movie) {
                return movie.total_subtitles_available / movie.total_subtitles_wanted * 100;
            }
        }
    });

    // Init vue plugins
    Vue.use(VueLazyload);

    // Init vue app
    new Vue({
        el: '#app'
    });
}

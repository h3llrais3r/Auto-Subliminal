/**
 * Javascript needed on the library shows page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Init vue component
    Vue.component('library-shows', {
        data: function () {
            return {
                shows: [],
                bannerThumbnailUrl: getUrl('/artwork/tvdb/banner/thumbnail/'),
                posterThumbnailUrl: getUrl('/artwork/tvdb/poster/thumbnail/')
            }
        },
        created: function () {
            //console.log('created');
        },
        mounted: function () {
            //console.log('mounted');
            this.getShows();
        },
        updated: function () {
            //console.log('updated');
            this.setupShows();
        },
        methods: {
            getShows: function () {
                var self = this;
                $.get('/api/shows', function (data) {
                    self.shows = data;
                });
            },
            setupShows: function () {
                // Setup the shows table
                $('#shows')
                    .tablesorter({
                        debug: false, // Put on true to debug
                        // Enable widgets
                        widgets: ['reflow', 'filter', 'saveSort'],
                        widgetOptions: {
                            // No column filters
                            filter_columnFilters: false,
                            // External filter selector
                            filter_external: '.shows-filter',
                            // Search faster (default 300)
                            filter_searchDelay: 50,
                            // Save filters
                            filter_saveFilters: true,
                            // Reset filter selector
                            filter_reset: '.shows-filter-reset'
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
                        // Remove loading indication and show content when initialized
                        initialized: function () {
                            $('#shows').find('.loading-row').remove();
                            $('#shows').find('.content-row').removeClass('hidden');
                            $('#shows').trigger('update'); // Trigger table update for the removed loading row
                        }
                    })
                    .tablesorterPager({
                        container: $('#showsPager'),
                        output: '{startRow} to {endRow} ({filteredRows})'
                    });

                // Setup the shows filter
                $('.shows-filter-reset').on('click', function () {
                    $(this).prev('input').val('').focus();
                    $.tablesorter.storage($('#shows'), 'tablesorter-filters', '');
                });
            },
            getShowDetailsUrl: function (tvdb_id) {
                // TODO: implement details page
                // return getUrl('/library/shows/' + tvdb_id);
                return '';
            },
            getProcessPercentage: function (show) {
                return show.total_subtitles_available / show.total_subtitles_wanted * 100;
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

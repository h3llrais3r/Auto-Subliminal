/**
 * Javascript needed on the library shows page
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
        window.Vue.component('library-shows', {
            data: function () {
                return {
                    shows: [],
                    bannerThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/banner/thumbnail/'),
                    posterThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/poster/thumbnail/')
                };
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
                autosubliminal.vue.styleProgressBar();
            },
            methods: {
                getShows: function () {
                    const self = this;
                    $.get(autosubliminal.getUrl('/api/shows'), function (data) {
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
                            // Remove loading indication and show content when initialized
                            initialized: function () {
                                const self = $('#shows');
                                self.find('.loading-row').remove();
                                self.find('.content-row').removeClass('hidden');
                                self.trigger('update'); // Trigger table update for the removed loading row
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
                getShowDetailsUrl: function (tvdbId) {
                    return autosubliminal.getUrl(`/library/shows/${tvdbId}`);
                },
                getShowProgressPercentage: function (show) {
                    return show.total_subtitles_available / show.total_subtitles_wanted * 100;
                },
                getShowProgressText: function (show) {
                    return `${show.total_subtitles_available} of ${show.total_subtitles_wanted}`;
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
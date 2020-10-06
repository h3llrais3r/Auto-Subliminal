/**
 * Javascript needed on the status page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    const init = function () {

        // Init vue component
        window.Vue.component('status', {
            data: function () {
                return {
                    schedulers: null,
                    diskusage: null
                };
            },
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
                this.getSchedulers();
                this.getDiskUsage();
            },
            updated: function () {
                //console.log('updated');
                this.setupStatus();
            },
            methods: {
                getSchedulers: function () {
                    const self = this;
                    $.get(autosubliminal.getUrl('/api/schedulers'), function (data) {
                        self.schedulers = data;
                    });
                },
                getDiskUsage: function () {
                    const self = this;
                    $.get(autosubliminal.getUrl('/api/settings/diskusage'), function (data) {
                        self.diskusage = data;
                    });
                },
                setupStatus: function () {
                    // Setup the scheduler table
                    $('#scheduler').tablesorter({
                        // Enable widgets
                        widgets: ['reflow', 'saveSort'],
                        // Sort default by thread name asc
                        sortList: [[0, 0]],
                        // Use specific date format
                        dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
                        // Remove loading indication and show content when initialized
                        initialized: function () {
                            const self = $('#scheduler');
                            self.find('.loading-row').remove();
                            self.find('.content-row').removeClass('hidden');
                            self.trigger('update'); // Trigger table update for the removed loading row
                        }
                    });

                    // Setup the diskusage table
                    $('#diskusage').tablesorter({
                        // Enable widgets
                        widgets: ['reflow', 'saveSort'],
                        // Sort default by folder name asc
                        sortList: [[0, 0]],
                        // Remove loading indication and show content when initialized
                        initialized: function () {
                            const self = $('#diskusage');
                            self.find('.loading-row').remove();
                            self.find('.content-row').removeClass('hidden');
                            self.trigger('update'); // Trigger table update for the removed loading row
                        }
                    });
                },
                formatDateTime: autosubliminal.vue.formatDateTime,
                formatDuration: autosubliminal.vue.formatDuration
            }
        });

        // Init vue app
        new window.Vue({
            el: '#app'
        });

    };

    // Subscribe to process started events
    const processStartedEventSubscriber = function (msg, data) {
        // console.log(msg, data);
        // Mark process as running on status page
        const scheduler_process_row = $('#scheduler').find('#' + data.name);
        scheduler_process_row.children('.scheduler-next-run').text('Running...');
        scheduler_process_row.addClass('scheduler-running');
    };
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, processStartedEventSubscriber);

    // Subscribe to process finished events
    const processFinishedEventSubscriber = function (msg, data) {
        // console.log(msg, data);
        // Mark process as finished on status page
        const scheduler_process_row = $('#scheduler').find('#' + data.name);
        scheduler_process_row.children('.scheduler-alive').text(data.alive);
        scheduler_process_row.children('.scheduler-active').text(data.active);
        scheduler_process_row.children('.scheduler-last-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.last_run)));
        scheduler_process_row.children('.scheduler-next-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.next_run)));
        scheduler_process_row.removeClass('scheduler-running');
    };
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, processFinishedEventSubscriber);

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
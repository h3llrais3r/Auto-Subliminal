/**
 * Javascript needed on the status page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    var init = function () {

        // Setup the scheduler table
        $('#scheduler').tablesorter({
            // Enable widgets
            widgets: ['reflow', 'saveSort'],
            // Sort default by thread name asc
            sortList: [[0, 0]],
            // Use specific date format
            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT
        });

        // Setup the diskspace table
        $('#diskspace').tablesorter({
            // Enable widgets
            widgets: ['reflow', 'saveSort'],
            // Sort default by folder name asc
            sortList: [[0, 0]]
        });

        // Subscribe to process started events
        var processStartedEventSubscriber = function (msg, data) {
            // console.log(msg, data);
            // Mark process as running on status page
            var scheduler_process_row = $('#scheduler').find('#' + data['name']);
            scheduler_process_row.children('.scheduler-next-run').text('Running...');
            scheduler_process_row.addClass('scheduler-running');
        };
        PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, processStartedEventSubscriber);

        // Subscribe to process finished events
        var processFinishedEventSubscriber = function (msg, data) {
            // console.log(msg, data);
            // Mark process as finished on status page
            var scheduler_process_row = $('#scheduler').find('#' + data['name']);
            scheduler_process_row.children('.scheduler-alive').text(data['alive']);
            scheduler_process_row.children('.scheduler-active').text(data['active']);
            scheduler_process_row.children('.scheduler-last-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data['last_run'])));
            scheduler_process_row.children('.scheduler-next-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data['next_run'])));
            scheduler_process_row.removeClass('scheduler-running');
        };
        PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, processFinishedEventSubscriber);
    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

}(autosubliminal));
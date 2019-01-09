/**
 * Javascript needed on the status page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Setup the scheduler table
    $('#scheduler').tablesorter({
        // Enable widgets
        widgets: ['reflow', 'saveSort'],
        // Sort default by thread name asc
        sortList: [[0, 0]],
        // Use specific date format
        dateFormat: TABLESORTER_DATE_FORMAT
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
    PubSub.subscribe(PROCESS_STARTED, processStartedEventSubscriber);

    // Subscribe to process finished events
    var processFinishedEventSubscriber = function (msg, data) {
        // console.log(msg, data);
        // Mark process as finished on status page
        var scheduler_process_row = $('#scheduler').find('#' + data['name']);
        scheduler_process_row.children('.scheduler-alive').text(data['alive']);
        scheduler_process_row.children('.scheduler-active').text(data['active']);
        scheduler_process_row.children('.scheduler-last-run').text(strftime(TIMESTAMP_FORMAT, new Date(data['last_run'])));
        scheduler_process_row.children('.scheduler-next-run').text(strftime(TIMESTAMP_FORMAT, new Date(data['next_run'])));
        scheduler_process_row.removeClass('scheduler-running');
    };
    PubSub.subscribe(PROCESS_FINISHED, processFinishedEventSubscriber);
}

/**
 * Javascript needed on the status page
 */

// Setup the scheduler table
$('#scheduler').tablesorter({
    // Enable widgets
    widgets: ['reflow', 'saveSort'],
    // Sort default by thread name asc
    sortList: [[0, 0]],
    // Use date format 'ddmmyyyy'
    dateFormat: 'ddmmyyyy'
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
    scheduler_process_row.children('.running').text('True');
    scheduler_process_row.addClass('status-scheduler-running');
};
PubSub.subscribe(PROCESS_STARTED, processStartedEventSubscriber);

// Subscribe to process finished events
var processFinishedEventSubscriber = function (msg, data) {
    // console.log(msg, data);
    // Mark process as finished on status page
    var scheduler_process_row = $('#scheduler').find('#' + data['name']);
    scheduler_process_row.children('.running').text('False');
    scheduler_process_row.children('.last-run').text(strftime('%d-%m-%Y %H:%M:%S', new Date(data['last_run'] * 1000)));
    scheduler_process_row.children('.next-run').text(strftime('%d-%m-%Y %H:%M:%S', new Date(data['next_run'] * 1000)));
    scheduler_process_row.removeClass('status-scheduler-running');
};
PubSub.subscribe(PROCESS_FINISHED, processFinishedEventSubscriber);

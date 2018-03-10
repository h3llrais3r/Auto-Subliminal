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

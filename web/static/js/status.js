/**
 * Javascript needed on the status page
 */

// Enable tablesorter for scheduler table
$(document).ready(function () {
    $('#scheduler').tablesorter({
        // Enable widgets
        widgets: ['reflow', 'saveSort'],
        // Sort default by thread name asc
        sortList: [[0, 0]],
        // Use date format 'ddmmyyyy'
        dateFormat: 'ddmmyyyy'
    });
});

// Enable tablesorter for diskspace table
$(document).ready(function () {
    $('#diskspace').tablesorter({
        // Enable widgets
        widgets: ['reflow', 'saveSort'],
        // Sort default by folder name asc
        sortList: [[0, 0]]
    });
});

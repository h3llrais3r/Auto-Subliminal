/**
 * Javascript needed on the status page
 */

// Enable tablesorter for scheduler table
$(document).ready(function () {
    $("#scheduler").tablesorter({
        // Sort default by thread name asc
        sortList: [[0, 0]],
        // Use date format 'pt'
        dateFormat: 'pt'
    });
});

// Enable tablesorter for diskspace table
$(document).ready(function () {
    $("#diskspace").tablesorter({
        // Sort default by folder name asc
        sortList: [[0, 0]]
    });
});

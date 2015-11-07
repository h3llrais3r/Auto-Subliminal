/**
 * Javascript needed on the status page
 */

// Enable tablesorter for status table
$(document).ready(function () {
    $("#statusoverview").tablesorter({
        // Sort default by thread name asc
        sortList: [[0, 0]],
        // Use date format 'pt'
        dateFormat: 'pt'
    });
});

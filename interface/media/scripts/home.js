/**
 * Javascript needed on the home page
 */

// Enable tablesorter and tablesorterPager for wanteditems table
$(document).ready(function () {
    $("#wanteditems")
        .tablesorter({
            // Enable widgets
            widgets: ['reflow', 'filter', 'saveSort', 'zebra'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector
                filter_external: '.wanteditemsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50,
                // Save filters
                filter_saveFilters: true,
                // Reset filter selector
                filter_reset: '.wanteditemsfilterreset'
            },
            // Use date format 'ddmmyyyy'
            dateFormat: 'ddmmyyyy',
            // Force text sorter in show/movie name column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                1: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[9, 1]]
        })
        .tablesorterPager({
            container: $("#wanteditemspager"),
            output: '{startRow} to {endRow} ({filteredRows})'
        });
});

$(".wanteditemsfilterreset").click(function () {
    $(this).prev("input").val("").focus();
    $.tablesorter.storage($("#wanteditems"), "tablesorter-filters", "");
});

// Enable tablesorter and tablesorterPager for lastdownloads table
$(document).ready(function () {
    $("#lastdownloads")
        .tablesorter({
            // Enable widgets
            widgets: ['reflow', 'filter', 'saveSort', 'zebra'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector
                filter_external: '.lastdownloadsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50,
                // Save filters
                filter_saveFilters: true,
                // Reset filter selector
                filter_reset: '.lastdownloadsfilterreset'
            },
            // Use date format 'ddmmyyyy'
            dateFormat: 'ddmmyyyy',
            // Force text sorter in show/movie name column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                1: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[9, 1]]
        })
        .tablesorterPager({
            container: $("#lastdownloadspager"),
            output: '{startRow} to {endRow} ({filteredRows})'
        });
});
// Handle filter reset
$(".lastdownloadsfilterreset").click(function () {
    $(this).prev("input").val("").focus();
    $.tablesorter.storage($("#lastdownloads"), "tablesorter-filters", "");
});

// Activate the container-manualsearch-link
$(".container-manualsearch-link").click(function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var searchUrl = $(this).attr("href");
    var loadingIcon = $(this).next("i");
    var contentDiv = $(this).parent("div").next("div");
    // show the loading icon
    loadingIcon.removeClass("invisible").addClass("visible");
    // call the searchUrl
    $.get(searchUrl, function (data) {
        // hide the loading icon
        loadingIcon.removeClass("visible").addClass("invisible");
        // output result (empty before storing new data)
        contentDiv.empty();
        contentDiv.append(data);
    });
    return false;
});
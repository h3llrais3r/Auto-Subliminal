/**
 * Javascript needed on the home page
 */

// Enable tablesorter and tablesorterPager for wanteditems table
$(document).ready(function () {
    $("#wanteditems")
        .tablesorter({
            // Enable widgets
            widgets: ['reflow', 'filter'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector (will match any column)
                filter_external: '#wanteditemsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50
            },
            // Use date format 'ddmmyyyy'
            dateFormat: 'ddmmyyyy',
            // Force text sorter in first column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                0: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[8, 1]]
        })
        .tablesorterPager({
            container: $("#wanteditemspager"),
            output: '{startRow} to {endRow} ({totalRows})'
        });
});

// Enable tablesorter and tablesorterPager for lastdownloads table
$(document).ready(function () {
    $("#lastdownloads")
        .tablesorter({
            // Enable widgets
            widgets: ['reflow', 'filter'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector (will match any column)
                filter_external: '#lastdownloadsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50
            },
            // Use date format 'ddmmyyyy'
            dateFormat: 'ddmmyyyy',
            // Force text sorter in first column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                0: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[8, 1]]
        })
        .tablesorterPager({
            container: $("#lastdownloadspager"),
            output: '{startRow} to {endRow} ({totalRows})'
        });
});

// Activate the container-manualsearch-link
$(".container-manualsearch-link").click(function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var searchUrl = $(this).attr("href");
    var loadingImg = $(this).next("img");
    var contentDiv = $(this).parent("div").next("div");
    // show the loading image
    loadingImg.removeClass("invisible").addClass("visible");
    // call the searchUrl
    $.get(searchUrl, function (data) {
        // hide the loading image
        loadingImg.removeClass("visible").addClass("invisible");
        // output result (empty before storing new data)
        contentDiv.empty();
        contentDiv.append(data);
    });
    return false;
});
/**
 * Javascript needed on the home page
 */

// Enable tablesorter for wanteditems table
$(document).ready(function () {
    $("#wanteditems").tablesorter({
        // Sort default by time desc
        sortList: [[8, 1]],
        // date format 'pt'
        dateFormat: 'pt'
    });
});

// Enable tablesorter for lastdownloads table
$(document).ready(function () {
    $("#lastdownloads").tablesorter({
        // Sort default by time desc
        sortList: [[8, 1]],
        // date format 'pt'
        dateFormat: 'pt'
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
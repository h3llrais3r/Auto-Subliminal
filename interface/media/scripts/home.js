// Javascript needed to handle a manual search

$(function () {
    // When a manual search link is clicked
    $(".manualsearchlink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var searchurl = $(this).attr("href");
        var loadingimg = $(this).next("img");
        var resultdiv = $(this).closest("li").next("li").children("div").first();
        // show the loading image
        loadingimg.show();
        // call the searchurl
        $.get(searchurl, function (data) {
            // hide the loading image
            loadingimg.hide();
            // output result (empty before storing new data)
            resultdiv.empty();
            resultdiv.append(data);
        });
        return false;
    });
});

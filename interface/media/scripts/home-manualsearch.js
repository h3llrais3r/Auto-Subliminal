// Javascript needed to handle the logic on the home-manualsearch.tmpl

$(function () {
    // When a manual search visit link is clicked
    $(".manualsearchvisitlink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var url = $(this).attr("href");
        window.open(url, '_blank');
        return false;
    });

    // When a manual search save link is clicked
    $(".manualsearchsavelink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var saveurl = $(this).attr("href");
        // call the saveurl
        $.get(saveurl, function (data) {
            if (data['result']) {
                // show info message
                $("#div-info").append(data['infomessage']);
            } else {
                // show error message
                $("#div-error").append(data['errormessage']);
            }
        });
        return false;
    });

    // When a manual search play link is clicked
    $(".manualsearchplaylink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var playurl = $(this).attr("href");
        // call the playurl
        $.get(playurl, function (data) {
            if (data['result']) {
                // do nothing, just play the video
            } else {
                // show error message
                $("#div-error").append(data['errormessage']);
            }
        });
        return false;
    });

    // When a manual search postprocess link is clicked
    $(".manualsearchpostprocesslink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var postprocessurl = $(this).attr("href");
        // call the postprocessurl
        $.get(postprocessurl, function (data) {
            if (data['result']) {
                // redirect
                window.location.href = data['redirect'];
            } else {
                // show error message
                $("#div-error").append(data['errormessage']);
            }
        });
        return false;
    });

    // When a manual search provider is hovered
    $(".manualsearchprovidertext").hoverIntent(function (event) {
            // show the provider releases as tooltip
            $(this).next("div").show();
        },
        function (event) {
            // hide the provider releases as tooltip
            $(this).next("div").hide();
        });
});

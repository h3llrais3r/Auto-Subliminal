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
        var url = $(this).attr("href");
        // call the url
        $.get(url, function (data) {
            emptyMessages();
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

    // When a manual search delete link is clicked
    $(".manualsearchdeletelink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var url = $(this).attr("href");
        // call the url
        $.get(url, function (data) {
            emptyMessages();
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
        // define variables
        var url = $(this).attr("href");
        // play the video
        window.location = url;
        emptyMessages();
        // show info message
        $("#div-info").append("Trying to play the video. ");
        $("#div-info").append("If the video does not start, you'll need to install the 'playvideo://' protocol first!");
        return false;
    });

    // When a manual search postprocess link is clicked
    $(".manualsearchpostprocesslink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var url = $(this).attr("href");
        // call the url
        $.get(url, function (data) {
            emptyMessages();
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

function emptyMessages() {
    $("#div-info").empty();
    $("#div-error").empty();
}

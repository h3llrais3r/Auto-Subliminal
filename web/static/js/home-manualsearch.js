/**
 * Javascript needed on the home-manualsearch page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    // Function to empty the messages on the page
    var emptyMessages = function () {
        $('#infoMessage').empty();
        $('#errorMessage').empty();
    };

    // Setup the manual search visit website link
    $('.manualsearch-visit-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var url = $(this).attr('href');
        // Visit page
        window.open(url, '_blank');
        return false;
    });

    // Setup the manual search save subtitle link
    $('.manualsearch-save-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var url = $(this).attr('href');
        // Call url
        $.get(url, function (data) {
            emptyMessages();
            if (data['result']) {
                // Show info message
                $('#infoMessage').append(data['infomessage']);
            } else {
                // Show error message
                $('#errorMessage').append(data['errormessage']);
            }
        });
        return false;
    });

    // Setup the manual search delete subtitle link
    $('.manualsearch-delete-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var url = $(this).attr('href');
        // Call url
        $.get(url, function (data) {
            emptyMessages();
            if (data['result']) {
                // Show info message
                $('#infoMessage').append(data['infomessage']);
            } else {
                // Show error message
                $('#errorMessage').append(data['errormessage']);
            }
        });
        return false;
    });

    // Setup the manual search play video link
    $('.manualsearch-play-link').on('click', function (event) {
        // Play video
        window.location = $(this).attr('href');
        // Show info message
        emptyMessages();
        var infoMessage = $('#infoMessage');
        infoMessage.append('Trying to play the video. ');
        infoMessage.append('If the video does not start, you\'ll need to install the \'playvideo://\' protocol first!');
        return false;
    });

    // Setup the manual search post process link
    $('.manualsearch-postprocess-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var postProcessLink = $(this);
        var url = $(this).attr('href');
        // Toggle postprocessing icon
        postProcessLink.find('i').toggleClass('hidden');
        // Call url
        $.get(url, function (data) {
            emptyMessages();
            if (data['result']) {
                // Toggle postprocessing icon
                postProcessLink.find('i').toggleClass('hidden');
                // Redirect
                window.location.href = data['redirect'];
            } else {
                // Toggle postprocessing icon
                postProcessLink.find('i').toggleClass('hidden');
                // Show error message
                $('#errorMessage').append(data['errormessage']);
            }
        });
        return false;
    });

    // Setup the hover on the provider name to show the supported releases
    $('.dropdown-hoverintent').hoverIntent(
        function (event) {
            // Show the provider releases as tooltip
            $(this).next('ul').show();
        },
        function (event) {
            // Hide the provider releases as tooltip
            $(this).next('ul').hide();
        });

}(autosubliminal));
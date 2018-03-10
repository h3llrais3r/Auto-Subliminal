/**
 * Javascript needed on the home-manualsearch page
 */

// Setup the manual search visit website link
$('.manualsearchvisitlink').on('click', function (event) {
    // Prevent default behaviour
    event.preventDefault();
    // Define variables
    var url = $(this).attr('href');
    // Visit page
    window.open(url, '_blank');
    return false;
});

// Setup the manual search save subtitle link
$('.manualsearchsavelink').on('click', function (event) {
    // Prevent default behaviour
    event.preventDefault();
    // Define variables
    var url = $(this).attr('href');
    // Call url
    $.get(url, function (data) {
        emptyMessages();
        if (data['result']) {
            // Show info message
            $('#div-info').append(data['infomessage']);
        } else {
            // Show error message
            $('#div-error').append(data['errormessage']);
        }
    });
    return false;
});

// Setup the manual search delete subtitle link
$('.manualsearchdeletelink').on('click', function (event) {
    // Prevent default behaviour
    event.preventDefault();
    // Define variables
    var url = $(this).attr('href');
    // Call url
    $.get(url, function (data) {
        emptyMessages();
        if (data['result']) {
            // Show info message
            $('#div-info').append(data['infomessage']);
        } else {
            // Show error message
            $('#div-error').append(data['errormessage']);
        }
    });
    return false;
});

// Setup the manual search play video link
$('.manualsearchplaylink').on('click', function (event) {
    // Define variables
    var url = $(this).attr('href');
    // Play video
    window.location = url;
    emptyMessages();
    // Show info message
    $('#div-info').append('Trying to play the video. ');
    $('#div-info').append('If the video does not start, you\'ll need to install the \'playvideo://\' protocol first!');
    return false;
});

// Setup the manual search post process link
$('.manualsearchpostprocesslink').on('click', function (event) {
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
            $('#div-error').append(data['errormessage']);
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

// Function to empty the messages on the page
function emptyMessages() {
    $('#div-info').empty();
    $('#div-error').empty();
}
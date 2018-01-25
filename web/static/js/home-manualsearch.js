/**
 * Javascript needed on the home-manualsearch page
 */

// Activate the manualsearchvisitlink
$('.manualsearchvisitlink').on('click', function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var url = $(this).attr('href');
    window.open(url, '_blank');
    return false;
});

// Activate the manualsearchsavelink
$('.manualsearchsavelink').on('click', function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var url = $(this).attr('href');
    // call the url
    $.get(url, function (data) {
        emptyMessages();
        if (data['result']) {
            // show info message
            $('#div-info').append(data['infomessage']);
        } else {
            // show error message
            $('#div-error').append(data['errormessage']);
        }
    });
    return false;
});

// Activate the manualsearchdeletelink
$('.manualsearchdeletelink').on('click', function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var url = $(this).attr('href');
    // call the url
    $.get(url, function (data) {
        emptyMessages();
        if (data['result']) {
            // show info message
            $('#div-info').append(data['infomessage']);
        } else {
            // show error message
            $('#div-error').append(data['errormessage']);
        }
    });
    return false;
});

// Activate the manualsearchplaylink
$('.manualsearchplaylink').on('click', function (event) {
    // define variables
    var url = $(this).attr('href');
    // play the video
    window.location = url;
    emptyMessages();
    // show info message
    $('#div-info').append('Trying to play the video. ');
    $('#div-info').append('If the video does not start, you\'ll need to install the \'playvideo://\' protocol first!');
    return false;
});

// Activate the manualsearchpostprocesslink
$('.manualsearchpostprocesslink').on('click', function (event) {
    // prevent default behaviour
    event.preventDefault();
    // define variables
    var postProcessLink = $(this);
    var url = $(this).attr('href');
    // toggle postprocessing icon
    postProcessLink.find('i').toggleClass('hidden');
    // call the url
    $.get(url, function (data) {
        emptyMessages();
        if (data['result']) {
            // toggle postprocessing icon
            postProcessLink.find('i').toggleClass('hidden');
            // redirect
            window.location.href = data['redirect'];
        } else {
            // toggle postprocessing icon
            postProcessLink.find('i').toggleClass('hidden');
            // show error message
            $('#div-error').append(data['errormessage']);
        }
    });
    return false;
});

// Activate the text hover
$('.dropdown-hoverintent').hoverIntent(function (event) {
        // show the provider releases as tooltip
        $(this).next('ul').show();
    },
    function (event) {
        // hide the provider releases as tooltip
        $(this).next('ul').hide();
    });

// Function to empty the messages on the page
function emptyMessages() {
    $('#div-info').empty();
    $('#div-error').empty();
}
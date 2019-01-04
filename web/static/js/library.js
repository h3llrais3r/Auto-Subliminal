/**
 * Javascript shared across all library pages
 */

// Check if the library scanner is running
var checkLibraryScannerRunning = function () {
    $.get(getUrl('/api/schedulers/' + LIBRARY_SCANNER), function (data) {
        if (!jQuery.isEmptyObject(data) && data.running) {
            $('.library-scanner-running').removeClass('hidden');
        }
    });
};

// Subscriber to library scanner started events
var libraryScannerStartedEventSubscriber = function (msg, data) {
    // Show that a library scan is running
    if (!jQuery.isEmptyObject(data) && data['name'] == LIBRARY_SCANNER) {
        $('.library-scanner-running').removeClass('hidden');
    }
};

// Subscriber to library scanner finished events
var libraryScannerFinishedEventSubscriber = function (msg, data) {
    // Hide that a library scan is running
    if (!jQuery.isEmptyObject(data) && data['name'] == LIBRARY_SCANNER) {
        $('.library-scanner-running').addClass('hidden');
    }
};

var filterLanguagesByAlpha2 = function (alpha2Languages) {
    var languages = [];
    for (var i = 0; i < alpha2Languages.length; i++) {
        var alpha2Language = alpha2Languages[i];
        for (var j = 0; j < LANGUAGES.length; j++) {
            if (LANGUAGES[j].alpha2 == alpha2Language) {
                languages.push(LANGUAGES[j]);
            }
        }
    }
    return languages;
};

var convertToAlpha2Languages = function (languages) {
    var alpha2Languages = [];
    for (var i = 0; i < languages.length; i++) {
        alpha2Languages.push(languages[i].alpha2);
    }
    return alpha2Languages;
};


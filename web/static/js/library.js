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


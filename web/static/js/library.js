/**
 * Javascript shared across all library pages
 */

'use strict';


(function (autosubliminal) {

    'use strict';

    /* =================
     * Library functions
     * ================= */

    // Function to check if the library scanner is running
    autosubliminal.library.checkScannerRunning = function () {
        $.get(autosubliminal.getUrl('/api/schedulers/' + autosubliminal.SCAN_LIBRARY), function (data) {
            if (!jQuery.isEmptyObject(data) && data.running) {
                $('.library-scanner-running').removeClass('hidden');
            }
        });
    };

    // Function to check for the library scanner started events
    autosubliminal.library.scannerStartedEventSubscriber = function (msg, data) {
        // Show that a library scan is running
        if (!jQuery.isEmptyObject(data) && data.name == autosubliminal.SCAN_LIBRARY) {
            $('.library-scanner-running').removeClass('hidden');
        }
    };

    // Function to check for the library scanner finished events
    autosubliminal.library.scannerFinishedEventSubscriber = function (msg, data) {
        // Hide that a library scan is running
        if (!jQuery.isEmptyObject(data) && data.name == autosubliminal.SCAN_LIBRARY) {
            $('.library-scanner-running').addClass('hidden');
        }
    };

}(autosubliminal));

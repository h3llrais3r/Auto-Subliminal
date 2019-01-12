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
            if (!jQuery.isEmptyObject(data) && data['running']) {
                $('.library-scanner-running').removeClass('hidden');
            }
        });
    };

    // Function to check for the library scanner started events
    autosubliminal.library.scannerStartedEventSubscriber = function (msg, data) {
        // Show that a library scan is running
        if (!jQuery.isEmptyObject(data) && data['name'] == autosubliminal.SCAN_LIBRARY) {
            $('.library-scanner-running').removeClass('hidden');
        }
    };

    // Function to check for the library scanner finished events
    autosubliminal.library.scannerFinishedEventSubscriber = function (msg, data) {
        // Hide that a library scan is running
        if (!jQuery.isEmptyObject(data) && data['name'] == autosubliminal.SCAN_LIBRARY) {
            $('.library-scanner-running').addClass('hidden');
        }
    };

    // Function to construct a playvideo url
    autosubliminal.library.constructPlayVideoUrl = function (filePath, filename) {
        return 'playvideo://' + filePath + autosubliminal.PATH_SEPARTOR + filename;
    };

    // Function to convert a list of alpha2 language codes to a list of language objects
    autosubliminal.library.convertToLanguages = function (alpha2Languages) {
        var languages = [];
        for (var i = 0; i < alpha2Languages.length; i++) {
            var alpha2Language = alpha2Languages[i];
            for (var j = 0; j < autosubliminal.LANGUAGES.length; j++) {
                if (autosubliminal.LANGUAGES[j].alpha2 == alpha2Language) {
                    languages.push(autosubliminal.LANGUAGES[j]);
                }
            }
        }
        return languages;
    };

    // Function to convert a list of language objects to a list of alpha2 language codes
    autosubliminal.library.convertToAlpha2Languages = function (languages) {
        var alpha2Languages = [];
        for (var i = 0; i < languages.length; i++) {
            alpha2Languages.push(languages[i].alpha2);
        }
        return alpha2Languages;
    };

}(autosubliminal));

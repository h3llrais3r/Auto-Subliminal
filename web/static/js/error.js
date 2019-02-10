/**
 * Javascript needed on the error page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    // Setup the traceback link
    $('.traceback-link').on('click', function () {
        $('.traceback-error').toggleClass('hidden');
    });

}(autosubliminal));
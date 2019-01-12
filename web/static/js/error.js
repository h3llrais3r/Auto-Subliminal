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
    $('#tracebackLink').on('click', function () {
        $('#traceback').toggleClass('hidden');
    });

}(autosubliminal));
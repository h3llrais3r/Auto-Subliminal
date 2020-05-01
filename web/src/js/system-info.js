/**
 * Javascript needed on the config-info page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    // Setup the info tabs
    $('#infoTabs').find('a').on('click', function (event) {
        event.preventDefault();
        $(this).tab('show');
    });

})(autosubliminal);
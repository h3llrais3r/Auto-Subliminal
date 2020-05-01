/**
 * Javascript needed on the restart page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    // Function to check if the system is alive
    var isAlive = function () {
        $.get(autosubliminal.getUrl('/system/isAlive'), function (data) {
            // Not yet restarted -> wait
            if (!jQuery.isEmptyObject(data) && data['msg'] == 'False') {
                setTimeout(isAlive, 2000);
            }
            // Started -> remove modal and reload
            else {
                $('#restartModal').modal('hide');
                window.location = autosubliminal.getUrl('/home');
            }
        }, 'jsonp');
    };

    // Show the restart modal
    $('#restartModal').modal('show');

    // Start isAlive check
    isAlive();

}(autosubliminal));
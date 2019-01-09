/**
 * Javascript needed on the restart page
 */

'use strict';

// Function to check if the system is alive
function isAlive() {
    $.get(getUrl('/system/isAlive'), function (data) {
        // Not yet restarted -> wait
        if (data.msg == 'False') {
            setTimeout(isAlive, 2000);
        }
        // Started -> remove modal and reload
        else {
            $('#restartModal').modal('hide');
            window.location = getUrl('/home');
        }
    }, 'jsonp');
}

// Show the restart modal and call the isAlive function
$('#restartModal').modal('show');
isAlive();

/**
 * Javascript needed on the restart page
 */

var is_alive_url = webroot + "/system/isAlive";

// Function to check if the system is alive
function is_alive() {
    $.get(is_alive_url, function (data) {
        // not yet restarted -> wait
        if (data.msg == "False") {
            setTimeout(is_alive, 2000);
        }
        // started -> remove modal and reload
        else {
            $("#restartModal").modal('hide');
            window.location = base_url + "/home";
        }
    }, "jsonp");
}

// Activate the modal and is_alive function
$(document).ready(function () {
    $('#restartModal').modal('show');
    is_alive();
});
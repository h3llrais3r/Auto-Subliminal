/**
 * Javascript needed on the restart page
 */

var base_url = window.location.protocol + "//" + window.location.host + webroot;
var is_alive_url = webroot + "/system/isAlive";

// Function to check if the system is alive
function is_alive() {
    $.get(is_alive_url, function (data) {
        // not yet restarted -> wait
        if (data.msg == "False") {
            setTimeout(is_alive, 2000);
        }
        // started -> reload
        else {
            window.location = base_url + "/home";
        }
    }, "jsonp");
}

// Activate the is_alive function
$(document).ready(function () {
    is_alive();
});
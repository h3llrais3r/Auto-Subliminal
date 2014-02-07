// Javascript needed reload of the homepage after a restart

var base_url = window.location.protocol + '//' + window.location.host + webroot;
var is_alive_url = webroot + '/home/is_alive';
var current_pid = '';

function is_alive() {
    $.get(is_alive_url, function(data) {
        // not yet restarted -> wait
        if (data.msg == 'False') {
            setTimeout(is_alive, 2000);
        }
        // started -> reload
        else {
            window.location = base_url + '/home';
        }
    }, 'jsonp');
}

$(document).ready(function() {
    is_alive();
});
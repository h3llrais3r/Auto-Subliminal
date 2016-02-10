/*!
 * Javascript for general Auto-Subliminal stuff
 */

var get_message_url = webroot + "/system/getMessage";

// Handle navbar active navigation button (no submit)
$(".navbar .nav a").on("click", function () {
    $(".navbar").find(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

//Handle navbar active navigation button (after submit)
$(document).ready(function () {
    subpath = "/" + location.pathname.replace(webroot, "").split("/")[1] + "/";
    $(".navbar").find(".nav").find('a[href="' + subpath + '"]')
        .closest('li').addClass('active');
});

// Handle countdown until scandisk next run date
$(document).ready(function () {
    scandisknextrundate = new Date();
    scandisknextrundate.setTime($("#scandisk-nextrun-time-ms").val());
    $("#scandisk-nextrun").countdown(scandisknextrundate, function (event) {
        if (event.strftime('%H:%M:%S') == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime('%H:%M:%S'));
        }
    });
});

// Handle countdown until checksub next run date
$(document).ready(function () {
    checksubnextrundate = new Date();
    checksubnextrundate.setTime($("#checksub-nextrun-time-ms").val());
    $("#checksub-nextrun").countdown(checksubnextrundate, function (event) {
        if (event.strftime('%H:%M:%S') == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime('%H:%M:%S'));
        }
    });
});

// Function to check if a message is available to show
function get_message() {
    $.get(get_message_url, function (data) {
        if (!jQuery.isEmptyObject(data)) {
            _show_message(data['message'], data['severity'])
        }
        //TODO: What with this timeout? Keep it or not because it generates a lot of calls to the backend...
        setTimeout(get_message, 3000);
    });
}

// Function to show the noty message
function _show_message(noty_message, noty_type) {
    noty({
        layout: 'bottomRight',
        theme: 'bootstrapTheme',
        type: noty_type,
        text: noty_message,
        dismissQueue: true,
        animation: {
            open: {height: 'toggle'},
            close: {height: 'toggle'},
            easing: 'swing',
            speed: 500
        },
        timeout: 5000 // show message for 5s
    });
}

// Activate the get_message function
$(document).ready(function () {
    get_message();
});
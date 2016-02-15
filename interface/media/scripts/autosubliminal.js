/*!
 * Javascript for general Auto-Subliminal stuff
 */

/* ======
 * Navbar
 *======= */

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

/* =========
 * Countdown
 * ========= */

// Enable countdown until scandisk next run date
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

// Enable countdown until checksub next run date
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

/* =============
 * Notifications
 * ============= */

// Define the get_message_url variable
var get_message_url = webroot + "/system/getMessage";

// Define the function to check if a notification message is available to show
function get_message() {
    $.get(get_message_url, function (data) {
        if (!jQuery.isEmptyObject(data)) {
            _show_message(data['message'], data['message_type'])
        }
        setTimeout(get_message, 3000);
    });
}

// Notification options - PNotify options
// By default we will use desktop notifications, but we also provide settings for fallback to browser notifications
var stack_bottomright = {
    "dir1": "up",
    "dir2": "left",
    "firstpos1": 10,
    "firstpos2": 10,
    "spacing1": 10,
    "spacing2": 10
};
PNotify.prototype.options.stack = stack_bottomright;
PNotify.prototype.options.addclass = "stack-bottomright";
PNotify.prototype.options.styling = "bootstrap3";
PNotify.prototype.options.delay = 5000;
PNotify.prototype.options.desktop.desktop = true; // Use desktop notifications
PNotify.desktop.permission(); // Check for permission for desktop notifications

// Define the function to show a notification message
function _show_message(message, message_type) {
    new PNotify({
        title: 'Auto-Subliminal',
        text: message,
        type: message_type
    });
}

// Activate the get_message function
$(document).ready(function () {
    get_message();
});
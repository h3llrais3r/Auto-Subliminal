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

// Function to check if a notification message is available to show
function get_message() {
    $.get(get_message_url, function (data) {
        if (!jQuery.isEmptyObject(data)) {
            _show_message(data['message'], data['message_type'])
        }
        //TODO: What with this timeout? Keep it or not because it generates a lot of calls to the backend...
        setTimeout(get_message, 3000);
    });
}

// Function to show the notification message
function _show_message(message, message_type) {
    // Use desktop notifications
    PNotify.desktop.permission();
    // Also configure for normal notifications when desktop notifications are not allowed
    var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 0, "firstpos2": 0};
    new PNotify({
        title: '',
        text: message,
        type: message_type,
        styling: "bootstrap3",
        delay: 5000,
        addclass: "stack-bottomright",
        stack: stack_bottomright,
        desktop: {
            desktop: true
        }
    });
}

// Activate the get_message function
$(document).ready(function () {
    get_message();
});
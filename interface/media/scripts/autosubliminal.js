/*!
 * Javascript for general Auto-Subliminal stuff
 */

/* ================
 * Global variables
 * ================ */

var base_url = window.location.protocol + "//" + window.location.host + webroot;

/* ======
 * Navbar
 * ====== */

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

/* ========
 * Checkbox
 * ======== */

// Usage (hidden field reflects the values of the checkbox):
// <input type="checkbox" data-toggle="toggle" data-on="Enabled" data-off="Disabled" data-size="small">
// <input type="hidden" id="<id/name>" name="<id/name>" value="<variable_true_or_false>">

// Handle toggle checkbox values with hidden field (to support both 'on' and 'off' values on submit)
$('input[type=checkbox][data-toggle=toggle]').on('change', function () {
    // We need to get the parent first because bootstrap-toggle adds a toggle-group div around the checkbox
    var target = $(this).parent().next('input[type=hidden]').val();
    if (target == 'False') {
        target = 'True';
    } else {
        target = 'False';
    }
    $(this).parent().next('input[type=hidden]').val(target);
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

// By default we will use desktop notifications, but we also provide settings for fallback to browser notifications
// Bottom right stack - to be aligned with desktop notifications at the right bottom
var stack_bottomright = {
    "dir1": "up",
    "dir2": "left",
    "firstpos1": 10,
    "firstpos2": 10,
    "spacing1": 10,
    "spacing2": 10
};
// Alternative stack - center stack - copied from https://github.com/sciactive/pnotify/issues/46
var stack_center = {
    "dir1": "down",
    "dir2": "right",
    "firstpos1": 4,
    "firstpos2": ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2)
};
// Function to adapt the center stack when resizing the browser
$(window).resize(function () {
    stack_center.firstpos2 = ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2);
});
// Alternative stack - context stack
var stack_context = {
    "dir1": "down",
    "dir2": "right",
    "context": $("#stack-context")
};
// PNotify default options
PNotify.prototype.options.stack = stack_bottomright;
PNotify.prototype.options.addclass = "stack-bottomright";
PNotify.prototype.options.styling = "bootstrap3";
PNotify.prototype.options.delay = 5000;
PNotify.prototype.options.desktop.desktop = true; // Use desktop notifications
PNotify.desktop.permission(); // Check for permission for desktop notifications

// Set the get_message_url variable
var get_message_url = webroot + "/system/getMessage";

// Function to check if a notification message is available to show
function get_message() {
    $.get(get_message_url, function (data) {
        if (!jQuery.isEmptyObject(data)) {
            _show_message(data['message'], data['message_type'], data['sticky'])
        }
        setTimeout(get_message, 3000);
    });
}

// Set the websocket_message_url variable
var websocket_message_url = "ws://" + window.location.host + "/" + webroot + "/system/message"

// Function to get a message through websocket
function get_message_through_websocket(text_message) {
    data = text_message.data;
    // console.log('Received websocket message: ' + data);
    if (!jQuery.isEmptyObject(data)) {
        data_json = jQuery.parseJSON(data);
        _show_message(data_json['message'], data_json['message_type'], data_json['sticky']);
    }
}

// Function to show a notification message
function _show_message(message, message_type, sticky) {
    // Sticky location - use stack_context
    if (sticky) {
        new PNotify({
            title: false, // Remove title
            text: message,
            type: message_type,
            hide: false, // Disable fading
            width: "350px",
            addclass: "stack-context",
            stack: stack_context,
            desktop: {
                desktop: false // Disable desktop
            }
        });
    }
    // Default location
    else {
        new PNotify({
            title: 'Auto-Subliminal',
            text: message,
            type: message_type
        });
    }
}

// Activate the message notification system (choose between polling or websocket)
$(document).ready(function () {
    // Use poling mechanism
    // get_message();
    // Use websocket mechanism
    ws = new WebSocket(websocket_message_url);
    ws.onmessage = get_message_through_websocket;
    // console.log("Websocket ready to receive messages");
});

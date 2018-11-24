/**
 * Javascript for general Auto-Subliminal stuff
 */

/* ================
 * Global variables
 * ================ */

var base_url = window.location.protocol + '//' + window.location.host + webroot;

/* ================
 * Global utilities
 * ================ */

// Jquery wrapper to post with json content-type
$.postJSON = function (url, data, success, dataType) {
    if (typeof data != 'string') {
        data = JSON.stringify(data);
    }
    $.ajax({
        url: url,
        type: 'post',
        data: data,
        dataType: dataType || 'json',
        contentType: 'application/json; charset=utf-8',
        success: success
    });
};

/* ======
 * Navbar
 * ====== */

// Highlight the active navigation button (without page submit)
$('.navbar .nav a').on('click', function () {
    // Skip change of active navigation button for links that run a process on the server (without page submit)
    if (!$(this).hasClass('run-process')) {
        $('.navbar').find('.nav').find('.active').removeClass('active');
        $(this).parent().addClass('active');
    }
});

//Highlight the active navigation button (after page submit)
var base_path = '/' + location.pathname.replace(webroot, '').split('/')[1] + '/';
$('.navbar').find('.nav').find('a[href=\'' + base_path + '\']').closest('li').addClass('active');

// Setup navigation links that trigger the run of a process on the server
$('.navbar .nav a.run-process').on('click', function (event) {
    // Prevent default behaviour
    event.preventDefault();
    // Run the process
    var process_name = $(this).data('process-name');
    run_process_on_server(process_name);
});

/* ========
 * Checkbox
 * ======== */

// Usage (hidden field reflects the values of the checkbox):
// <input type='checkbox' data-toggle='toggle' data-on='Enabled' data-off='Disabled' data-size='small'>
// <input type='hidden' id='<id/name>' name='<id/name>' value='<variable_true_or_false>'>

// Handle the toggle checkbox values with a hidden field (to support both 'on' and 'off' values on submit)
$('input[type=checkbox][data-toggle=toggle][data-on=Enabled][data-off=Disabled]').on('change', function () {
    // We need to get the parent first because bootstrap-toggle adds a toggle-group div around the checkbox
    var target = $(this).parent().next('input[type=hidden]').val();
    if (target == 'False') {
        target = 'True';
    } else {
        target = 'False';
    }
    $(this).parent().next('input[type=hidden]').val(target);
});

/* ========
 * Popovers
 * ======== */

// Enable the popovers
$('[data-toggle=popover]').popover();

/* =========
 * Countdown
 * ========= */

// Setup the countdown until scandisk next run date
var scandisk_next_run_date = new Date();
scandisk_next_run_date.setTime($('#scandisk-nextrun-time-ms').val());
$('#scandisk-nextrun').countdown(scandisk_next_run_date, function (event) {
    if (event.strftime('%H:%M:%S') == '00:00:00') {
        $(this).text('Running...');
    } else {
        $(this).text(event.strftime('%H:%M:%S'));
    }
});

// Setup the countdown until checksub next run date
var checksub_next_run_date = new Date();
checksub_next_run_date.setTime($('#checksub-nextrun-time-ms').val());
$('#checksub-nextrun').countdown(checksub_next_run_date, function (event) {
    if (event.strftime('%H:%M:%S') == '00:00:00') {
        $(this).text('Running...');
    } else {
        $(this).text(event.strftime('%H:%M:%S'));
    }
});

/* =============
 * Notifications
 * ============= */

// By default we will use desktop notifications, but we also provide settings for fallback to browser notifications

// Bottom right stack - to be aligned with desktop notifications at the right bottom
var stack_bottomright = {
    'dir1': 'up',
    'dir2': 'left',
    'firstpos1': 10,
    'firstpos2': 10,
    'spacing1': 10,
    'spacing2': 10
};

// Alternative stack - center stack - copied from https://github.com/sciactive/pnotify/issues/46
var stack_center = {
    'dir1': 'down',
    'dir2': 'right',
    'firstpos1': 4,
    'firstpos2': ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2)
};

// Handle the center stack when resizing the browser
$(window).on('resize', function () {
    stack_center.firstpos2 = ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2);
});

// Alternative stack - context stack
var stack_context = {
    'dir1': 'down',
    'dir2': 'right',
    'context': $('#stack-context')
};

// PNotify default options
PNotify.prototype.options.stack = stack_bottomright;
PNotify.prototype.options.addclass = 'stack-bottomright';
PNotify.prototype.options.styling = 'bootstrap3';
PNotify.prototype.options.delay = 5000;
PNotify.prototype.options.desktop.desktop = true; // Use desktop notifications
PNotify.desktop.permission(); // Check for permission for desktop notifications

/* ==========
 * Websockets
 * ========== */

// Constants
const EVENT = 'EVENT';
const NOTIFICATION = 'NOTIFICATION';
const PAGE_RELOAD = 'PAGE_RELOAD';
const PROCESS_STARTED = 'PROCESS_STARTED';
const PROCESS_FINISHED = 'PROCESS_FINISHED';
const RUN_PROCESS = 'RUN_PROCESS';
const DISK_SCANNER = 'DiskScanner';
const SUB_CHECKER = 'SubChecker';
const VERSION_CHECKER = 'VersionChecker';

// Setup the websocket system
var websocket_url = 'ws://' + window.location.host + webroot + '/system/websocket';
var ws = new WebSocket(websocket_url);
ws.onmessage = get_message_through_websocket;
// console.log('Websocket ready to receive messages');

// Function to get a message through websocket
function get_message_through_websocket(message) {
    var data = message.data;
    // console.log('Received websocket message: ' + data);
    if (!jQuery.isEmptyObject(data)) {
        var data_json = JSON.parse(data);
        _handle_message(data_json);
    }
}

// Function to send a message through the websocket to the server
function send_message_through_websocket(message) {
    ws.send(message);
}

// Function to handle the message
function _handle_message(message) {
    if (message['type'] == NOTIFICATION) {
        _show_notification(message['notification']);
    } else if (message['type'] == EVENT) {
        _handle_event(message['event']);
    } else {
        console.error('Unsupported message: ' + message)
    }
}

// Function to show a notification
function _show_notification(notification) {
    var message = notification['message'];
    var type = notification['type'];
    var sticky = notification['sticky'];
    // Sticky location - use stack_context
    if (sticky) {
        new PNotify({
            title: false, // Remove title
            text: message,
            type: type,
            hide: false, // Disable fading
            width: 'auto',
            addclass: 'container stack-context',
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
            type: type
        });
    }
}

// Function to handle an event
function _handle_event(event) {
    var type = event['type'];
    var data = event['data'];
    if (type == PAGE_RELOAD) {
        if (!jQuery.isEmptyObject(data)) {
            // Only reload when we are actually on the specified page
            if (window.location.pathname.indexOf('/' + data['name']) >= 0) {
                // Add delay of 1s to be sure it's not triggered immediately after a page redirect (or load)
                // When redirecting and loading really fast after each other, it's possible that your websocket is not initialized in time and your websocket message is lost
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        } else {
            // If no data is available, reload current page
            // Add delay of 1s to be sure it's not triggered immediately after a page redirect (or load)
            // When redirecting and loading really fast after each other, it's possible that your websocket is not initialized in time and your websocket message is lost
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    } else if (type == PROCESS_STARTED) {
        if (!jQuery.isEmptyObject(data)) {
            // Publish the event asynchronously
            PubSub.publish(PROCESS_STARTED, data);
            // Update footer
            if (data['name'] == DISK_SCANNER) {
                // Mark disk scanner as running in footer
                $('#scandisk-nextrun').countdown('stop');
                $('#scandisk-nextrun').text('Running...');
            } else if (data['name'] == SUB_CHECKER) {
                // Mark sub checker as running in footer
                $('#checksub-nextrun').countdown('stop');
                $('#checksub-nextrun').text('Running...');
            } else if (data['name'] == VERSION_CHECKER) {
                // do nothing
            }
        }
    } else if (type == PROCESS_FINISHED) {
        if (!jQuery.isEmptyObject(data)) {
            // Publish the event asynchronously
            PubSub.publish(PROCESS_FINISHED, data);
            // Update footer
            if (data['name'] == DISK_SCANNER) {
                // Restart disk scanner countdown in footer
                $('#scandisk-nextrun').countdown(data['next_run'] * 1000);
            } else if (data['name'] == SUB_CHECKER) {
                // Restart disk scanner countdown in footer
                $('#checksub-nextrun').countdown(data['next_run'] * 1000);
            } else if (data['name'] == VERSION_CHECKER) {
                // do nothing
            }
        }
    } else {
        console.error('Unsupported event: ' + type);
    }
}

// Function to run a process on the server through the websocket system
function run_process_on_server(process_name) {
    // Construct the event
    var event = {
        'type': EVENT,
        'event': {
            'type': RUN_PROCESS,
            'data': {
                'name': process_name
            }
        }
    }
    send_message_through_websocket(JSON.stringify(event));
}

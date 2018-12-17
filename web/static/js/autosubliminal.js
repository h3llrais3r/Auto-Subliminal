/**
 * Javascript for general Auto-Subliminal stuff
 */

/* ================
 * Global variables
 * ================ */

// Base url
var baseUrl = window.location.protocol + '//' + window.location.host + webroot;

// Indexer urls
var TVDB_URL = 'http://thetvdb.com/?tab=series&id=';
var IMDB_URL = 'http://www.imdb.com/title/';

// Default timestamp format
var TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S';
var DATE_FORMAT = TIMESTAMP_FORMAT.split(' ')[0];
var TIME_FORMAT = TIMESTAMP_FORMAT.split(' ')[1];

// Tablesorter date format
var TABLESORTER_DATE_FORMAT = 'yyyymmdd';

/* ================
 * Global utilities
 * ================ */

// Function to get the url taken the BASE_URL into account
function getUrl(url) {
    return baseUrl + url;
}

// Jquery wrapper to post with json content-type
$.postJson = function (url, data, success, dataType) {
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

/* =============
 * Load settings
 * ============= */

var SETTINGS_LOADED = 'SETTINGS_LOADED';

// Load global variables through settings api
var loadSettings = function () {
    $.get(getUrl('/api/settings'), function (data) {
        if (data) {
            TVDB_URL = data['tvdbUrl'];
            IMDB_URL = data['imdbUrl'];
            TIMESTAMP_FORMAT = data['timestampFormat'];
            DATE_FORMAT = TIMESTAMP_FORMAT.split(' ')[0];
            TIME_FORMAT = TIMESTAMP_FORMAT.split(' ')[1];
            var datePattern = DATE_FORMAT.match(/[Ymd]+/g).join('');
            if ('Ymd' == datePattern) {
                TABLESORTER_DATE_FORMAT = 'yyyymmdd';
            } else if ('mdY' == datePattern) {
                TABLESORTER_DATE_FORMAT = 'mmddyyyy';
            } else if ('dmY' == datePattern) {
                TABLESORTER_DATE_FORMAT = 'ddmmyyyy';
            }
            // Publish the settings loaded event
            PubSub.publish(SETTINGS_LOADED, null);
        }
    });
};

// Function to trigger the initialization once the settings are loaded
// This should ONLY be implemented ONCE on each page to prevent double calls
// If this is triggered from multiple scripts on the same page, the logic will be executed multiple times
// Usage:
//   PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);
//   function init() {
//     ...
//   }
var settingsLoaded = function (msg, data) {
    init();
};

// Load the settings
loadSettings();

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
var basePath = '/' + location.pathname.replace(webroot, '').split('/')[1] + '/';
$('.navbar').find('.nav').find('a[href=\'' + basePath + '\']').closest('li').addClass('active');

// Setup navigation links that trigger the run of a process on the server
$('.navbar .nav a.run-process').on('click', function (event) {
    // Prevent default behaviour
    event.preventDefault();
    // Run the process
    var processName = $(this).data('process-name');
    runProcessOnServer(processName);
});

/* =========
 * Countdown
 * ========= */

// Setup the countdown until scandisk next run date
var scanDiskNextRunDate = new Date();
scanDiskNextRunDate.setTime($('#scanDiskNextRunTimeMs').val());
$('#scanDiskNextRun').countdown(scanDiskNextRunDate, function (event) {
    if (event.strftime(TIME_FORMAT) == '00:00:00') {
        $(this).text('Running...');
    } else {
        $(this).text(event.strftime(TIME_FORMAT));
    }
});

// Setup the countdown until checksub next run date
var checkSubNextRunDate = new Date();
checkSubNextRunDate.setTime($('#checkSubNextRunTimeMs').val());
$('#checkSubNextRun').countdown(checkSubNextRunDate, function (event) {
    if (event.strftime(TIME_FORMAT) == '00:00:00') {
        $(this).text('Running...');
    } else {
        $(this).text(event.strftime(TIME_FORMAT));
    }
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

/* =============
 * Notifications
 * ============= */

// By default we will use desktop notifications, but we also provide settings for fallback to browser notifications

// Bottom right stack - to be aligned with desktop notifications at the right bottom
var stackBottomRight = {
    'dir1': 'up',
    'dir2': 'left',
    'firstpos1': 10,
    'firstpos2': 10,
    'spacing1': 10,
    'spacing2': 10
};

// Alternative stack - center stack - copied from https://github.com/sciactive/pnotify/issues/46
var stackCenter = {
    'dir1': 'down',
    'dir2': 'right',
    'firstpos1': 4,
    'firstpos2': ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2)
};

// Handle the center stack when resizing the browser
$(window).on('resize', function () {
    stackCenter.firstpos2 = ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2);
});

// Alternative stack - context stack (fixed position)
var stackContext = {
    'dir1': 'down',
    'dir2': 'right',
    'context': $('#stickyNotificationContext')
};

// PNotify default options
PNotify.prototype.options.stack = stackBottomRight;
PNotify.prototype.options.addclass = 'stack-bottomright';
PNotify.prototype.options.styling = 'bootstrap3';
PNotify.prototype.options.delay = 5000;
PNotify.prototype.options.desktop.desktop = true; // Use desktop notifications
PNotify.desktop.permission(); // Check for permission for desktop notifications

/* ==========
 * Websockets
 * ========== */

// Constants
var EVENT = 'EVENT';
var NOTIFICATION = 'NOTIFICATION';
var PAGE_RELOAD = 'PAGE_RELOAD';
var PROCESS_STARTED = 'PROCESS_STARTED';
var PROCESS_FINISHED = 'PROCESS_FINISHED';
var RUN_PROCESS = 'RUN_PROCESS';
var DISK_SCANNER = 'DiskScanner';
var SUB_CHECKER = 'SubChecker';
var VERSION_CHECKER = 'VersionChecker';

// Setup the websocket system
var websocketUrl = 'ws://' + window.location.host + webroot + '/system/websocket';
var ws = new WebSocket(websocketUrl);
ws.onmessage = getWebsocketMessage;
// console.log('Websocket ready to receive messages');

// Function to get a websocket message
function getWebsocketMessage(message) {
    var data = message.data;
    // console.log('Received websocket message: ' + data);
    if (!jQuery.isEmptyObject(data)) {
        var dataJson = JSON.parse(data);
        _handleWebsocketMessage(dataJson);
    }
}

// Function to send a websocket message to the server
function sendWebsocketMessage(message) {
    ws.send(message);
}

// Function to handle a websocket message
function _handleWebsocketMessage(message) {
    if (message['type'] == NOTIFICATION) {
        _handleWebsocketNotification(message['notification']);
    } else if (message['type'] == EVENT) {
        _handleWebsocketEvent(message['event']);
    } else {
        console.error('Unsupported message: ' + message)
    }
}

// Function to handle a websocket notification
function _handleWebsocketNotification(notification) {
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
            stack: stackContext,
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

// Function to handle a websocket event
function _handleWebsocketEvent(event) {
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
                $('#scanDiskNextRun').countdown('stop');
                $('#scanDiskNextRun').text('Running...');
            } else if (data['name'] == SUB_CHECKER) {
                // Mark sub checker as running in footer
                $('#checkSubNextRun').countdown('stop');
                $('#checkSubNextRun').text('Running...');
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
                $('#scanDiskNextRun').countdown(data['next_run']);
            } else if (data['name'] == SUB_CHECKER) {
                // Restart disk scanner countdown in footer
                $('#checkSubNextRun').countdown(data['next_run']);
            } else if (data['name'] == VERSION_CHECKER) {
                // do nothing
            }
        }
    } else {
        console.error('Unsupported event: ' + type);
    }
}

// Function to run a process on the server through the websocket system
function runProcessOnServer(process_name) {
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
    sendWebsocketMessage(JSON.stringify(event));
}

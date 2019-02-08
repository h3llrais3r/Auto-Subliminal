/**
 * Javascript for general Auto-Subliminal stuff
 */

'use strict';

/* ========================
 * Autosubliminal namespace
 * ======================== */

var autosubliminal = {
    types: {},
    settings: {},
    notifications: {},
    websockets: {},
    vue: {},
    library: {}
};

(function (autosubliminal) {

    'use strict';

    /* ================
     * Global constants
     * ================ */

    // Take the value that is set in the inc_header.mako
    autosubliminal.WEB_ROOT = webRoot;

    // Base url
    autosubliminal.BASE_URL = window.location.protocol + '//' + window.location.host + autosubliminal.WEB_ROOT;

    // Developer mode
    autosubliminal.DEVELOPER_MODE = false;

    // Scheduler names
    autosubliminal.SCAN_DISK = 'DiskScanner';
    autosubliminal.SCAN_LIBRARY = 'LibraryScanner';
    autosubliminal.CHECK_SUB = 'SubChecker';
    autosubliminal.CHECK_VERSION = 'VersionChecker';

    // Indexer urls
    autosubliminal.TVDB_URL = 'http://thetvdb.com/?tab=series&id=';
    autosubliminal.IMDB_URL = 'http://www.imdb.com/title/';

    // Default timestamp format
    autosubliminal.TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S';
    autosubliminal.DATE_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[0];
    autosubliminal.TIME_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[1];

    // Tablesorter date format
    autosubliminal.TABLESORTER_DATE_FORMAT = 'yyyymmdd';

    // Path separator
    autosubliminal.PATH_SEPARTOR = '/';

    // Languages
    autosubliminal.LANGUAGES = [];

    // Video types
    autosubliminal.EPISODE_TYPE = 'episode';
    autosubliminal.MOVIE_TYPE = 'movie';


    /* ================
     * Global functions
     * ================ */

    // Function to get the url with the BASE_URL taken into account
    autosubliminal.getUrl = function (url) {
        return autosubliminal.BASE_URL + url;
    };

    // Function to construct a playvideo url
    autosubliminal.constructPlayVideoUrl = function (filePath, filename) {
        return 'playvideo://' + filePath + autosubliminal.PATH_SEPARTOR + filename;
    };

    // Function to convert a list of alpha2 language codes to a list of language objects
    autosubliminal.convertToLanguages = function (alpha2Languages) {
        var languages = [];
        for (var i = 0; i < alpha2Languages.length; i++) {
            var alpha2Language = alpha2Languages[i];
            for (var j = 0; j < autosubliminal.LANGUAGES.length; j++) {
                if (autosubliminal.LANGUAGES[j].alpha2 == alpha2Language) {
                    languages.push(autosubliminal.LANGUAGES[j]);
                }
            }
        }
        return languages;
    };

    // Function to convert a list of language objects to a list of alpha2 language codes
    autosubliminal.convertToAlpha2Languages = function (languages) {
        var alpha2Languages = [];
        for (var i = 0; i < languages.length; i++) {
            alpha2Languages.push(languages[i].alpha2);
        }
        return alpha2Languages;
    };

    /* ========================
     * Types (type definitions)
     * ======================== */

    var types = autosubliminal.types;

    types.Settings = function () {
        return {
            developerMode: null,
            webRoot: null,
            scanDisk: null,
            scanLibrary: null,
            checkSub: null,
            checkVersion: null,
            tvdbUrl: null,
            imdbUrl: null,
            timestampFormat: null,
            pathSeparator: null,
            languages: null
        };
    };

    // Notification
    types.Notification = function () {
        return {
            message: null,
            type: null,
            sticky: null
        };
    };

    // Websocket notification
    types.WebsocketNotification = function () {
        return {
            type: autosubliminal.websockets.NOTIFICATION,
            notification: types.Notification()
        };
    };

    // Websocket page reload event
    types.WebsocketPageReloadEvent = function () {
        return {
            type: autosubliminal.websockets.EVENT,
            event: {
                type: autosubliminal.websockets.PAGE_RELOAD,
                data: {
                    name: null
                }
            }
        };
    };

    // Websocket process started event
    types.WebsocketProcessStartedEvent = function () {
        return {
            type: autosubliminal.websockets.EVENT,
            event: {
                type: autosubliminal.websockets.PROCESS_STARTED,
                data: types.Process()
            }
        };
    };

    // Websocket process finished event
    types.WebsocketProcessFinishedEvent = function () {
        return {
            type: autosubliminal.websockets.EVENT,
            event: {
                type: autosubliminal.websockets.PROCESS_FINISHED,
                data: types.Process()
            }
        };
    };

    types.Process = function () {
        return {
            name: null,
            interval: null,
            active: null,
            alive: null,
            last_run: null,
            next_run: null,
            running: null
        };
    };

    types.Show = function () {
        return {
            path: null,
            tvdb_id: null,
            title: null,
            year: null,
            overview: null,
            poster: null,
            banner: null,
            settings: null,
            total_subtitles_wanted: null,
            total_subtitles_missing: null,
            total_subtitles_available: null,
            files: null
        };
    };

    types.Movie = function () {
        return {
            path: null,
            imdb_id: null,
            title: null,
            year: null,
            overview: null,
            poster: null,
            settings: null,
            total_subtitles_wanted: null,
            total_subtitles_missing: null,
            total_subtitles_available: null,
            files: null
        };
    };

    types.Alpha2Language = function () {
        return {
            alpha2: null,
            name: null
        };
    };

    /* ========
     * Settings
     * ======== */

    var settings = autosubliminal.settings;

    // Constants
    settings.LOADED = 'SETTINGS_LOADED';

    // Load settings through settings api
    settings.loadSettings = function () {
        $.get(autosubliminal.getUrl('/api/settings'), function (data) {
            if (!jQuery.isEmptyObject(data)) {
                autosubliminal.DEVELOPER_MODE = data.developerMode;
                autosubliminal.SCAN_DISK = data.scanDisk;
                autosubliminal.SCAN_LIBRARY = data.scanLibrary;
                autosubliminal.CHECK_SUB = data.checkSub;
                autosubliminal.CHECK_VERSION = data.checkVersion;
                autosubliminal.TVDB_URL = data.tvdbUrl;
                autosubliminal.IMDB_URL = data.imdbUrl;
                autosubliminal.TIMESTAMP_FORMAT = data.timestampFormat;
                autosubliminal.DATE_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[0];
                autosubliminal.TIME_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[1];
                var datePattern = autosubliminal.DATE_FORMAT.match(/[Ymd]+/g).join('');
                if ('Ymd' == datePattern) {
                    autosubliminal.TABLESORTER_DATE_FORMAT = 'yyyymmdd';
                } else if ('mdY' == datePattern) {
                    autosubliminal.TABLESORTER_DATE_FORMAT = 'mmddyyyy';
                } else if ('dmY' == datePattern) {
                    autosubliminal.TABLESORTER_DATE_FORMAT = 'ddmmyyyy';
                }
                autosubliminal.PATH_SEPARTOR = data.pathSeparator;
                autosubliminal.LANGUAGES = data.languages;

                // Publish the settings loaded event
                PubSub.publish(settings.LOADED, null);
            }
        });
    };
    settings.loadSettings();

    /* =============
     * Notifications
     * ============= */

    var notifications = autosubliminal.notifications;

    // By default we will use desktop notifications, but we also provide settings for fallback to browser notifications

    // Notification types
    notifications.INFO = 'info';
    notifications.SUCCESS = 'success';
    notifications.WARNING = 'notice';
    notifications.ERROR = 'error';

    // Bottom right stack - to be aligned with desktop notifications at the right bottom
    notifications.stackBottomRight = {
        'dir1': 'up',
        'dir2': 'left',
        'firstpos1': 10,
        'firstpos2': 10,
        'spacing1': 10,
        'spacing2': 10
    };

    // Alternative stack - center stack - copied from https://github.com/sciactive/pnotify/issues/46
    notifications.stackCenter = {
        'dir1': 'down',
        'dir2': 'right',
        'firstpos1': 4,
        'firstpos2': ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2)
    };

    // Handle the center stack when resizing the browser
    $(window).on('resize', function () {
        notifications.stackCenter.firstpos2 = ($(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2);
    });

    // Alternative stack - context stack (fixed position)
    notifications.stackContext = {
        'dir1': 'down',
        'dir2': 'right',
        'context': $('#stickyNotificationContext')
    };

    // PNotify default options
    PNotify.prototype.options.stack = notifications.stackBottomRight;
    PNotify.prototype.options.addclass = 'stack-bottomright';
    PNotify.prototype.options.styling = 'bootstrap3';
    PNotify.prototype.options.delay = 5000;
    PNotify.prototype.options.desktop.desktop = true; // Use desktop notifications
    PNotify.desktop.permission(); // Check for permission for desktop notifications

    // Function to show a notification
    notifications.showNotification = function (notification) {
        var message = notification.message;
        var type = notification.type;
        var sticky = notification.sticky;
        // Sticky location - use stack_context
        if (sticky) {
            new PNotify({
                title: false, // Remove title
                text: message,
                type: type,
                hide: false, // Disable fading
                width: 'auto',
                addclass: 'container stack-context',
                stack: notifications.stackContext,
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
    };

    /* ==========
     * Websockets
     * ========== */

    var websockets = autosubliminal.websockets;

    // Constants
    websockets.EVENT = 'EVENT';
    websockets.NOTIFICATION = 'NOTIFICATION';
    websockets.PAGE_RELOAD = 'PAGE_RELOAD';
    websockets.PROCESS_STARTED = 'PROCESS_STARTED';
    websockets.PROCESS_FINISHED = 'PROCESS_FINISHED';
    websockets.RUN_PROCESS = 'RUN_PROCESS';

    // Setup the websocket system
    var websocketUrl = 'ws://' + window.location.host + autosubliminal.WEB_ROOT + '/system/websocket';
    websockets.ws = new WebSocket(websocketUrl);

    // Setup websocket message receival
    websockets.ws.onmessage = function (message) {
        var data = message.data;
        // console.log('Received websocket message: ' + data);
        if (!jQuery.isEmptyObject(data)) {
            var dataJson = JSON.parse(data);
            handleWebsocketMessage(dataJson);
        }
    };
    // console.log('Websocket ready to receive messages');

    // Function to handle a websocket message
    var handleWebsocketMessage = function (message) {
        if (message.type == websockets.NOTIFICATION) {
            notifications.showNotification(message.notification);
        } else if (message.type == websockets.EVENT) {
            handleWebsocketEvent(message.event);
        } else {
            console.error('Unsupported message: ' + message);
        }
    };

    // Function to handle a websocket event
    var handleWebsocketEvent = function (event) {
        var eventType = event.type;
        var eventData = event.data;
        if (eventType == websockets.PAGE_RELOAD) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Only reload when we are actually on the specified page
                if (window.location.pathname.indexOf('/' + eventData.name) >= 0) {
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
        } else if (eventType == websockets.PROCESS_STARTED) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Publish the event asynchronously
                PubSub.publish(websockets.PROCESS_STARTED, eventData);
                // Update footer
                var scanDiskNextRun = $('#scanDiskNextRun');
                var checkSubNextRun = $('#checkSubNextRun');
                if (eventData.name == autosubliminal.SCAN_DISK) {
                    // Mark disk scanner as running in footer
                    scanDiskNextRun.countdown('stop');
                    scanDiskNextRun.text('Running...');
                } else if (eventData.name == autosubliminal.CHECK_SUB) {
                    // Mark sub checker as running in footer
                    checkSubNextRun.countdown('stop');
                    checkSubNextRun.text('Running...');
                }
            }
        } else if (eventType == websockets.PROCESS_FINISHED) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Publish the event asynchronously
                PubSub.publish(websockets.PROCESS_FINISHED, eventData);
                // Update footer
                if (eventData.name == autosubliminal.SCAN_DISK) {
                    // Restart disk scanner countdown in footer
                    $('#scanDiskNextRun').countdown(eventData.next_run);
                } else if (eventData.name == autosubliminal.CHECK_SUB) {
                    // Restart disk scanner countdown in footer
                    $('#checkSubNextRun').countdown(eventData.next_run);
                }
            }
        } else {
            console.error('Unsupported event type: ' + eventType);
        }
    };

    // Function to send a websocket message to the server
    websockets.sendWebsocketMessage = function (message) {
        websockets.ws.send(message);
    };

    // Function to run a process on the server
    websockets.runProcessOnServer = function (process_name) {
        // Construct the event
        var event = {
            'type': websockets.EVENT,
            'event': {
                'type': websockets.RUN_PROCESS,
                'data': {
                    'name': process_name
                }
            }
        };
        websockets.sendWebsocketMessage(JSON.stringify(event));
    };

    /* ===
     * Vue
     * === */

    var vue = autosubliminal.vue;

    // Function to style a vue progress bar
    vue.styleProgressBar = function (progressPercentage) {
        $('.vue-simple-progress-bar').each(function () {
            var self = $(this);
            var percentage = progressPercentage;
            // Calculate percentage if not provided
            if (percentage == null) {
                percentage = parseInt(self.css('width')) / parseInt(self.prev('.vue-simple-progress-text').css('width')) * 100;
            }
            percentage = Math.round(percentage);
            var progressBarPercentage = 100;
            while (percentage > 0 && percentage < progressBarPercentage) {
                progressBarPercentage -= 5;
            }
            self.removeClass(function (index, className) {
                return (className.match(/\bprogress-\S+/g) || []).join(' ');
            });
            self.addClass('progress-' + progressBarPercentage);
        });
    };

    /* ==============
     * Initialization
     * ============== */

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
    var basePath = '/' + location.pathname.replace(autosubliminal.WEB_ROOT, '').split('/')[1] + '/';
    $('.navbar').find('.nav').find('a[href=\'' + basePath + '\']').closest('li').addClass('active');

    // Setup navigation links that trigger the run of a process on the server
    $('.navbar .nav a.run-process').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Run the process
        var processName = $(this).data('process-name');
        websockets.runProcessOnServer(processName);
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

    /* ==========
     * Countdowns
     * ========== */

    // Setup the countdown until scandisk next run date
    var scanDiskNextRunDate = new Date();
    scanDiskNextRunDate.setTime($('#scanDiskNextRunTimeMs').val());
    $('#scanDiskNextRun').countdown(scanDiskNextRunDate, function (event) {
        if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
        }
    });

    // Setup the countdown until checksub next run date
    var checkSubNextRunDate = new Date();
    checkSubNextRunDate.setTime($('#checkSubNextRunTimeMs').val());
    $('#checkSubNextRun').countdown(checkSubNextRunDate, function (event) {
        if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
        }
    });

}(autosubliminal));


/* =========================
 * Global namespace settings
 * ========================= */

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

// Jquery wrapper to put with json content-type
$.putJson = function (url, data, success, dataType) {
    if (typeof data != 'string') {
        data = JSON.stringify(data);
    }
    $.ajax({
        url: url,
        type: 'put',
        data: data,
        dataType: dataType || 'json',
        contentType: 'application/json; charset=utf-8',
        success: success
    });
};

// Jquery wrapper to delete with json content-type
$.deleteJson = function (url, data, success, dataType) {
    if (typeof data != 'string') {
        data = JSON.stringify(data);
    }
    $.ajax({
        url: url,
        type: 'delete',
        data: data,
        dataType: dataType || 'json',
        contentType: 'application/json; charset=utf-8',
        success: success
    });
};

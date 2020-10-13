/**
 * Javascript for general Auto-Subliminal stuff
 */

'use strict';

/* ========================
 * Autosubliminal namespace
 * ======================== */

const autosubliminal = {
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
    autosubliminal.BASE_URL = `${window.location.protocol}//${window.location.host}${autosubliminal.WEB_ROOT}`;

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
        return `${autosubliminal.BASE_URL}${url}`;
    };

    // Function to construct a playvideo url
    autosubliminal.constructPlayVideoUrl = function (filePath, filename) {
        return `playvideo://${filePath}${autosubliminal.PATH_SEPARTOR}${filename}`;
    };

    // Function to convert a list of language codes to a list of language objects
    autosubliminal.convertToLanguages = function (languageCodes) {
        const languages = [];
        languageCodes.forEach((languageCode) => {
            autosubliminal.LANGUAGES.forEach(function (language) {
                if (language.code == languageCode) {
                    languages.push(language);
                }
            });
        });
        return languages;
    };

    // Function to convert a list of language objects to a list of language codes
    autosubliminal.convertToLanguageCodes = function (languages) {
        const languageCodes = [];
        languages.forEach((language) => {
            languageCodes.push(language.code);
        });
        return languageCodes;
    };

    // Function to enable scroll to the bottom icon
    autosubliminal.enableScrollToBottom = function () {
        const scrollIcon = $('#scrollToBottom');
        // Show icon when needed
        scrollIcon.removeClass('hidden');
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            var maxScrollHeight = $(document).height() - $(window).height();
            if (height < maxScrollHeight) {
                scrollIcon.fadeIn();
            } else {
                scrollIcon.fadeOut();
            }
        });
        // Enable click
        scrollIcon.click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: $(document).height()}, 'slow');
            return false;
        });
    };

    // Function to enable scroll to the top icon
    autosubliminal.enableScrollToTop = function () {
        const scrollIcon = $('#scrollToTop');
        // Enable scroll icon
        scrollIcon.removeClass('hidden');
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 100) {
                scrollIcon.fadeIn();
            } else {
                scrollIcon.fadeOut();
            }
        });
        // Enable scroll on icon click
        scrollIcon.click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });
    };

    /* ========================
     * Types (type definitions)
     * ======================== */

    autosubliminal.types.DiskUsage = {
        freeBytes: null,
        freePercentage: null,
        freeSpace: null,
        name: null,
        path: null,
        totalBytes: null,
        totalSpace: null
    };

    autosubliminal.types.Settings = {
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
        languages: []
    };

    // Notification
    autosubliminal.types.Notification = {
        message: null,
        type: null,
        sticky: null
    };

    // Websocket notification
    autosubliminal.types.WebsocketNotification = {
        type: autosubliminal.websockets.NOTIFICATION,
        notification: autosubliminal.types.Notification
    };

    // Websocket page reload event
    autosubliminal.types.WebsocketPageReloadEvent = {
        type: autosubliminal.websockets.EVENT,
        event: {
            type: autosubliminal.websockets.PAGE_RELOAD,
            data: {
                name: null
            }
        }
    };

    // Websocket process started event
    autosubliminal.types.WebsocketProcessStartedEvent = {
        type: autosubliminal.websockets.EVENT,
        event: {
            type: autosubliminal.websockets.PROCESS_STARTED,
            data: autosubliminal.types.Process
        }
    };

    // Websocket process finished event
    autosubliminal.types.WebsocketProcessFinishedEvent = {
        type: autosubliminal.websockets.EVENT,
        event: {
            type: autosubliminal.websockets.PROCESS_FINISHED,
            data: autosubliminal.types.Process
        }
    };

    autosubliminal.types.Process = {
        name: null,
        interval: null,
        active: null,
        alive: null,
        lastRun: null,
        nextRun: null,
        running: null
    };

    autosubliminal.types.ShowSettings = {
        hearingImpaired: null,
        refine: null,
        utf8Encoding: null,
        wantedLanguages: null
    };

    autosubliminal.types.ShowFiles = [{
        seasonFiles: {
            embeddedLanguages: [],
            filename: null,
            hardcodedLanguages: [],
            tvdbId: null,
            type: null
        },
        seasonName: null,
        seasonPath: null
    }];

    autosubliminal.types.Show = {
        path: null,
        tvdbId: null,
        title: null,
        year: null,
        overview: null,
        poster: null,
        banner: null,
        settings: autosubliminal.types.ShowSettings,
        pathInVideoPaths: null,
        totalSubtitlesWanted: null,
        totalSubtitlesMissing: null,
        totalSubtitlesAvailable: null,
        files: autosubliminal.types.ShowFiles
    };

    autosubliminal.types.MovieSettings = {
        hearingImpaired: null,
        refine: null,
        utf8Encoding: null,
        wantedLanguages: []
    };

    autosubliminal.types.MovieFiles = [{
        embeddedLanguages: [],
        filename: null,
        hardcodedLanguages: [],
        language: null,
        type: null
    }];

    autosubliminal.types.Movie = {
        path: null,
        imdbId: null,
        title: null,
        year: null,
        overview: null,
        poster: null,
        settings: autosubliminal.types.MovieSettings,
        pathInVideoPaths: null,
        totalSubtitlesWanted: null,
        totalSubtitlesMissing: null,
        totalSubtitlesAvailable: null,
        files: autosubliminal.types.MovieFiles
    };

    autosubliminal.types.SubtitleLanguage = {
        code: null,
        name: null
    };

    /* ========
     * Settings
     * ======== */

    // Constants
    autosubliminal.settings.LOADED = 'SETTINGS_LOADED';

    // Load settings through settings api
    autosubliminal.settings.loadSettings = function () {
        $.get(autosubliminal.getUrl('/api/settings/frontend'), function (data) {
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
                const datePattern = autosubliminal.DATE_FORMAT.match(/[Ymd]+/g).join('');
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
                PubSub.publish(autosubliminal.settings.LOADED, null);
            }
        });
    };
    autosubliminal.settings.loadSettings();

    /* =============
     * Notifications
     * ============= */

    // By default we will use desktop notifications, but we also provide settings for fallback to browser notifications

    // Notification types
    autosubliminal.notifications.INFO = 'info';
    autosubliminal.notifications.SUCCESS = 'success';
    autosubliminal.notifications.WARNING = 'notice';
    autosubliminal.notifications.ERROR = 'error';

    // Bottom right stack - to be aligned with desktop notifications at the right bottom
    autosubliminal.notifications.stackBottomRight = new PNotify.Stack({
        dir1: 'up',
        dir2: 'left',
        firstpos1: 10,
        firstpos2: 10,
        spacing1: 10,
        spacing2: 10
    });

    // Alternative stack - context stack (fixed position)
    autosubliminal.notifications.stackContext = new PNotify.Stack({
        dir1: 'down',
        dir2: 'right',
        context: document.getElementById('stickyNotificationContext')
    });

    // PNotify default settings
    PNotify.defaults.stack = autosubliminal.notifications.stackBottomRight;
    PNotify.defaults.addClass = 'stack-bottomright';
    PNotify.defaults.styling = 'bootstrap3';
    PNotify.defaults.icons = 'bootstrap3';
    PNotify.defaults.delay = 5000;
    PNotify.defaultModules.set(PNotifyBootstrap3, {}); // Enable bootstrap3 by default
    PNotify.defaultModules.set(PNotifyGlyphicon, {}); // Enable glyphicon icons by default for bootstrap3
    PNotify.defaultModules.set(PNotifyMobile, {}); // Enable mobile support by default
    PNotify.defaultModules.set(PNotifyDesktop, {}); // Enable desktop notifications by default
    PNotifyDesktop.permission(); // Check for permission for desktop notifications

    // Stack context modules (desktop notifications must be removed to use the stack context
    autosubliminal.notifications.stackContextModules = new Map(Array.from(PNotify.defaultModules));
    autosubliminal.notifications.stackContextModules.delete(PNotifyDesktop);

    // Function to show a notification
    autosubliminal.notifications.showNotification = function (notification) {
        const message = notification.message;
        const type = notification.type;
        const sticky = notification.sticky;
        // Sticky location - use stackContext
        if (sticky) {
            PNotify.alert({
                title: false, // Remove title
                text: message,
                textTrusted: true, // Allow html inside text
                type: type,
                hide: false, // Disable fading
                width: 'auto',
                addClass: 'container stack-context',
                stack: autosubliminal.notifications.stackContext, // Special stack location for sticky notifications
                modules: autosubliminal.notifications.stackContextModules // Special modules for sticky notifications
            });
        }
        // Default location
        else {
            PNotify.alert({
                title: 'Auto-Subliminal',
                text: message,
                textTrusted: true, // Allow html inside text
                type: type
                //modules: new Map(Array.from(PNotify.defaultModules).concat([[PNotifyDesktop, {}]]))
            });
        }
    };

    /* ==========
     * Websockets
     * ========== */

    // Constants
    autosubliminal.websockets.EVENT = 'EVENT';
    autosubliminal.websockets.NOTIFICATION = 'NOTIFICATION';
    autosubliminal.websockets.PAGE_RELOAD = 'PAGE_RELOAD';
    autosubliminal.websockets.PROCESS_STARTED = 'PROCESS_STARTED';
    autosubliminal.websockets.PROCESS_FINISHED = 'PROCESS_FINISHED';
    autosubliminal.websockets.RUN_PROCESS = 'RUN_PROCESS';

    // Setup the websocket system
    let websocketProtocol = 'ws:';
    if (window.location.protocol === 'https:') {
        websocketProtocol = 'wss:';
    }
    const websocketUrl = `${websocketProtocol}//${window.location.host}${autosubliminal.WEB_ROOT}/system/websocket`;
    autosubliminal.websockets.ws = new WebSocket(websocketUrl);

    // Setup websocket message receival
    autosubliminal.websockets.ws.onmessage = function (message) {
        const data = message.data;
        // console.log(`Received websocket message: ${data}`);
        if (!jQuery.isEmptyObject(data)) {
            const dataJson = JSON.parse(data);
            autosubliminal.websockets.handleWebsocketMessage(dataJson);
        }
    };
    // console.log('Websocket ready to receive messages');

    // Function to handle a websocket message
    autosubliminal.websockets.handleWebsocketMessage = function (message) {
        if (message.type == autosubliminal.websockets.NOTIFICATION) {
            autosubliminal.notifications.showNotification(message.notification);
        } else if (message.type == autosubliminal.websockets.EVENT) {
            autosubliminal.websockets.handleWebsocketEvent(message.event);
        } else {
            console.error(`Unsupported message: ${message}`);
        }
    };

    // Function to handle a websocket event
    autosubliminal.websockets.handleWebsocketEvent = function (event) {
        const eventType = event.type;
        const eventData = event.data;
        if (eventType == autosubliminal.websockets.PAGE_RELOAD) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Only reload when we are actually on the specified page
                if (window.location.pathname.indexOf(`/${eventData.name}`) >= 0) {
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
        } else if (eventType == autosubliminal.websockets.PROCESS_STARTED) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Publish the event asynchronously
                PubSub.publish(autosubliminal.websockets.PROCESS_STARTED, eventData);
                // Update footer
                const scanDiskNextRun = $('#scanDiskNextRun');
                const checkSubNextRun = $('#checkSubNextRun');
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
        } else if (eventType == autosubliminal.websockets.PROCESS_FINISHED) {
            if (!jQuery.isEmptyObject(eventData)) {
                // Publish the event asynchronously
                PubSub.publish(autosubliminal.websockets.PROCESS_FINISHED, eventData);
                // Update footer
                if (eventData.name == autosubliminal.SCAN_DISK) {
                    // Restart disk scanner countdown in footer
                    $('#scanDiskNextRun').countdown(eventData.nextRun);
                } else if (eventData.name == autosubliminal.CHECK_SUB) {
                    // Restart disk scanner countdown in footer
                    $('#checkSubNextRun').countdown(eventData.nextRun);
                }
            }
        } else {
            console.error(`Unsupported event type: ${eventType}`);
        }
    };

    // Function to send a websocket message to the server
    autosubliminal.websockets.sendWebsocketMessage = function (message) {
        autosubliminal.websockets.ws.send(message);
    };

    // Function to run a process on the server
    autosubliminal.websockets.runProcessOnServer = function (processName) {
        // Construct the event
        const event = {
            'type': autosubliminal.websockets.EVENT,
            'event': {
                'type': autosubliminal.websockets.RUN_PROCESS,
                'data': {
                    'name': processName
                }
            }
        };
        autosubliminal.websockets.sendWebsocketMessage(JSON.stringify(event));
    };

    /* ===
     * Vue
     * === */

    autosubliminal.vue.formatDate = function (timeInMilliSeconds) {
        return strftime(autosubliminal.DATE_FORMAT, new Date(timeInMilliSeconds));
    };

    autosubliminal.vue.formatTime = function (timeInMilliSeconds) {
        return strftime(autosubliminal.TIME_FORMAT, new Date(timeInMilliSeconds));
    };

    autosubliminal.vue.formatDateTime = function (timeInMilliSeconds) {
        return strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(timeInMilliSeconds));
    };

    autosubliminal.vue.formatDuration = function (durationInSeconds) {
        const d = Math.floor(durationInSeconds / (3600 * 24));
        const h = Math.floor(durationInSeconds % (3600 * 24) / 3600);
        const m = Math.floor(durationInSeconds % 3600 / 60);
        const s = Math.floor(durationInSeconds % 60);
        const dText = d > 0 ? d + (d == 1 ? ' day ' : ' days ') : '';
        const hText = h > 0 ? h + (h == 1 ? ' hour ' : ' hours ') : '';
        const mText = m > 0 ? m + (m == 1 ? ' minute ' : ' minutes ') : '';
        const sText = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
        return dText + hText + mText + sText;
    };

    autosubliminal.vue.getBannerPlaceholderUrl = function () {
        return autosubliminal.getUrl('/images/banner-placeholder.jpg');
    };

    autosubliminal.vue.getPosterPlaceholderUrl = function () {
        return autosubliminal.getUrl('/images/poster-placeholder.jpg');
    };

    autosubliminal.vue.getPosterLoadingUrl = function () {
        return autosubliminal.getUrl('/images/poster-loading.jpg');
    };

    // Function to style a vue progress bar
    autosubliminal.vue.styleProgressBar = function (progressPercentage) {
        $('.vue-simple-progress-bar').each(function () {
            const self = $(this);
            let percentage = progressPercentage;
            // Calculate percentage if not provided
            if (percentage == null) {
                percentage = parseInt(self.css('width')) / parseInt(self.prev('.vue-simple-progress-text').css('width')) * 100;
            }
            percentage = Math.round(percentage);
            let progressBarPercentage = 100;
            while (percentage > 0 && percentage < progressBarPercentage) {
                progressBarPercentage -= 5;
            }
            self.removeClass(function (index, className) {
                return (className.match(/\bprogress-\S+/g) || []).join(' ');
            });
            self.addClass(`progress-${progressBarPercentage}`);
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
    const basePath = `/${location.pathname.replace(autosubliminal.WEB_ROOT, '').split('/')[1]}/`;
    $('.navbar').find('.nav').find(`a[href="${basePath}"]`).closest('li').addClass('active');

    // Setup navigation links that trigger the run of a process on the server
    $('.navbar .nav a.run-process').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Run the process
        const processName = $(this).data('process-name');
        autosubliminal.websockets.runProcessOnServer(processName);
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
        let target = $(this).parent().next('input[type=hidden]').val();
        if (target == 'False') {
            target = 'True';
        } else {
            target = 'False';
        }
        $(this).parent().next('input[type=hidden]').val(target);
    });

    /* =========
     * Dropdowns
     * ========= */

    // Keep certain dropdowns open (don't close it when clicking inside the dropdown itself)
    autosubliminal.keepDropdownsOpen = function () {
        $('.dropdown .dropdown-menu.keep-open,.dropdown-menu.info-list').on('click', function (event) {
            event.stopPropagation();
        });
    };
    autosubliminal.keepDropdownsOpen();

    /* ========
     * Popovers
     * ======== */

    // Enable the popovers
    autosubliminal.enablePopovers = function () {
        // Enable popovers
        $('[data-toggle=popover]').popover();

        // Only close on outside click
        // See https://stackoverflow.com/questions/11703093/how-to-dismiss-a-twitter-bootstrap-popover-by-clicking-outside
        $(document).on('click', function (event) {
            $('[data-toggle="popover"],[data-original-title]').each(function () {
                //The 'is' for buttons that trigger popups
                //The 'has' for icons within a button that triggers a popup
                if (!$(this).is(event.target) && $(this).has(event.target).length === 0 && $('.popover').has(event.target).length === 0) {
                    (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false; // fix for BS 3.3.6
                }

            });
        });
    };
    autosubliminal.enablePopovers();

    /* ==========
     * Countdowns
     * ========== */

    // Setup the countdown until scandisk next run date
    const scanDiskNextRunDate = new Date();
    scanDiskNextRunDate.setTime($('#scanDiskNextRunTimeMs').val());
    $('#scanDiskNextRun').countdown(scanDiskNextRunDate, function (event) {
        if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
        }
    });

    // Setup the countdown until checksub next run date
    const checkSubNextRunDate = new Date();
    checkSubNextRunDate.setTime($('#checkSubNextRunTimeMs').val());
    $('#checkSubNextRun').countdown(checkSubNextRunDate, function (event) {
        if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
            $(this).text('Running...');
        } else {
            $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
        }
    });

    /* ====================
     * Multi-input textarea
     * ==================== */

    // Usage:
    // <textarea id="<id>" name="<name>" class="form-control input-sm multi-input hidden">${display_list_multi_line(<values>)}</textarea>

    // Initialize a multi input textarea
    autosubliminal.initMultiInputTextArea = function (element) {
        // Hide textarea element
        $(element).hide();
        // Get the texarea values
        const values = $(element).val().split('\n');
        // Remove previous input fields wrapper (needed when initializing the component again)
        $(element).next('div.multi-input-fields').remove();
        // Create input fields wrapper
        $(element).after('<div class="multi-input-fields"></div>');
        const multiInputFields = $(element).next('div.multi-input-fields');
        // Add separate input field for each value
        values.forEach((val) => {
            $(multiInputFields).append(`<div class="input-group">
                <input type="text" class="form-control input-sm" value="${val}">
                <span class="input-group-addon addon-remove"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>`);
        });
        // Add input field to add new value
        $(multiInputFields).append(`<div class="input-group">
            <input type="text" class="form-control input-sm" placeholder="New value">
            <span class="input-group-addon addon-add"><i class="fa fa-plus" aria-hidden="true"></i></span>
            </div>`);
    };

    // Init all the multi input fields
    autosubliminal.initMultiInputTextAreas = function () {
        $('textarea.multi-input').each(function () {
            autosubliminal.initMultiInputTextArea(this);
        });
    };
    autosubliminal.initMultiInputTextAreas();

    // Enable the add button on a multi input field
    $(document).on('click', '.multi-input-fields .input-group .addon-add', function () {
        // Add the new value to the multi input textarea
        const multiInputTextArea = $(this).parents('.multi-input-fields').siblings('.multi-input');
        const values = $(multiInputTextArea).val().split('\n');
        const value = $(this).siblings('input').val();
        const existingValue = values.filter(function (val) {
            return val === value;
        });
        // Only add if the new value is available and it doesn't exist yet
        if (value && existingValue.length === 0) {
            const newValues = values.concat([value]);
            $(multiInputTextArea).val(newValues.join('\n'));
            // Initialize the multi input textarea again
            autosubliminal.initMultiInputTextArea(multiInputTextArea);
        } else {
            // Clear value again
            $(this).siblings('input').val('');
        }
    });

    // Enable the remove button on a multi input field
    $(document).on('click', '.multi-input-fields .input-group .addon-remove', function () {
        // Remove the value from multi input textarea
        const multiInputTextArea = $(this).parents('.multi-input-fields').siblings('.multi-input');
        const values = multiInputTextArea.val().split('\n');
        const value = $(this).siblings('input').val();
        const newValues = values.filter(function (val) {
            return val !== value;
        });
        multiInputTextArea.val(newValues.join('\n'));
        // Initialize the multi input again
        autosubliminal.initMultiInputTextArea(multiInputTextArea);
    });

})(autosubliminal);

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

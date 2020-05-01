'use strict';

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

  autosubliminal.WEB_ROOT = webRoot;
  autosubliminal.BASE_URL = window.location.protocol + '//' + window.location.host + autosubliminal.WEB_ROOT;
  autosubliminal.DEVELOPER_MODE = false;
  autosubliminal.SCAN_DISK = 'DiskScanner';
  autosubliminal.SCAN_LIBRARY = 'LibraryScanner';
  autosubliminal.CHECK_SUB = 'SubChecker';
  autosubliminal.CHECK_VERSION = 'VersionChecker';
  autosubliminal.TVDB_URL = 'http://thetvdb.com/?tab=series&id=';
  autosubliminal.IMDB_URL = 'http://www.imdb.com/title/';
  autosubliminal.TIMESTAMP_FORMAT = '%Y-%m-%d %H:%M:%S';
  autosubliminal.DATE_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[0];
  autosubliminal.TIME_FORMAT = autosubliminal.TIMESTAMP_FORMAT.split(' ')[1];
  autosubliminal.TABLESORTER_DATE_FORMAT = 'yyyymmdd';
  autosubliminal.PATH_SEPARTOR = '/';
  autosubliminal.LANGUAGES = [];
  autosubliminal.EPISODE_TYPE = 'episode';
  autosubliminal.MOVIE_TYPE = 'movie';

  autosubliminal.getUrl = function (url) {
    return autosubliminal.BASE_URL + url;
  };

  autosubliminal.constructPlayVideoUrl = function (filePath, filename) {
    return 'playvideo://' + filePath + autosubliminal.PATH_SEPARTOR + filename;
  };

  autosubliminal.convertToLanguages = function (languageCodes) {
    var languages = [];

    for (var i = 0; i < languageCodes.length; i++) {
      var languageCode = languageCodes[i];

      for (var j = 0; j < autosubliminal.LANGUAGES.length; j++) {
        if (autosubliminal.LANGUAGES[j].code == languageCode) {
          languages.push(autosubliminal.LANGUAGES[j]);
        }
      }
    }

    return languages;
  };

  autosubliminal.convertToLanguageCodes = function (languages) {
    var languageCodes = [];

    for (var i = 0; i < languages.length; i++) {
      languageCodes.push(languages[i].code);
    }

    return languageCodes;
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
    languages: null
  };
  autosubliminal.types.Notification = {
    message: null,
    type: null,
    sticky: null
  };
  autosubliminal.types.WebsocketNotification = {
    type: autosubliminal.websockets.NOTIFICATION,
    notification: autosubliminal.types.Notification
  };
  autosubliminal.types.WebsocketPageReloadEvent = {
    type: autosubliminal.websockets.EVENT,
    event: {
      type: autosubliminal.websockets.PAGE_RELOAD,
      data: {
        name: null
      }
    }
  };
  autosubliminal.types.WebsocketProcessStartedEvent = {
    type: autosubliminal.websockets.EVENT,
    event: {
      type: autosubliminal.websockets.PROCESS_STARTED,
      data: autosubliminal.types.Process
    }
  };
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
    last_run: null,
    next_run: null,
    running: null
  };
  autosubliminal.types.Show = {
    path: null,
    tvdb_id: null,
    title: null,
    year: null,
    overview: null,
    poster: null,
    banner: null,
    settings: null,
    path_in_video_paths: null,
    total_subtitles_wanted: null,
    total_subtitles_missing: null,
    total_subtitles_available: null,
    files: null
  };
  autosubliminal.types.Movie = {
    path: null,
    imdb_id: null,
    title: null,
    year: null,
    overview: null,
    poster: null,
    settings: null,
    path_in_video_paths: null,
    total_subtitles_wanted: null,
    total_subtitles_missing: null,
    total_subtitles_available: null,
    files: null
  };
  autosubliminal.types.SubtitleLanguage = {
    code: null,
    name: null
  };
  autosubliminal.settings.LOADED = 'SETTINGS_LOADED';

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
        PubSub.publish(autosubliminal.settings.LOADED, null);
      }
    });
  };

  autosubliminal.settings.loadSettings();
  autosubliminal.notifications.INFO = 'info';
  autosubliminal.notifications.SUCCESS = 'success';
  autosubliminal.notifications.WARNING = 'notice';
  autosubliminal.notifications.ERROR = 'error';
  autosubliminal.notifications.stackBottomRight = new PNotify.Stack({
    dir1: 'up',
    dir2: 'left',
    firstpos1: 10,
    firstpos2: 10,
    spacing1: 10,
    spacing2: 10
  });
  autosubliminal.notifications.stackContext = new PNotify.Stack({
    dir1: 'down',
    dir2: 'right',
    context: document.getElementById('stickyNotificationContext')
  });
  PNotify.defaults.stack = autosubliminal.notifications.stackBottomRight;
  PNotify.defaults.addClass = 'stack-bottomright';
  PNotify.defaults.styling = 'bootstrap3';
  PNotify.defaults.icons = 'bootstrap3';
  PNotify.defaults.delay = 5000;
  PNotify.defaultModules.set(PNotifyBootstrap3, {});
  PNotify.defaultModules.set(PNotifyGlyphicon, {});
  PNotify.defaultModules.set(PNotifyMobile, {});
  PNotify.defaultModules.set(PNotifyDesktop, {});
  PNotifyDesktop.permission();
  autosubliminal.notifications.stackContextModules = new Map(Array.from(PNotify.defaultModules));
  autosubliminal.notifications.stackContextModules["delete"](PNotifyDesktop);

  autosubliminal.notifications.showNotification = function (notification) {
    var message = notification.message;
    var type = notification.type;
    var sticky = notification.sticky;

    if (sticky) {
      PNotify.alert({
        title: false,
        text: message,
        textTrusted: true,
        type: type,
        hide: false,
        width: 'auto',
        addClass: 'container stack-context',
        stack: autosubliminal.notifications.stackContext,
        modules: autosubliminal.notifications.stackContextModules
      });
    } else {
        PNotify.alert({
          title: 'Auto-Subliminal',
          text: message,
          textTrusted: true,
          type: type
        });
      }
  };

  autosubliminal.websockets.EVENT = 'EVENT';
  autosubliminal.websockets.NOTIFICATION = 'NOTIFICATION';
  autosubliminal.websockets.PAGE_RELOAD = 'PAGE_RELOAD';
  autosubliminal.websockets.PROCESS_STARTED = 'PROCESS_STARTED';
  autosubliminal.websockets.PROCESS_FINISHED = 'PROCESS_FINISHED';
  autosubliminal.websockets.RUN_PROCESS = 'RUN_PROCESS';
  var websocketProtocol = 'ws:';

  if (window.location.protocol === 'https:') {
    websocketProtocol = 'wss:';
  }

  var websocketUrl = websocketProtocol + '//' + window.location.host + autosubliminal.WEB_ROOT + '/system/websocket';
  autosubliminal.websockets.ws = new WebSocket(websocketUrl);

  autosubliminal.websockets.ws.onmessage = function (message) {
    var data = message.data;

    if (!jQuery.isEmptyObject(data)) {
      var dataJson = JSON.parse(data);
      autosubliminal.websockets.handleWebsocketMessage(dataJson);
    }
  };

  autosubliminal.websockets.handleWebsocketMessage = function (message) {
    if (message.type == autosubliminal.websockets.NOTIFICATION) {
      autosubliminal.notifications.showNotification(message.notification);
    } else if (message.type == autosubliminal.websockets.EVENT) {
      autosubliminal.websockets.handleWebsocketEvent(message.event);
    } else {
      console.error('Unsupported message: ' + message);
    }
  };

  autosubliminal.websockets.handleWebsocketEvent = function (event) {
    var eventType = event.type;
    var eventData = event.data;

    if (eventType == autosubliminal.websockets.PAGE_RELOAD) {
      if (!jQuery.isEmptyObject(eventData)) {
        if (window.location.pathname.indexOf('/' + eventData.name) >= 0) {
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
      } else {
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    } else if (eventType == autosubliminal.websockets.PROCESS_STARTED) {
      if (!jQuery.isEmptyObject(eventData)) {
        PubSub.publish(autosubliminal.websockets.PROCESS_STARTED, eventData);
        var scanDiskNextRun = $('#scanDiskNextRun');
        var checkSubNextRun = $('#checkSubNextRun');

        if (eventData.name == autosubliminal.SCAN_DISK) {
          scanDiskNextRun.countdown('stop');
          scanDiskNextRun.text('Running...');
        } else if (eventData.name == autosubliminal.CHECK_SUB) {
          checkSubNextRun.countdown('stop');
          checkSubNextRun.text('Running...');
        }
      }
    } else if (eventType == autosubliminal.websockets.PROCESS_FINISHED) {
      if (!jQuery.isEmptyObject(eventData)) {
        PubSub.publish(autosubliminal.websockets.PROCESS_FINISHED, eventData);

        if (eventData.name == autosubliminal.SCAN_DISK) {
          $('#scanDiskNextRun').countdown(eventData.next_run);
        } else if (eventData.name == autosubliminal.CHECK_SUB) {
          $('#checkSubNextRun').countdown(eventData.next_run);
        }
      }
    } else {
      console.error('Unsupported event type: ' + eventType);
    }
  };

  autosubliminal.websockets.sendWebsocketMessage = function (message) {
    autosubliminal.websockets.ws.send(message);
  };

  autosubliminal.websockets.runProcessOnServer = function (process_name) {
    var event = {
      'type': autosubliminal.websockets.EVENT,
      'event': {
        'type': autosubliminal.websockets.RUN_PROCESS,
        'data': {
          'name': process_name
        }
      }
    };
    autosubliminal.websockets.sendWebsocketMessage(JSON.stringify(event));
  };

  autosubliminal.vue.setPosterPlaceholderUrl = function (event) {
    event.target.src = autosubliminal.getUrl('/images/poster-placeholder.jpg');
  };

  autosubliminal.vue.styleProgressBar = function (progressPercentage) {
    $('.vue-simple-progress-bar').each(function () {
      var self = $(this);
      var percentage = progressPercentage;

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

  $('.navbar .nav a').on('click', function () {
    if (!$(this).hasClass('run-process')) {
      $('.navbar').find('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
  });
  var basePath = '/' + location.pathname.replace(autosubliminal.WEB_ROOT, '').split('/')[1] + '/';
  $('.navbar').find('.nav').find('a[href=\'' + basePath + '\']').closest('li').addClass('active');
  $('.navbar .nav a.run-process').on('click', function (event) {
    event.preventDefault();
    var processName = $(this).data('process-name');
    autosubliminal.websockets.runProcessOnServer(processName);
  });
  $('input[type=checkbox][data-toggle=toggle][data-on=Enabled][data-off=Disabled]').on('change', function () {
    var target = $(this).parent().next('input[type=hidden]').val();

    if (target == 'False') {
      target = 'True';
    } else {
      target = 'False';
    }

    $(this).parent().next('input[type=hidden]').val(target);
  });

  autosubliminal.keepDropdownsOpen = function () {
    $('.dropdown .dropdown-menu.keep-open,.dropdown-menu.info-list').on('click', function (event) {
      event.stopPropagation();
    });
  };

  autosubliminal.keepDropdownsOpen();

  autosubliminal.enablePopovers = function () {
    $('[data-toggle=popover]').popover();
    $(document).on('click', function (event) {
      $('[data-toggle="popover"],[data-original-title]').each(function () {
        if (!$(this).is(event.target) && $(this).has(event.target).length === 0 && $('.popover').has(event.target).length === 0) {
          (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false;
        }
      });
    });
  };

  autosubliminal.enablePopovers();
  var scanDiskNextRunDate = new Date();
  scanDiskNextRunDate.setTime($('#scanDiskNextRunTimeMs').val());
  $('#scanDiskNextRun').countdown(scanDiskNextRunDate, function (event) {
    if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
      $(this).text('Running...');
    } else {
      $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
    }
  });
  var checkSubNextRunDate = new Date();
  checkSubNextRunDate.setTime($('#checkSubNextRunTimeMs').val());
  $('#checkSubNextRun').countdown(checkSubNextRunDate, function (event) {
    if (event.strftime(autosubliminal.TIME_FORMAT) == '00:00:00') {
      $(this).text('Running...');
    } else {
      $(this).text(event.strftime(autosubliminal.TIME_FORMAT));
    }
  });

  autosubliminal.initMultiInputTextArea = function (element) {
    $(element).hide();
    var values = $(element).val().split('\n');
    $(element).next('div.multi-input-fields').remove();
    $(element).after('<div class="multi-input-fields"></div>');
    var multiInputFields = $(element).next('div.multi-input-fields');

    for (var i = 0; i < values.length; i++) {
      $(multiInputFields).append('<div class="input-group">' + '<input type="text" class="form-control input-sm" value="' + values[i] + '">' + '<span class="input-group-addon addon-remove"><i class="fa fa-times" aria-hidden="true"></i></span>' + '</div>');
    }

    $(multiInputFields).append('<div class="input-group">' + '<input type="text" class="form-control input-sm" placeholder="New value">' + '<span class="input-group-addon addon-add"><i class="fa fa-plus" aria-hidden="true"></i></span>' + '</div>');
  };

  autosubliminal.initMultiInputTextAreas = function () {
    $('textarea.multi-input').each(function () {
      autosubliminal.initMultiInputTextArea(this);
    });
  };

  autosubliminal.initMultiInputTextAreas();
  $(document).on('click', '.multi-input-fields .input-group .addon-add', function () {
    var multiInputTextArea = $(this).parents('.multi-input-fields').siblings('.multi-input');
    var values = $(multiInputTextArea).val().split('\n');
    var value = $(this).siblings('input').val();
    var existingValue = values.filter(function (val) {
      return val === value;
    });

    if (value && existingValue.length === 0) {
      var newValues = values.concat([value]);
      $(multiInputTextArea).val(newValues.join('\n'));
      autosubliminal.initMultiInputTextArea(multiInputTextArea);
    } else {
      $(this).siblings('input').val('');
    }
  });
  $(document).on('click', '.multi-input-fields .input-group .addon-remove', function () {
    var multiInputTextArea = $(this).parents('.multi-input-fields').siblings('.multi-input');
    var values = multiInputTextArea.val().split('\n');
    var value = $(this).siblings('input').val();
    var newValues = values.filter(function (val) {
      return val !== value;
    });
    multiInputTextArea.val(newValues.join('\n'));
    autosubliminal.initMultiInputTextArea(multiInputTextArea);
  });
})(autosubliminal);

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
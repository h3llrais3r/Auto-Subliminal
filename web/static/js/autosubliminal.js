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

  types.Notification = function () {
    return {
      message: null,
      type: null,
      sticky: null
    };
  };

  types.WebsocketNotification = function () {
    return {
      type: autosubliminal.websockets.NOTIFICATION,
      notification: types.Notification()
    };
  };

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

  types.WebsocketProcessStartedEvent = function () {
    return {
      type: autosubliminal.websockets.EVENT,
      event: {
        type: autosubliminal.websockets.PROCESS_STARTED,
        data: types.Process()
      }
    };
  };

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
      path_in_video_paths: null,
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
      path_in_video_paths: null,
      total_subtitles_wanted: null,
      total_subtitles_missing: null,
      total_subtitles_available: null,
      files: null
    };
  };

  types.SubtitleLanguage = function () {
    return {
      code: null,
      name: null
    };
  };

  var settings = autosubliminal.settings;
  settings.LOADED = 'SETTINGS_LOADED';

  settings.loadSettings = function () {
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
        PubSub.publish(settings.LOADED, null);
      }
    });
  };

  settings.loadSettings();
  var notifications = autosubliminal.notifications;
  notifications.INFO = 'info';
  notifications.SUCCESS = 'success';
  notifications.WARNING = 'notice';
  notifications.ERROR = 'error';
  notifications.stackBottomRight = new PNotify.Stack({
    dir1: 'up',
    dir2: 'left',
    firstpos1: 10,
    firstpos2: 10,
    spacing1: 10,
    spacing2: 10
  });
  notifications.stackContext = new PNotify.Stack({
    dir1: 'down',
    dir2: 'right',
    context: document.getElementById('stickyNotificationContext')
  });
  PNotify.defaults.stack = notifications.stackBottomRight;
  PNotify.defaults.addClass = 'stack-bottomright';
  PNotify.defaults.styling = 'bootstrap3';
  PNotify.defaults.icons = 'bootstrap3';
  PNotify.defaults.delay = 5000;
  PNotify.defaultModules.set(PNotifyBootstrap3, {});
  PNotify.defaultModules.set(PNotifyGlyphicon, {});
  PNotify.defaultModules.set(PNotifyMobile, {});
  PNotify.defaultModules.set(PNotifyDesktop, {});
  PNotifyDesktop.permission();
  notifications.stackContextModules = new Map(Array.from(PNotify.defaultModules));
  notifications.stackContextModules["delete"](PNotifyDesktop);

  notifications.showNotification = function (notification) {
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
        stack: notifications.stackContext,
        modules: notifications.stackContextModules
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

  var websockets = autosubliminal.websockets;
  websockets.EVENT = 'EVENT';
  websockets.NOTIFICATION = 'NOTIFICATION';
  websockets.PAGE_RELOAD = 'PAGE_RELOAD';
  websockets.PROCESS_STARTED = 'PROCESS_STARTED';
  websockets.PROCESS_FINISHED = 'PROCESS_FINISHED';
  websockets.RUN_PROCESS = 'RUN_PROCESS';
  var websocketProtocol = 'ws:';

  if (window.location.protocol === 'https:') {
    websocketProtocol = 'wss:';
  }

  var websocketUrl = websocketProtocol + '//' + window.location.host + autosubliminal.WEB_ROOT + '/system/websocket';
  websockets.ws = new WebSocket(websocketUrl);

  websockets.ws.onmessage = function (message) {
    var data = message.data;

    if (!jQuery.isEmptyObject(data)) {
      var dataJson = JSON.parse(data);
      handleWebsocketMessage(dataJson);
    }
  };

  var handleWebsocketMessage = function handleWebsocketMessage(message) {
    if (message.type == websockets.NOTIFICATION) {
      notifications.showNotification(message.notification);
    } else if (message.type == websockets.EVENT) {
      handleWebsocketEvent(message.event);
    } else {
      console.error('Unsupported message: ' + message);
    }
  };

  var handleWebsocketEvent = function handleWebsocketEvent(event) {
    var eventType = event.type;
    var eventData = event.data;

    if (eventType == websockets.PAGE_RELOAD) {
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
    } else if (eventType == websockets.PROCESS_STARTED) {
      if (!jQuery.isEmptyObject(eventData)) {
        PubSub.publish(websockets.PROCESS_STARTED, eventData);
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
    } else if (eventType == websockets.PROCESS_FINISHED) {
      if (!jQuery.isEmptyObject(eventData)) {
        PubSub.publish(websockets.PROCESS_FINISHED, eventData);

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

  websockets.sendWebsocketMessage = function (message) {
    websockets.ws.send(message);
  };

  websockets.runProcessOnServer = function (process_name) {
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

  var vue = autosubliminal.vue;

  vue.setPosterPlaceholderUrl = function (event) {
    event.target.src = autosubliminal.getUrl('/images/poster-placeholder.jpg');
  };

  vue.styleProgressBar = function (progressPercentage) {
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
    websockets.runProcessOnServer(processName);
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

  var initMultiInputTextArea = function initMultiInputTextArea(element) {
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

  var initMultiInputTextAreas = function initMultiInputTextAreas() {
    $('textarea.multi-input').each(function () {
      initMultiInputTextArea(this);
    });
  };

  initMultiInputTextAreas();
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
      initMultiInputTextArea(multiInputTextArea);
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
    initMultiInputTextArea(multiInputTextArea);
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
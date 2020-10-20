'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.enableScrollIcons();

    if (autosubliminal.LOG_REVERSED) {
      autosubliminal.scrollToTop();
      $('#logInfo').text('Reversed tailing');
    } else {
      autosubliminal.scrollToBottom();
      $('#logInfo').text('Tailing');
    }

    var websocketLogUrl = "".concat(autosubliminal.websockets.websocketProtocol, "//").concat(window.location.host).concat(autosubliminal.WEB_ROOT, "/log/websocket");
    autosubliminal.websockets.wsLog = new WebSocket(websocketLogUrl);

    autosubliminal.websockets.wsLog.onmessage = function (message) {
      var logContent = $('#logContent');

      if (autosubliminal.LOG_REVERSED) {
        var content = logContent.text().split('\n');
        content.unshift(message.data);

        if (content.length > 1000) {
          content = content.slice(0, 1000);
        }

        logContent.text(content.join('\n'));
        autosubliminal.scrollToTop();
      } else {
        var _content = logContent.text().split('\n');

        _content.push(message.data);

        if (_content.length > 1000) {
          _content = _content.slice(-1000);
        }

        logContent.text(_content.join('\n'));
        autosubliminal.scrollToBottom();
      }
    };
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
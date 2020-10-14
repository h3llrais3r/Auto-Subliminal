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
        logContent.prepend(message.data + '\n');
        autosubliminal.scrollToTop();
      } else {
        logContent.append(message.data + '\n');
        autosubliminal.scrollToBottom();
      }
    };
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
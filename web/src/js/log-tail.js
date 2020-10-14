/**
 * Javascript needed on the log page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    const init = function () {

        // Enable scroll icons
        autosubliminal.enableScrollIcons();

        // Scroll to top or bottom depending on log order
        if (autosubliminal.LOG_REVERSED) {
            autosubliminal.scrollToTop();
            $('#logInfo').text('Reversed tailing');
        } else {
            autosubliminal.scrollToBottom();
            $('#logInfo').text('Tailing');
        }

        // Enable log websocket
        const websocketLogUrl = `${autosubliminal.websockets.websocketProtocol}//${window.location.host}${autosubliminal.WEB_ROOT}/log/websocket`;
        autosubliminal.websockets.wsLog = new WebSocket(websocketLogUrl);

        // Append messages to log content
        autosubliminal.websockets.wsLog.onmessage = function (message) {
            const logContent = $('#logContent');
            if (autosubliminal.LOG_REVERSED) {
                logContent.prepend(message.data + '\n');
                autosubliminal.scrollToTop();
            } else {
                logContent.append(message.data + '\n');
                autosubliminal.scrollToBottom();
            }
        };
    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
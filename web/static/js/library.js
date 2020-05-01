'use strict';

(function (autosubliminal) {
  'use strict';

  autosubliminal.library.checkScannerRunning = function () {
    $.get(autosubliminal.getUrl('/api/schedulers/' + autosubliminal.SCAN_LIBRARY), function (data) {
      if (!jQuery.isEmptyObject(data) && data.running) {
        $('.library-scanner-running').removeClass('hidden');
      }
    });
  };

  autosubliminal.library.scannerStartedEventSubscriber = function (msg, data) {
    if (!jQuery.isEmptyObject(data) && data.name == autosubliminal.SCAN_LIBRARY) {
      $('.library-scanner-running').removeClass('hidden');
    }
  };

  autosubliminal.library.scannerFinishedEventSubscriber = function (msg, data) {
    if (!jQuery.isEmptyObject(data) && data.name == autosubliminal.SCAN_LIBRARY) {
      $('.library-scanner-running').addClass('hidden');
    }
  };
})(autosubliminal);
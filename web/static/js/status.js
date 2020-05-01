'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    $('#scheduler').tablesorter({
      widgets: ['reflow', 'saveSort'],
      sortList: [[0, 0]],
      dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT
    });
    $('#diskspace').tablesorter({
      widgets: ['reflow', 'saveSort'],
      sortList: [[0, 0]]
    });

    var processStartedEventSubscriber = function processStartedEventSubscriber(msg, data) {
      var scheduler_process_row = $('#scheduler').find('#' + data.name);
      scheduler_process_row.children('.scheduler-next-run').text('Running...');
      scheduler_process_row.addClass('scheduler-running');
    };

    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, processStartedEventSubscriber);

    var processFinishedEventSubscriber = function processFinishedEventSubscriber(msg, data) {
      var scheduler_process_row = $('#scheduler').find('#' + data.name);
      scheduler_process_row.children('.scheduler-alive').text(data.alive);
      scheduler_process_row.children('.scheduler-active').text(data.active);
      scheduler_process_row.children('.scheduler-last-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.last_run)));
      scheduler_process_row.children('.scheduler-next-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.next_run)));
      scheduler_process_row.removeClass('scheduler-running');
    };

    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, processFinishedEventSubscriber);
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
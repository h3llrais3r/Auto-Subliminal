'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    window.Vue.component('status', {
      data: function data() {
        return {
          schedulers: null,
          diskusage: null
        };
      },
      created: function created() {},
      mounted: function mounted() {
        this.getSchedulers();
        this.getDiskUsage();
      },
      updated: function updated() {
        this.setupStatus();
      },
      methods: {
        getSchedulers: function getSchedulers() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/schedulers'), function (data) {
            self.schedulers = data;
          });
        },
        getDiskUsage: function getDiskUsage() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/settings/diskusage'), function (data) {
            self.diskusage = data;
          });
        },
        setupStatus: function setupStatus() {
          $('#scheduler').tablesorter({
            widgets: ['reflow', 'saveSort'],
            sortList: [[0, 0]],
            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
            initialized: function initialized() {
              var self = $('#scheduler');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          });
          $('#diskusage').tablesorter({
            widgets: ['reflow', 'saveSort'],
            sortList: [[0, 0]],
            initialized: function initialized() {
              var self = $('#diskusage');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          });
        },
        formatDateTime: autosubliminal.vue.formatDateTime,
        formatDuration: autosubliminal.vue.formatDuration
      }
    });
    new window.Vue({
      el: '#app'
    });
  };

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
    scheduler_process_row.children('.scheduler-last-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.lastRun)));
    scheduler_process_row.children('.scheduler-next-run').text(strftime(autosubliminal.TIMESTAMP_FORMAT, new Date(data.nextRun)));
    scheduler_process_row.removeClass('scheduler-running');
  };

  PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, processFinishedEventSubscriber);
  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
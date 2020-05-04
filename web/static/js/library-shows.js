'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.library.checkScannerRunning();
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);
    window.Vue.component('library-shows', {
      data: function data() {
        return {
          shows: [],
          bannerThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/banner/thumbnail/'),
          posterThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/poster/thumbnail/')
        };
      },
      created: function created() {},
      mounted: function mounted() {
        this.getShows();
      },
      updated: function updated() {
        this.setupShows();
        autosubliminal.vue.styleProgressBar();
      },
      methods: {
        getShows: function getShows() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/shows'), function (data) {
            self.shows = data;
          });
        },
        setupShows: function setupShows() {
          $('#shows').tablesorter({
            debug: false,
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
              filter_columnFilters: false,
              filter_external: '.shows-filter',
              filter_searchDelay: 50,
              filter_saveFilters: true,
              filter_reset: '.shows-filter-reset'
            },
            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
            headers: {
              0: {
                sorter: 'text'
              }
            },
            sortList: [[0, 0]],
            textExtraction: {
              0: function _(node, table, cellIndex) {
                return $(node).find('a').attr('title');
              }
            },
            initialized: function initialized() {
              var self = $('#shows');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          }).tablesorterPager({
            container: $('#showsPager'),
            output: '{startRow} to {endRow} ({filteredRows})'
          });
          $('.shows-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#shows'), 'tablesorter-filters', '');
          });
        },
        getShowDetailsUrl: function getShowDetailsUrl(tvdbId) {
          return autosubliminal.getUrl("/library/shows/".concat(tvdbId));
        },
        getShowProgressPercentage: function getShowProgressPercentage(show) {
          return show.total_subtitles_available / show.total_subtitles_wanted * 100;
        },
        getShowProgressText: function getShowProgressText(show) {
          return "".concat(show.total_subtitles_available, " of ").concat(show.total_subtitles_wanted);
        }
      }
    });
    window.Vue.use(window.VueLazyload);
    new window.Vue({
      el: '#app'
    });
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
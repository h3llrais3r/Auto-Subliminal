'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.library.checkScannerRunning();
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);
    window.Vue.component('library-overview', {
      data: function data() {
        return {
          showsOverview: null,
          moviesOverview: null
        };
      },
      created: function created() {},
      mounted: function mounted() {
        var loadingIcon = $('.loading');
        loadingIcon.removeClass('hidden');
        this.getShowsOverview();
        this.getMoviesOverview();
        loadingIcon.addClass('hidden');
      },
      updated: function updated() {
        autosubliminal.vue.styleProgressBar();
      },
      methods: {
        getShowsOverview: function getShowsOverview() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/shows/overview'), function (data) {
            self.showsOverview = data;
          });
        },
        getMoviesOverview: function getMoviesOverview() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/movies/overview'), function (data) {
            self.moviesOverview = data;
          });
        },
        getProgressPercentage: function getProgressPercentage(overview) {
          return overview.totalSubtitlesAvailable / overview.totalSubtitlesWanted * 100;
        },
        getProgressText: function getProgressText(overview) {
          return "".concat(overview.totalSubtitlesAvailable, " of ").concat(overview.totalSubtitlesWanted);
        }
      }
    });
    new window.Vue({
      el: '#app'
    });
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
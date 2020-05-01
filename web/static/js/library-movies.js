'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.library.checkScannerRunning();
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);
    window.Vue.component('library-movies', {
      data: function data() {
        return {
          movies: [],
          posterThumbnailUrl: autosubliminal.getUrl('/artwork/imdb/poster/thumbnail/')
        };
      },
      created: function created() {},
      mounted: function mounted() {
        this.getMovies();
      },
      updated: function updated() {
        this.setupMovies();
        autosubliminal.vue.styleProgressBar();
      },
      methods: {
        getMovies: function getMovies() {
          var self = this;
          $.get(autosubliminal.getUrl('/api/movies'), function (data) {
            self.movies = data;
          });
        },
        setupMovies: function setupMovies() {
          $('#movies').tablesorter({
            debug: false,
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
              filter_columnFilters: false,
              filter_external: '.movies-filter',
              filter_searchDelay: 50,
              filter_saveFilters: true,
              filter_reset: '.movies-filter-reset'
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
              var self = $('#movies');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          }).tablesorterPager({
            container: $('#moviesPager'),
            output: '{startRow} to {endRow} ({filteredRows})'
          });
          $('.movies-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#movies'), 'tablesorter-filters', '');
          });
        },
        getMovieDetailsUrl: function getMovieDetailsUrl(imdbId) {
          return autosubliminal.getUrl('/library/movies/' + imdbId);
        },
        getMovieProgressPercentage: function getMovieProgressPercentage(movie) {
          return movie.total_subtitles_available / movie.total_subtitles_wanted * 100;
        },
        getMovieProgressText: function getMovieProgressText(movie) {
          return movie.total_subtitles_available + ' of ' + movie.total_subtitles_wanted;
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
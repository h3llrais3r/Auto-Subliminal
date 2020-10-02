'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.library.checkScannerRunning();
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);
    window.Vue.component('library-movie-details', {
      data: function data() {
        return {
          movie: null,
          imdbUrl: autosubliminal.IMDB_URL,
          posterPlaceholderUrl: autosubliminal.vue.getPosterPlaceholderUrl(),
          languages: autosubliminal.LANGUAGES,
          movieSettings: null,
          movieSettingsWantedLanguages: [],
          selectedFileLocation: null,
          selectedFileName: null,
          selectedHardcodedLanguages: []
        };
      },
      created: function created() {},
      mounted: function mounted() {
        var self = this;
        self.getMovieDetails();
      },
      updated: function updated() {
        var self = this;
        autosubliminal.keepDropdownsOpen();
        autosubliminal.vue.styleProgressBar(self.movieProgressPercentage);
      },
      computed: {
        moviePosterThumbnailUrl: function moviePosterThumbnailUrl() {
          var self = this;
          return autosubliminal.getUrl("/artwork/imdb/poster/thumbnail/".concat(self.movie.imdb_id));
        },
        moviePosterFullSizeUrl: function moviePosterFullSizeUrl() {
          var self = this;
          return autosubliminal.getUrl("/artwork/imdb/poster/fullsize/".concat(self.movie.imdb_id));
        },
        movieProgressPercentage: function movieProgressPercentage() {
          var self = this;
          return self.movie.total_subtitles_available / self.movie.total_subtitles_wanted * 100;
        },
        movieProgressText: function movieProgressText() {
          var self = this;
          return "".concat(self.movie.total_subtitles_available, " of ").concat(self.movie.total_subtitles_wanted);
        }
      },
      methods: {
        getMovieDetails: function getMovieDetails() {
          var self = this;
          var imdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
          $('.loading').removeClass('hidden');
          $.get(autosubliminal.getUrl("/api/movies/".concat(imdbId)), function (data) {
            self.movie = data;
            self.movieSettings = self.movie.settings;
          }).fail(function (response) {
            if (response.status == 404) {
              $.deleteJson(autosubliminal.getUrl("/api/movies/".concat(imdbId)), null, function () {
                var notification = autosubliminal.types.Notification();
                notification.message = 'Movie does not exist anymore and has been removed from the library!';
                notification.type = autosubliminal.notifications.WARNING;
                notification.sticky = false;
                autosubliminal.notifications.showNotification(notification);
                window.location = autosubliminal.getUrl('/library/movies');
              });
            }
          }).always(function () {
            $('.loading').addClass('hidden');
          });
        },
        getPlayVideoUrl: autosubliminal.constructPlayVideoUrl,
        getLanguages: autosubliminal.convertToLanguages,
        getLanguageCodes: autosubliminal.convertToLanguageCodes,
        internalLanguagesAvailable: function internalLanguagesAvailable(file) {
          var available = false;

          if (file.hardcoded_languages && file.hardcoded_languages.length > 0 || file.embedded_languages && file.embedded_languages.length > 0) {
            available = true;
          }

          return available;
        },
        refreshMovieDetails: function refreshMovieDetails(event) {
          event.preventDefault();
          var self = this;
          $('.refresh-running').removeClass('hidden');
          $.putJson(autosubliminal.getUrl("/api/movies/".concat(self.movie.imdb_id, "/refresh")), null, function () {
            self.getMovieDetails();
            $('.refresh-running').addClass('hidden');
          });
        },
        openSettingsModal: function openSettingsModal(event) {
          event.preventDefault();
          var self = this;
          self.movieSettings = self.movie.settings;
          self.movieSettingsWantedLanguages = self.getLanguages(self.movie.settings.wanted_languages);
          $('#settingsModal').modal('show');
        },
        openDeleteModal: function openDeleteModal(event) {
          event.preventDefault();
          $('#deleteModal').modal('show');
        },
        openSubtitlesModal: function openSubtitlesModal(fileLocation, fileName, hardcodedLanguages, event) {
          event.preventDefault();
          var self = this;
          self.selectedFileLocation = fileLocation;
          self.selectedFileName = fileName;
          self.selectedHardcodedLanguages = self.getLanguages(hardcodedLanguages);
          $('#subtitlesModal').modal('show');
        },
        saveSettings: function saveSettings(event) {
          event.preventDefault();
          var self = this;
          var data = self.movieSettings;
          data.wanted_languages = self.getLanguageCodes(self.movieSettingsWantedLanguages);
          $.putJson(autosubliminal.getUrl("/api/movies/".concat(self.movie.imdb_id, "/settings")), data, function () {
            $('#settingsModal').modal('hide');
            self.refreshMovieDetails(event);
          });
        },
        deleteMovie: function deleteMovie(event) {
          event.preventDefault();
          var self = this;
          $.deleteJson(autosubliminal.getUrl("/api/movies/".concat(self.movie.imdb_id)), null, function () {
            $('#deleteModal').modal('hide');
            window.location = autosubliminal.getUrl('/library/movies');
          });
        },
        saveHardcodedSubtitles: function saveHardcodedSubtitles(event) {
          event.preventDefault();
          var self = this;
          var data = {
            'file_location': self.selectedFileLocation,
            'file_name': self.selectedFileName,
            'languages': self.getLanguageCodes(self.selectedHardcodedLanguages)
          };
          $.putJson(autosubliminal.getUrl("/api/movies/".concat(self.movie.imdb_id, "/subtitles/hardcoded")), data, function () {
            $('#subtitlesModal').modal('hide');
            self.getMovieDetails();
          });
        },
        addMoviePathToVideoPaths: function addMoviePathToVideoPaths(event) {
          event.preventDefault();
          var self = this;
          var data = {
            'videoPath': self.movie.path
          };
          $.putJson(autosubliminal.getUrl('/api/settings/general/videoPaths'), data, function () {
            self.getMovieDetails();
          });
        }
      }
    });
    window.Vue.component('multiselect', window.VueMultiselect["default"]);
    window.Vue.use(window.VueLazyload);
    new window.Vue({
      el: '#app'
    });
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
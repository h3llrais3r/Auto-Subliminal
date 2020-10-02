'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    autosubliminal.library.checkScannerRunning();
    PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
    PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);
    window.Vue.component('library-show-details', {
      data: function data() {
        return {
          show: null,
          tvdbUrl: autosubliminal.TVDB_URL,
          posterPlaceholderUrl: autosubliminal.vue.getPosterPlaceholderUrl(),
          languages: autosubliminal.LANGUAGES,
          showSettings: null,
          showSettingsWantedLanguages: [],
          selectedEpisodeTvdbId: null,
          selectedFileLocation: null,
          selectedFileName: null,
          selectedHardcodedLanguages: []
        };
      },
      created: function created() {},
      mounted: function mounted() {
        var self = this;
        self.getShowDetails();
      },
      updated: function updated() {
        var self = this;
        autosubliminal.keepDropdownsOpen();
        autosubliminal.vue.styleProgressBar(self.showProgressPercentage);
      },
      computed: {
        showPosterThumbnailUrl: function showPosterThumbnailUrl() {
          var self = this;
          return autosubliminal.getUrl("/artwork/tvdb/poster/thumbnail/".concat(self.show.tvdb_id));
        },
        showPosterFullSizeUrl: function showPosterFullSizeUrl() {
          var self = this;
          return autosubliminal.getUrl("/artwork/tvdb/poster/fullsize/".concat(self.show.tvdb_id));
        },
        showProgressPercentage: function showProgressPercentage() {
          var self = this;
          return self.show.total_subtitles_available / self.show.total_subtitles_wanted * 100;
        },
        showProgressText: function showProgressText() {
          var self = this;
          return "".concat(self.show.total_subtitles_available, " of ").concat(self.show.total_subtitles_wanted);
        }
      },
      methods: {
        getShowDetails: function getShowDetails() {
          var self = this;
          var tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
          $('.loading').removeClass('hidden');
          $.get(autosubliminal.getUrl("/api/shows/".concat(tvdbId)), function (data) {
            self.show = data;
            self.showSettings = self.show.settings;
          }).fail(function (response) {
            if (response.status == 404) {
              $.deleteJson(autosubliminal.getUrl("/api/shows/".concat(tvdbId)), null, function () {
                var notification = autosubliminal.types.Notification();
                notification.message = 'Show does not exist anymore and has been removed from the library!';
                notification.type = autosubliminal.notifications.WARNING;
                notification.sticky = false;
                autosubliminal.notifications.showNotification(notification);
                window.location = autosubliminal.getUrl('/library/shows');
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
        refreshShowDetails: function refreshShowDetails(event) {
          event.preventDefault();
          var self = this;
          $('.refresh-running').removeClass('hidden');
          $.putJson(autosubliminal.getUrl("/api/shows/".concat(self.show.tvdb_id, "/refresh")), null, function () {
            self.getShowDetails();
            $('.refresh-running').addClass('hidden');
          });
        },
        openSettingsModal: function openSettingsModal(event) {
          event.preventDefault();
          var self = this;
          self.showSettings = self.show.settings;
          self.showSettingsWantedLanguages = self.getLanguages(self.show.settings.wanted_languages);
          $('#settingsModal').modal('show');
        },
        openDeleteModal: function openDeleteModal(event) {
          event.preventDefault();
          $('#deleteModal').modal('show');
        },
        openSubtitlesModal: function openSubtitlesModal(fileLocation, fileName, hardcodedLanguages, episodeTvdbId, event) {
          event.preventDefault();
          var self = this;
          self.selectedEpisodeTvdbId = episodeTvdbId;
          self.selectedFileLocation = fileLocation;
          self.selectedFileName = fileName;
          self.selectedHardcodedLanguages = self.getLanguages(hardcodedLanguages);
          $('#subtitlesModal').modal('show');
        },
        saveSettings: function saveSettings(event) {
          event.preventDefault();
          var self = this;
          var data = self.showSettings;
          data.wanted_languages = self.getLanguageCodes(self.showSettingsWantedLanguages);
          $.putJson(autosubliminal.getUrl("/api/shows/".concat(self.show.tvdb_id, "/settings")), data, function () {
            $('#settingsModal').modal('hide');
            self.refreshShowDetails(event);
          });
        },
        deleteShow: function deleteShow(event) {
          event.preventDefault();
          var self = this;
          $.deleteJson(autosubliminal.getUrl("/api/shows/".concat(self.show.tvdb_id)), null, function () {
            $('#deleteModal').modal('hide');
            window.location = autosubliminal.getUrl('/library/shows');
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
          $.putJson(autosubliminal.getUrl("/api/shows/".concat(self.show.tvdb_id, "/subtitles/hardcoded/").concat(self.selectedEpisodeTvdbId)), data, function () {
            $('#subtitlesModal').modal('hide');
            self.getShowDetails();
          });
        },
        addShowPathToVideoPaths: function addShowPathToVideoPaths(event) {
          event.preventDefault();
          var self = this;
          var data = {
            'videoPath': self.show.path
          };
          $.putJson(autosubliminal.getUrl('/api/settings/general/videoPaths'), data, function () {
            self.getShowDetails();
          });
        },
        getNrOfSubtitles: function getNrOfSubtitles(files, language) {
          var subtitleCount = 0;
          files.forEach(function (file) {
            if (file.type == 'subtitle' && file.language != null && file.language == language) {
              subtitleCount++;
            } else if (file.type == 'video') {
              if (file.hardcoded_languages != null) {
                file.hardcoded_languages.forEach(function (harcodedLanguage) {
                  if (harcodedLanguage == language) {
                    subtitleCount++;
                  }
                });
              }

              if (file.embedded_languages != null) {
                file.embedded_languages.forEach(function (embeddedLanguage) {
                  if (embeddedLanguage == language) {
                    subtitleCount++;
                  }
                });
              }
            }
          });
          return subtitleCount;
        },
        getNrOfVideos: function getNrOfVideos(files) {
          var videoCount = 0;
          files.forEach(function (file) {
            if (file.type == 'video') {
              videoCount++;
            }
          });
          return videoCount;
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
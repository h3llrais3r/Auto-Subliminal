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
          posterFullSizeUrl: autosubliminal.getUrl('/artwork/tvdb/poster/fullsize/'),
          posterThumbnailUrl: autosubliminal.getUrl('/artwork/tvdb/poster/thumbnail/'),
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
        showProgressPercentage: function showProgressPercentage() {
          var self = this;
          return self.show.total_subtitles_available / self.show.total_subtitles_wanted * 100;
        },
        showProgressText: function showProgressText() {
          var self = this;
          return self.show.total_subtitles_available + ' of ' + self.show.total_subtitles_wanted;
        }
      },
      methods: {
        getShowDetails: function getShowDetails() {
          var self = this;
          var tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
          $('.loading').removeClass('hidden');
          $.get(autosubliminal.getUrl('/api/shows/' + tvdbId), function (data) {
            self.show = data;
            self.showSettings = self.show.settings;
          }).fail(function (response) {
            if (response.status == 404) {
              $.deleteJson(autosubliminal.getUrl('/api/shows/' + tvdbId), null, function () {
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
        setPosterPlaceholderUrl: autosubliminal.vue.setPosterPlaceholderUrl,
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
          $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/refresh'), null, function () {
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
          $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/settings'), data, function () {
            $('#settingsModal').modal('hide');
            self.refreshShowDetails(event);
          });
        },
        deleteShow: function deleteShow(event) {
          event.preventDefault();
          var self = this;
          $.deleteJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id), null, function () {
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
          $.putJson(autosubliminal.getUrl('/api/shows/' + self.show.tvdb_id + '/subtitles/hardcoded/' + self.selectedEpisodeTvdbId), data, function () {
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

          for (var i = 0; i < files.length; i++) {
            if (files[i].type == 'subtitle' && files[i].language != null && files[i].language == language) {
              subtitleCount++;
            } else if (files[i].type == 'video') {
              if (files[i].hardcoded_languages != null) {
                for (var j = 0; files[i].hardcoded_languages[j]; j++) {
                  if (files[i].hardcoded_languages[j] == language) {
                    subtitleCount++;
                  }
                }
              }

              if (files[i].embedded_languages != null) {
                for (var k = 0; files[i].embedded_languages[k]; k++) {
                  if (files[i].embedded_languages[k] == language) {
                    subtitleCount++;
                  }
                }
              }
            }
          }

          return subtitleCount;
        },
        getNrOfVideos: function getNrOfVideos(files) {
          var videoCount = 0;

          for (var i = 0; i < files.length; i++) {
            if (files[i].type == 'video') {
              videoCount++;
            }
          }

          return videoCount;
        }
      }
    });
    window.Vue.component('multiselect', window.VueMultiselect["default"]);
    new window.Vue({
      el: '#app'
    });
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
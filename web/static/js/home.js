'use strict';

(function (autosubliminal) {
  'use strict';

  var init = function init() {
    window.Vue.component('settings', {
      props: {
        type: String,
        indexerId: String,
        title: String,
        settings: Object
      },
      data: function data() {
        return {
          posterPlaceholderUrl: autosubliminal.vue.getPosterPlaceholderUrl(),
          languages: autosubliminal.LANGUAGES,
          wantedLanguages: []
        };
      },
      computed: {
        posterThumbnailUrl: function posterThumbnailUrl() {
          var self = this;
          var indexer = '';

          if (self.type == autosubliminal.EPISODE_TYPE) {
            indexer = 'tvdb';
          } else if (self.type == autosubliminal.MOVIE_TYPE) {
            indexer = 'imdb';
          }

          return autosubliminal.getUrl("/artwork/".concat(indexer, "/poster/thumbnail/").concat(self.indexerId));
        }
      },
      watch: {
        settings: function settings(newSettings) {
          var self = this;

          if (newSettings && newSettings.wantedLanguages) {
            self.wantedLanguages = self.getLanguages(self.settings.wantedLanguages);
          }
        }
      },
      created: function created() {},
      mounted: function mounted() {},
      updated: function updated() {
        autosubliminal.keepDropdownsOpen();
      },
      methods: {
        getLanguages: autosubliminal.convertToLanguages,
        getLanguageCodes: autosubliminal.convertToLanguageCodes,
        saveSettings: function saveSettings(event) {
          event.preventDefault();
          var self = this;
          var apiUrl = '';

          if (self.type == autosubliminal.EPISODE_TYPE) {
            apiUrl = autosubliminal.getUrl("/api/shows/".concat(self.indexerId, "/settings"));
          } else if (self.type == autosubliminal.MOVIE_TYPE) {
            apiUrl = autosubliminal.getUrl("/api/movies/".concat(self.indexerId, "/settings"));
          }

          var data = self.settings;
          data.wantedLanguages = self.getLanguageCodes(self.wantedLanguages);
          $.putJson(apiUrl, data, function () {
            $('#settingsModal').modal('hide');
          });
        }
      }
    });
    window.Vue.component('multiselect', window.VueMultiselect["default"]);
    window.Vue.use(window.VueLazyload);
    new window.Vue({
      el: '#app',
      data: function data() {
        return {
          type: null,
          indexerId: null,
          title: null,
          settings: null
        };
      },
      created: function created() {},
      mounted: function mounted() {
        this.setupHome();
      },
      updated: function updated() {},
      methods: {
        setupHome: function setupHome() {
          autosubliminal.keepDropdownsOpen();
          $('#wanteditems').tablesorter({
            debug: false,
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
              filter_columnFilters: false,
              filter_external: '.wanteditems-filter',
              filter_searchDelay: 50,
              filter_saveFilters: true,
              filter_reset: '.wanteditems-filter-reset'
            },
            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
            headers: {
              0: {
                sorter: 'false'
              },
              1: {
                sorter: 'text'
              }
            },
            sortList: [[9, 1]],
            initialized: function initialized() {
              var self = $('#wanteditems');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          }).tablesorterPager({
            container: $('#wanteditemsPager'),
            output: '{startRow} to {endRow} ({filteredRows})'
          });
          $('.wanteditems-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#wanteditems'), 'tablesorter-filters', '');
          });
          $('#lastdownloads').tablesorter({
            debug: false,
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
              filter_columnFilters: false,
              filter_external: '.lastdownloads-filter',
              filter_searchDelay: 50,
              filter_saveFilters: true,
              filter_reset: '.lastdownloads-filter-reset'
            },
            dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
            headers: {
              1: {
                sorter: 'text'
              }
            },
            sortList: [[9, 1]],
            initialized: function initialized() {
              var self = $('#lastdownloads');
              self.find('.loading-row').remove();
              self.find('.content-row').removeClass('hidden');
              self.trigger('update');
            }
          }).tablesorterPager({
            container: $('#lastdownloadsPager'),
            output: '{startRow} to {endRow} ({filteredRows})'
          });
          $('.lastdownloads-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#lastdownloads'), 'tablesorter-filters', '');
          });
          $('.manualsearch-container-link').on('click', function (event) {
            event.preventDefault();
            var self = $(this);

            if (self.data('running')) {
              return false;
            }

            self.data('running', true);
            var searchUrl = self.attr('href');
            var loadingIcon = self.next('i');
            var contentDiv = self.parent('div').next('div');
            loadingIcon.removeClass('invisible').addClass('visible');
            contentDiv.empty();
            $.get(searchUrl, function (data) {
              loadingIcon.removeClass('visible').addClass('invisible');
              contentDiv.append(data);
            }).always(function () {
              self.data('running', false);
            });
            return false;
          });
          $('.update-wanted-item-link').on('click', function (event) {
            event.preventDefault();
            var self = $(this);
            var updateUrl = self.attr('href');
            var updatePanel = self.closest('.panel-body');
            var wantedItem = self.closest('.wanted-item');
            var updateObj = {
              'title': updatePanel.find('input.update-wanted-item-title').val(),
              'year': updatePanel.find('input.update-wanted-item-year').val(),
              'season': updatePanel.find('input.update-wanted-item-season').val(),
              'episode': updatePanel.find('input.update-wanted-item-episode').val(),
              'source': updatePanel.find('input.update-wanted-item-source').val(),
              'quality': updatePanel.find('input.update-wanted-item-quality').val(),
              'codec': updatePanel.find('input.update-wanted-item-codec').val(),
              'releasegrp': updatePanel.find('input.update-wanted-item-releasegrp').val()
            };
            $.post(updateUrl, updateObj, function (data) {
              if (!jQuery.isEmptyObject(data)) {
                self.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                wantedItem.find('.wanted-item-title').text(data['displaytitle']);
                wantedItem.find('.wanted-item-season').text(data['season']);
                wantedItem.find('.wanted-item-episode').text(data['episode']);
                wantedItem.find('.wanted-item-source').text(data['source']);
                wantedItem.find('.wanted-item-quality').text(data['quality']);
                wantedItem.find('.wanted-item-codec').text(data['codec']);
                wantedItem.find('.wanted-item-releasegrp').text(data['releasegrp']);
              }
            });
            return false;
          });
          $('.reset-wanted-item-link').on('click', function (event) {
            event.preventDefault();
            var self = $(this);
            var resetUrl = self.attr('href');
            var updatePanel = self.closest('.panel-body');
            var wantedItem = self.closest('.wanted-item');
            $.get(resetUrl, function (data) {
              if (!jQuery.isEmptyObject(data)) {
                self.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                updatePanel.find('input.update-wanted-item-title').val(data['title']);
                updatePanel.find('input.update-wanted-item-year').val(data['year']);
                updatePanel.find('input.update-wanted-item-season').val(data['season']);
                updatePanel.find('input.update-wanted-item-episode').val(data['episode']);
                updatePanel.find('input.update-wanted-item-source').val(data['source']);
                updatePanel.find('input.update-wanted-item-quality').val(data['quality']);
                updatePanel.find('input.update-wanted-item-codec').val(data['codec']);
                updatePanel.find('input.update-wanted-item-releasegrp').val(data['releasegrp']);
                wantedItem.find('.wanted-item-title').text(data['displaytitle']);
                wantedItem.find('.wanted-item-season').text(data['season']);
                wantedItem.find('.wanted-item-episode').text(data['episode']);
                wantedItem.find('.wanted-item-source').text(data['source']);
                wantedItem.find('.wanted-item-quality').text(data['quality']);
                wantedItem.find('.wanted-item-codec').text(data['codec']);
                wantedItem.find('.wanted-item-releasegrp').text(data['releasegrp']);
              }
            });
            return false;
          });
          $('#settingsModal').on('hidden.bs.modal', function () {
            $(this).find('#settingsPosterImage').attr('src', autosubliminal.vue.getPosterPlaceholderUrl());
          });
        },
        openSettingsModal: function openSettingsModal(event, type, indexerId, title) {
          event.preventDefault();
          var self = this;
          var apiUrl = '';

          if (type == autosubliminal.EPISODE_TYPE) {
            apiUrl = autosubliminal.getUrl("/api/shows/".concat(indexerId, "/settings"));
          } else if (type == autosubliminal.MOVIE_TYPE) {
            apiUrl = autosubliminal.getUrl("/api/movies/".concat(indexerId, "/settings"));
          }

          $.get(apiUrl, function (data) {
            self.type = type;
            self.indexerId = indexerId;
            self.title = title;
            self.settings = data;
          });
          $('#settingsModal').modal('show');
        }
      }
    });
  };

  PubSub.subscribe(autosubliminal.settings.LOADED, init);
})(autosubliminal);
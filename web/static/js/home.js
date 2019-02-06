/**
 * Javascript needed on the home page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    var init = function () {

        // Setup the wanted items table
        $('#wanteditems')
            .tablesorter({
                debug: false, // Put on true to debug
                // Enable widgets
                widgets: ['reflow', 'filter', 'saveSort'],
                widgetOptions: {
                    // No column filters
                    filter_columnFilters: false,
                    // External filter selector
                    filter_external: '.wanteditems-filter',
                    // Search faster (default 300)
                    filter_searchDelay: 50,
                    // Save filters
                    filter_saveFilters: true,
                    // Reset filter selector
                    filter_reset: '.wanteditems-filter-reset'
                },
                // Use configured date format
                dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
                // Force text sorter in show/movie name column (this is needed due to img in table cell)
                // See https://github.com/Mottie/tablesorter/issues/1149
                headers: {
                    0: {sorter: 'false'},
                    1: {sorter: 'text'}
                },
                // Sort default by time desc
                sortList: [[9, 1]],
                // Remove loading indication and show content when initialized
                initialized: function () {
                    var self = $('#wanteditems');
                    self.find('.loading-row').remove();
                    self.find('.content-row').removeClass('hidden');
                    self.trigger('update'); // Trigger table update for the removed loading row
                }
            })
            .tablesorterPager({
                container: $('#wanteditemsPager'),
                output: '{startRow} to {endRow} ({filteredRows})'
            });

        // Setup the wanted items filter
        $('.wanteditems-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#wanteditems'), 'tablesorter-filters', '');
        });

        // Setup the last downloads table
        $('#lastdownloads')
            .tablesorter({
                debug: false, // Put on true to debug
                // Enable widgets
                widgets: ['reflow', 'filter', 'saveSort'],
                widgetOptions: {
                    // No column filters
                    filter_columnFilters: false,
                    // External filter selector
                    filter_external: '.lastdownloads-filter',
                    // Search faster (default 300)
                    filter_searchDelay: 50,
                    // Save filters
                    filter_saveFilters: true,
                    // Reset filter selector
                    filter_reset: '.lastdownloads-filter-reset'
                },
                // Use configured date format
                dateFormat: autosubliminal.TABLESORTER_DATE_FORMAT,
                // Force text sorter in show/movie name column (this is needed due to img in table cell)
                // See https://github.com/Mottie/tablesorter/issues/1149
                headers: {
                    1: {sorter: 'text'}
                },
                // Sort default by time desc
                sortList: [[9, 1]],
                // Remove loading indication and show content when initialized
                initialized: function () {
                    var self = $('#lastdownloads');
                    self.find('.loading-row').remove();
                    self.find('.content-row').removeClass('hidden');
                    self.trigger('update'); // Trigger table update for the removed loading row
                }
            })
            .tablesorterPager({
                container: $('#lastdownloadsPager'),
                output: '{startRow} to {endRow} ({filteredRows})'
            });

        // Setup the last downloads filter
        $('.lastdownloads-filter-reset').on('click', function () {
            $(this).prev('input').val('').focus();
            $.tablesorter.storage($('#lastdownloads'), 'tablesorter-filters', '');
        });

        // Setup the manual search link
        $('.container-manualsearch-link').on('click', function (event) {
            // Prevent default behaviour
            event.preventDefault();
            // Prevent multi clicks when already running
            var self = $(this);
            if (self.data('running')) {
                return false;
            }
            // Mark as running
            self.data('running', true);
            // Define variables
            var searchUrl = self.attr('href');
            var loadingIcon = self.next('i');
            var contentDiv = self.parent('div').next('div');
            // Show the loading icon
            loadingIcon.removeClass('invisible').addClass('visible');
            // Clear previous content
            contentDiv.empty();
            // Call the searchUrl
            $.get(searchUrl, function (data) {
                // Hide the loading icon
                loadingIcon.removeClass('visible').addClass('invisible');
                // Output the result
                contentDiv.append(data);
            }).always(function () {
                // Mark as finished
                self.data('running', false);
            });
            return false;
        });

        // Setup the update wanted items link
        $('.update-wanted-item-link').on('click', function (event) {
            // Prevent default behaviour
            event.preventDefault();
            // Define variables
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
            // Call the updateUrl
            $.post(updateUrl, updateObj, function (data) {
                if (!jQuery.isEmptyObject(data)) {
                    // Close the dropdown
                    self.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                    // Update wanted item
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

        // Setup the reset wanted items link
        $('.reset-wanted-item-link').on('click', function (event) {
            // Prevent default behaviour
            event.preventDefault();
            // Define variables
            var self = $(this);
            var resetUrl = self.attr('href');
            var updatePanel = self.closest('.panel-body');
            var wantedItem = self.closest('.wanted-item');
            // Call the resetUrl
            $.get(resetUrl, function (data) {
                if (!jQuery.isEmptyObject(data)) {
                    // Close the dropdown
                    self.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                    // Update update panel
                    updatePanel.find('input.update-wanted-item-title').val(data['title']);
                    updatePanel.find('input.update-wanted-item-year').val(data['year']);
                    updatePanel.find('input.update-wanted-item-season').val(data['season']);
                    updatePanel.find('input.update-wanted-item-episode').val(data['episode']);
                    updatePanel.find('input.update-wanted-item-source').val(data['source']);
                    updatePanel.find('input.update-wanted-item-quality').val(data['quality']);
                    updatePanel.find('input.update-wanted-item-codec').val(data['codec']);
                    updatePanel.find('input.update-wanted-item-releasegrp').val(data['releasegrp']);
                    // Update wanted item
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

        // Init vue component
        window.Vue.component('settings', {
            props: {
                type: String, // tvdb or imdb
                indexerId: String,
                title: String,
                settings: Object
            },
            data: function () {
                return {
                    languages: autosubliminal.LANGUAGES,
                    wantedLanguages: []
                };
            },
            computed: {
                posterThumbnailUrl: function () {
                    var self = this;
                    var indexer = '';
                    if (self.type == autosubliminal.EPISODE_TYPE) {
                        indexer = 'tvdb';
                    } else if (self.type == autosubliminal.MOVIE_TYPE) {
                        indexer = 'imdb';
                    }
                    return autosubliminal.getUrl('/artwork/' + indexer + '/poster/thumbnail/');
                }
            },
            watch: {
                // Watch for settings being updated to convert the wanted languages
                settings: function (newSettings) {
                    var self = this;
                    if (newSettings && newSettings.wanted_languages) {
                        self.wantedLanguages = self.getLanguages(self.settings.wanted_languages);
                    }
                }
            },
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
            },
            updated: function () {
                //console.log('updated');
                autosubliminal.vue.enableBootstrapToggle();
            },
            methods: {
                getLanguages: autosubliminal.convertToLanguages,
                getAlpha2Languages: autosubliminal.convertToAlpha2Languages,
                saveSettings: function (event) {
                    event.preventDefault();
                    var self = this;
                    var apiUrl = '';
                    if (self.type == autosubliminal.EPISODE_TYPE) {
                        apiUrl = autosubliminal.getUrl('/api/shows/' + self.indexerId + '/settings');
                    } else if (self.type == autosubliminal.MOVIE_TYPE) {
                        apiUrl = autosubliminal.getUrl('/api/shows/' + self.indexerId + '/settings');
                    }
                    var data = self.settings;
                    data.wanted_languages = self.getAlpha2Languages(self.wantedLanguages);
                    // Save settings
                    $.putJson(apiUrl, data, function () {
                        // Close modal on success
                        $('#settingsModal').modal('hide');
                    });
                }
            }
        });

        // Init vue components
        window.Vue.component('multiselect', window.VueMultiselect.default);

        // Init vue app
        new window.Vue({
            el: '#app',
            data: function () {
                return {
                    type: null,
                    indexerId: null,
                    title: null,
                    settings: null
                }
            },
            methods: {
                openSettingsModal: function (event, type, indexerId, title) {
                    event.preventDefault();
                    var self = this;
                    var apiUrl = '';
                    if (type == autosubliminal.EPISODE_TYPE) {
                        apiUrl = autosubliminal.getUrl('/api/shows/' + indexerId + '/settings');
                    } else if (type == autosubliminal.MOVIE_TYPE) {
                        apiUrl = autosubliminal.getUrl('/api/movies/' + indexerId + '/settings')
                    }
                    // Get settings
                    $.get(apiUrl, function (data) {
                        self.type = type;
                        self.indexerId = indexerId;
                        self.title = title;
                        self.settings = data;
                    });
                    // Open modal
                    $('#settingsModal').modal('show');
                }
            }
        });
    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

}(autosubliminal));
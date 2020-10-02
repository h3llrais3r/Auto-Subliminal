/**
 * Javascript needed on the library movie details page
 */

'use strict';

(function (autosubliminal) {

    'use strict';

    /* ==============
     * Initialization
     * ============== */

    const init = function () {

        // Check if the library scanner is running
        autosubliminal.library.checkScannerRunning();

        // Subscribe to library scanner events
        PubSub.subscribe(autosubliminal.websockets.PROCESS_STARTED, autosubliminal.library.scannerStartedEventSubscriber);
        PubSub.subscribe(autosubliminal.websockets.PROCESS_FINISHED, autosubliminal.library.scannerFinishedEventSubscriber);

        // Init vue component
        window.Vue.component('library-movie-details', {
            data: function () {
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
            created: function () {
                //console.log('created');
            },
            mounted: function () {
                //console.log('mounted');
                const self = this;
                self.getMovieDetails();
            },
            updated: function () {
                //console.log('updated');
                const self = this;
                autosubliminal.keepDropdownsOpen();
                autosubliminal.vue.styleProgressBar(self.movieProgressPercentage);
            },
            computed: {
                moviePosterThumbnailUrl: function () {
                    const self = this;
                    return autosubliminal.getUrl(`/artwork/imdb/poster/thumbnail/${self.movie.imdb_id}`);
                },
                moviePosterFullSizeUrl: function () {
                    const self = this;
                    return autosubliminal.getUrl(`/artwork/imdb/poster/fullsize/${self.movie.imdb_id}`);
                },
                movieProgressPercentage: function () {
                    const self = this;
                    return self.movie.total_subtitles_available / self.movie.total_subtitles_wanted * 100;
                },
                movieProgressText: function () {
                    const self = this;
                    return `${self.movie.total_subtitles_available} of ${self.movie.total_subtitles_wanted}`;
                }
            },
            methods: {
                getMovieDetails: function () {
                    const self = this;
                    const imdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                    // Show loading icon
                    $('.loading').removeClass('hidden');
                    // Get movie details
                    $.get(autosubliminal.getUrl(`/api/movies/${imdbId}`), function (data) {
                        self.movie = data;
                        self.movieSettings = self.movie.settings;
                    }).fail(function (response) {
                        // Remove movie if it does not longer exists
                        if (response.status == 404) {
                            $.deleteJson(autosubliminal.getUrl(`/api/movies/${imdbId}`), null, function () {
                                // Show notification
                                const notification = autosubliminal.types.Notification();
                                notification.message = 'Movie does not exist anymore and has been removed from the library!';
                                notification.type = autosubliminal.notifications.WARNING;
                                notification.sticky = false;
                                autosubliminal.notifications.showNotification(notification);
                                // Redirect to library movies view
                                window.location = autosubliminal.getUrl('/library/movies');
                            });
                        }
                    }).always(function () {
                        // Hide loading icon
                        $('.loading').addClass('hidden');
                    });
                },
                getPlayVideoUrl: autosubliminal.constructPlayVideoUrl,
                getLanguages: autosubliminal.convertToLanguages,
                getLanguageCodes: autosubliminal.convertToLanguageCodes,
                internalLanguagesAvailable: function (file) {
                    let available = false;
                    if ((file.hardcoded_languages && file.hardcoded_languages.length > 0) ||
                        (file.embedded_languages && file.embedded_languages.length > 0)) {
                        available = true;
                    }
                    return available;
                },
                refreshMovieDetails: function (event) {
                    event.preventDefault();
                    const self = this;
                    // Show refresh indication
                    $('.refresh-running').removeClass('hidden');
                    $.putJson(autosubliminal.getUrl(`/api/movies/${self.movie.imdb_id}/refresh`), null, function () {
                        // Get movie details again to get the updates
                        self.getMovieDetails();
                        // Hide refresh indication
                        $('.refresh-running').addClass('hidden');
                    });
                },
                openSettingsModal: function (event) {
                    event.preventDefault();
                    // Set default values
                    const self = this;
                    self.movieSettings = self.movie.settings;
                    self.movieSettingsWantedLanguages = self.getLanguages(self.movie.settings.wanted_languages);
                    // Open modal
                    $('#settingsModal').modal('show');
                },
                openDeleteModal: function (event) {
                    event.preventDefault();
                    // Open modal
                    $('#deleteModal').modal('show');
                },
                openSubtitlesModal: function (fileLocation, fileName, hardcodedLanguages, event) {
                    event.preventDefault();
                    // Set selected video file and clear language selection
                    const self = this;
                    self.selectedFileLocation = fileLocation;
                    self.selectedFileName = fileName;
                    self.selectedHardcodedLanguages = self.getLanguages(hardcodedLanguages);
                    // Open modal
                    $('#subtitlesModal').modal('show');
                },
                saveSettings: function (event) {
                    event.preventDefault();
                    // Get data
                    const self = this;
                    const data = self.movieSettings;
                    data.wanted_languages = self.getLanguageCodes(self.movieSettingsWantedLanguages);
                    $.putJson(autosubliminal.getUrl(`/api/movies/${self.movie.imdb_id}/settings`), data, function () {
                        // Close modal on success
                        $('#settingsModal').modal('hide');
                        // Refresh movie details
                        self.refreshMovieDetails(event);
                    });
                },
                deleteMovie: function (event) {
                    event.preventDefault();
                    // Delete the movie
                    const self = this;
                    $.deleteJson(autosubliminal.getUrl(`/api/movies/${self.movie.imdb_id}`), null, function () {
                        // Close modal on success
                        $('#deleteModal').modal('hide');
                        // Redirect to library movies view
                        window.location = autosubliminal.getUrl('/library/movies');
                    });
                },
                saveHardcodedSubtitles: function (event) {
                    event.preventDefault();
                    // Get data
                    const self = this;
                    const data = {
                        'file_location': self.selectedFileLocation,
                        'file_name': self.selectedFileName,
                        'languages': self.getLanguageCodes(self.selectedHardcodedLanguages)
                    };
                    $.putJson(autosubliminal.getUrl(`/api/movies/${self.movie.imdb_id}/subtitles/hardcoded`), data, function () {
                        // Close modal on success
                        $('#subtitlesModal').modal('hide');
                        // Get movie details again to get the updates
                        self.getMovieDetails();
                    });
                },
                addMoviePathToVideoPaths: function (event) {
                    event.preventDefault();
                    // Get data
                    const self = this;
                    const data = {
                        'videoPath': self.movie.path
                    };
                    $.putJson(autosubliminal.getUrl('/api/settings/general/videoPaths'), data, function () {
                        // Get movie details again to get the updates
                        self.getMovieDetails();
                    });
                }
            }
        });

        // Init vue components
        window.Vue.component('multiselect', window.VueMultiselect.default);
        window.Vue.use(window.VueLazyload);

        // Init vue app
        new window.Vue({
            el: '#app'
        });

    };

    // Wait until settings are loaded to start initialization
    PubSub.subscribe(autosubliminal.settings.LOADED, init);

})(autosubliminal);
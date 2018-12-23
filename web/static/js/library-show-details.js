/**
 * Javascript needed on the library show details page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Init vue component
    Vue.component('library-show-details', {
        data: function () {
            return {
                show: null,
                tvdbUrl: TVDB_URL,
                posterFullSizeUrl: getUrl('/artwork/tvdb/poster/fullsize/'),
                posterThumbnailUrl: getUrl('/artwork/tvdb/poster/thumbnail/')
            }
        },
        created: function () {
            //console.log('created');
        },
        mounted: function () {
            //console.log('mounted');
            this.getShowDetails();
        },
        updated: function () {
            //console.log('updated');
            styleProgressBar();
        },
        methods: {
            getShowDetails: function () {
                var self = this;
                var tvdbId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                $.get('/api/shows/' + tvdbId, function (data) {
                    self.show = data;
                });
            },
            getProcessPercentage: function (show) {
                return show.total_subtitles_available / show.total_subtitles_wanted * 100;
            },
            getNrOfSubtitles: function (files, language) {
                var subtitleCount = 0;
                for (var i = 0; i < files.length; i++) {
                    if (files[i].type == 'subtitle' && files[i].language != null && files[i].language == language) {
                        // A subtitle file can have only 1 language
                        subtitleCount++;
                    } else if (files[i].type == 'video' && files[i].language != null) {
                        // A video file can have multiple embedded languages, so we need to check if it contains it
                        for (var j = 0; files[i].language[j]; j++) {
                            if (files[i].language[j] == language) {
                                subtitleCount++;
                            }
                        }
                    }
                }
                return subtitleCount;
            },
            getNrOfVideos: function (files) {
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

    // Init vue plugins

    // Init vue app
    new Vue({
        el: '#app'
    });
}

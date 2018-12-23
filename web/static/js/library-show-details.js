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
            }
        }
    });

    // Init vue plugins

    // Init vue app
    new Vue({
        el: '#app'
    });
}

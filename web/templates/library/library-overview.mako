<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="container">

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Library overview</span>
                </div>

                <!-- Vue template for library movies -->
                <library-overview inline-template>

                    <div class="panel-body">

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="alert alert-info no-margin library-scanner-running hidden" role="alert">
                                    <i class="fa fa-spinner fa-spin"></i>
                                    Scanning library...
                                </div>
                            </div>
                        </div>

                        <div class="row" v-cloak>

                            <!-- Shows overview -->
                            <div v-if="showsOverview" class="col-xs-12 col-sm-6">
                                <div class="overview-container">
                                    <div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <a href="${autosubliminal.WEBROOT}/library/shows">
                                                    <img src="${autosubliminal.WEBROOT}/images/shows.jpg" class="overview-image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12 col-sm-6">Total shows: {{ showsOverview.total_shows }}</div>
                                            <div class="col-xs-12 col-sm-6 text-right">Total episodes: {{ showsOverview.total_episodes }}</div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12">Total subtitles available:</div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12">
                                                <vue-simple-progress
                                                        size="small"
                                                        :val="getProcessPercentage(showsOverview)"
                                                        :text="showsOverview.total_subtitles_available + ' of ' + showsOverview.total_subtitles_wanted"
                                                        text-position="middle"
                                                        bar-color="transparent">
                                                </vue-simple-progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Movies overview -->
                            <div v-if="showsOverview" class="col-xs-12 col-sm-6">
                                <div class="overview-container">
                                    <div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <a href="${autosubliminal.WEBROOT}/library/movies">
                                                    <img src="${autosubliminal.WEBROOT}/images/movies.jpg" class="overview-image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12">Total movies: {{ moviesOverview.total_movies }}</div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12">Total subtitles available:</div>
                                        </div>
                                        <div class="row overview-data">
                                            <div class="col-xs-12">
                                                <vue-simple-progress
                                                        size="small"
                                                        :val="getProcessPercentage(moviesOverview)"
                                                        :text="moviesOverview.total_subtitles_available + ' of ' + moviesOverview.total_subtitles_wanted"
                                                        text-position="middle"
                                                        bar-color="transparent">
                                                </vue-simple-progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </library-overview>

            </div>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library.js?v=${appUUID}"></script>
    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library-overview.js?v=${appUUID}"></script>

</%block>
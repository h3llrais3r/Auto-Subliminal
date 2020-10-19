<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">
                    <span>Library overview</span>
                    <i class="fa fa-refresh fa-spin fa-fw loading hidden" aria-hidden="true" title="Loading..."></i>
                </span>
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
                                                <img src="${autosubliminal.WEBROOT}/images/shows.jpg" class="overview-image" title="Click to view shows">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12 col-sm-6">
                                            <span>Total shows: {{ showsOverview.totalShows }}</span>
                                            <div class="dropdown dropdown-icon" v-if="showsOverview.failedShows.length > 0">
                                                <a class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true" title="Failed shows!"></i>
                                                </a>
                                                <ul class="dropdown-menu has-tip info-list">
                                                    <li>
                                                        <span class="info-list-label">List of failed shows:</span>
                                                    </li>
                                                    <li>
                                                        <hr>
                                                    </li>
                                                    <li v-for="failedShow in showsOverview.failedShows">
                                                        <span>{{ failedShow }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 text-right">Total episodes: {{ showsOverview.totalEpisodes }}</div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12">Total subtitles available:</div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12">
                                            <vue-simple-progress
                                                    size="small"
                                                    :val="getProgressPercentage(showsOverview)"
                                                    :text="getProgressText(showsOverview)"
                                                    text-position="middle"
                                                    bar-color="transparent">
                                            </vue-simple-progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Movies overview -->
                        <div v-if="moviesOverview" class="col-xs-12 col-sm-6">
                            <div class="overview-container">
                                <div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <a href="${autosubliminal.WEBROOT}/library/movies">
                                                <img src="${autosubliminal.WEBROOT}/images/movies.jpg" class="overview-image" title="Click to view movies">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12">
                                            <span>Total movies: {{ moviesOverview.totalMovies }}</span>
                                            <div class="dropdown dropdown-icon" v-if="moviesOverview.failedMovies.length > 0">
                                                <a class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true" title="Failed movies!"></i>
                                                </a>
                                                <ul class="dropdown-menu has-tip info-list">
                                                    <li>
                                                        <span class="info-list-label">List of failed movies:</span>
                                                    </li>
                                                    <li v-for="failedMovie in moviesOverview.failedMovies">
                                                        <span>{{ failedMovie }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12">Total subtitles available:</div>
                                    </div>
                                    <div class="row overview-data">
                                        <div class="col-xs-12">
                                            <vue-simple-progress
                                                    size="small"
                                                    :val="getProgressPercentage(moviesOverview)"
                                                    :text="getProgressText(moviesOverview)"
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

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('library.js')}"></script>
    <script type="text/javascript" src="${get_web_file('library-overview.js')}"></script>

</%block>
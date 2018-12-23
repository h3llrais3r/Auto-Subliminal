<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Show details</span>
            </div>

            <!-- Vue template for library show details -->
            <library-show-details inline-template>

                <div class="panel-body">

                    <div v-cloak v-if="show">

                        <div class="details-container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="details-poster-container">
                                        <a :href="posterFullSizeUrl + show.tvdb_id" target="_blank">
                                            <img class="details-poster-image" :src="posterThumbnailUrl + show.tvdb_id">
                                        </a>
                                    </div>
                                    <div class="details-info-container">
                                        <div class="col-xs-12 details-info-title">
                                            <span>{{ show.title + ' (' + show.year + ')' }}</span>
                                            <span>
                                                <a :href="tvdbUrl + show.tvdb_id" target="_blank">
                                                    <i class="fa fa-television" aria-hidden="true" title="Click to visit Tvdb"></i>
                                                </a>
                                            </span>
                                            <hr>
                                        </div>
                                        <div class="col-xs-12">{{ show.overview }}</div>
                                        <div class="col-xs-12">
                                            <table class="details-info-summary">
                                                <tr>
                                                    <td>Location:</td>
                                                    <td class="wrapped">{{ show.path }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Wanted languages:</td>
                                                    <td>
                                                        <span v-for="language in show.wanted_languages" class="language-badge">{{ language }}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <hr>
                            </div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="details-files-container">
                                        <div class="details-files-title">
                                            <div>Files</div>
                                            <div class="details-files-progress">
                                                <vue-simple-progress
                                                        size="medium"
                                                        :val="getProcessPercentage(show)"
                                                        :text="show.total_subtitles_available + ' of ' + show.total_subtitles_wanted"
                                                        text-position="middle"
                                                        bar-color="transparent">
                                                </vue-simple-progress>
                                            </div>
                                        </div>
                                        <hr>
                                        <table v-for="file in show.files" class="details-files-overview">
                                            <tr>
                                                <td colspan="2">
                                                    <span class="details-files-location">{{ file.location_name }}</span>
                                                    <span class="dropdown">
                                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                        </a>
                                                        <ul class="dropdown-menu has-tip info-list">
                                                            <li>{{ file.location_path }}</li>
                                                        </ul>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr v-for="f in file.location_files">
                                                <td class="wrapped">{{ f.filename }}</td>
                                                <td class="pull-right file-type-badge">{{ f.type }}</td>
                                                <td class="pull-right language-badge" v-if="f.language">{{ f.language }}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </library-show-details>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library-show-details.js?v=${appUUID}"></script>

</%block>
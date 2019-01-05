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

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="alert alert-info library-scanner-running hidden" role="alert">
                                <i class="fa fa-spinner fa-spin"></i>
                                Scanning library...
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="alert alert-info refresh-running hidden" role="alert">
                                <i class="fa fa-spinner fa-spin"></i>
                                Refreshing show...
                            </div>
                        </div>
                    </div>

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
                                                <a href="#" @click="openSettingsModal($event)">
                                                    <i class="fa fa-wrench" aria-hidden="true" title="Click to edit settings"></i>
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
                                                        <span v-for="language in show.settings.wanted_languages" class="language-badge">{{ language }}</span>
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
                                                        :val="showProgressPercentage"
                                                        :text="show.total_subtitles_available + ' of ' + show.total_subtitles_wanted"
                                                        text-position="middle"
                                                        bar-color="transparent">
                                                </vue-simple-progress>
                                            </div>
                                        </div>
                                        <hr>
                                        <table v-for="file in show.files" class="table table-condensed table-striped table-no-column-borders table-no-sort">
                                            <thead>
                                            <tr>
                                                <th colspan="2">
                                                    <table class="details-files-season">
                                                        <tr>
                                                            <td>
                                                                <span>{{ file.season_name }}</span>
                                                                <span class="dropdown">
                                                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                                    </a>
                                                                    <ul class="dropdown-menu has-tip info-list">
                                                                        <li>{{ file.season_path }}</li>
                                                                    </ul>
                                                                </span>
                                                            </td>
                                                            <td class="text-right">
                                                                <span v-for="language in show.settings.wanted_languages" class="btn btn-sm btn-static">
                                                                    {{ language }}
                                                                    <span class="badge">{{ getNrOfSubtitles(file.season_files, language) }}</span>
                                                                </span>
                                                                <span class="btn btn-sm btn-static">
                                                                    video
                                                                    <span class="badge">{{ getNrOfVideos(file.season_files) }}</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="f in file.season_files">
                                                <td>
                                                    <span class="details-files-file">{{ f.filename }}</span>
                                                    <a v-if="f.type == 'video'" href="#" @click="openSubtitlesModal(file.season_path, f.filename, f.hardcoded_languages, f.tvdb_id, $event)">
                                                        <i class="fa fa-wrench" aria-hidden="true" title="Click to save hardcoded subtitle languages"></i>
                                                    </a>
                                                    <a v-if="f.type == 'video'" :href="getPlayVideoUrl(file.season_path, f.filename)">
                                                        <i class="fa fa-play-circle-o" aria-hidden="true" title="Click to play video"></i>
                                                    </a>
                                                </td>
                                                <td v-if="f.type == 'video'" class="text-right">
                                                    <!-- language is an array in case of video type -->
                                                    <span class="language-badge right-aligned" v-if="f.hardcoded_languages" v-for="language in f.hardcoded_languages">{{ language }}</span>
                                                    <span class="language-badge right-aligned" v-if="f.embedded_languages" v-for="language in f.embedded_languages">{{ language }}</span>
                                                    <span class="language-badge right-aligned" v-if="internalLanguagesAvailable(f)">internal</span>
                                                    <span class="file-type-badge right-aligned">{{ f.type }}</span>
                                                </td>
                                                <td v-if="f.type == 'subtitle'" class="text-right">
                                                    <!-- language is a string in case of subtitle type -->
                                                    <span class="language-badge right-aligned" v-if="f.language">{{ f.language }}</span>
                                                    <span class="file-type-badge right-aligned">{{ f.type }}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <%include file="/library/inc_library-show-settings-modal.mako"/>
                    <%include file="/library/inc_library-subtitles-modal.mako"/>

                </div>

            </library-show-details>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library.js?v=${appUUID}"></script>
    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library-show-details.js?v=${appUUID}"></script>

</%block>
<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Movie details</span>
            </div>

            <!-- Vue template for library movie details -->
            <library-movie-details inline-template>

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
                                Refreshing movie...
                            </div>
                        </div>
                    </div>

                    <div v-cloak v-if="movie">

                        <div class="details-container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="details-poster-container">
                                        <a :href="posterFullSizeUrl + movie.imdb_id" target="_blank">
                                            <img class="details-poster-image" :src="posterThumbnailUrl + movie.imdb_id" @error="setPosterPlaceholderUrl($event)">
                                        </a>
                                    </div>
                                    <div class="details-info-container">
                                        <div class="col-xs-12 details-info-title">
                                            <span>{{ movie.title + ' (' + movie.year + ')' }}</span>
                                            <span>
                                                <a :href="imdbUrl + movie.imdb_id" target="_blank">
                                                    <i class="fa fa-imdb" aria-hidden="true" title="Click to visit Imdb"></i>
                                                </a>
                                                <a href="#" @click="openSettingsModal($event)">
                                                    <i class="fa fa-wrench" aria-hidden="true" title="Click to edit movie settings"></i>
                                                </a>
                                                <a href="#" @click="refreshMovieDetails($event)">
                                                    <i class="fa fa-repeat" aria-hidden="true" title="Click to refresh movie details"></i>
                                                </a>
                                                <a href="#" @click="openDeleteModal($event)">
                                                    <i class="fa fa-trash" aria-hidden="true" title="Click to delete movie from the database"></i>
                                                </a>
                                            </span>
                                            <hr>
                                        </div>
                                        <div class="col-xs-12">{{ movie.overview }}</div>
                                        <div class="col-xs-12">
                                            <table class="details-info-summary">
                                                <tr>
                                                    <td>Location:</td>
                                                    <td class="wrapped">{{ movie.path }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Wanted languages:</td>
                                                    <td>
                                                        <span v-for="language in movie.settings.wanted_languages" class="language-badge">{{ language }}</span>
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
                                                        :val="movieProgressPercentage"
                                                        :text="movieProgressText"
                                                        text-position="middle"
                                                        bar-color="transparent">
                                                </vue-simple-progress>
                                            </div>
                                        </div>
                                        <hr>
                                        <table class="table table-condensed table-striped table-no-column-borders">
                                            <tr v-for="f in movie.files">
                                                <td class="wrapped">
                                                    <span class="details-files-file">{{ f.filename }}</span>
                                                    <a v-if="f.type == 'video'" href="#" @click="openSubtitlesModal(movie.path, f.filename, f.hardcoded_languages, $event)">
                                                        <i class="fa fa-wrench" aria-hidden="true" title="Click to save hardcoded subtitle languages"></i>
                                                    </a>
                                                    <a v-if="f.type == 'video'" :href="getPlayVideoUrl(movie.path, f.filename)">
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
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <%include file="/library/inc_library-movie-settings-modal.mako"/>
                    <%include file="/library/inc_library-movie-delete-modal.mako"/>
                    <%include file="/library/inc_library-subtitles-modal.mako"/>

                </div>

            </library-movie-details>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library.js?v=${appUUID}"></script>
    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library-movie-details.js?v=${appUUID}"></script>

</%block>
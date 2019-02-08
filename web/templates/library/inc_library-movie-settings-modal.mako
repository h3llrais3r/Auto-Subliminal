<div id="settingsModal" class="modal fade" tabindex="-1">

    <div class="modal-dialog settings-modal">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title">Movie settings</h3>
            </div>

            <div v-if="movie && movieSettings" class="modal-body">
                <div class="settings-container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="settings-poster-container">
                                <img class="settings-poster-image" :src="posterThumbnailUrl + movie.imdb_id" @error="setPosterPlaceholderUrl($event)">
                            </div>
                            <div class="settings-info-container">
                                <div class="col-xs-12 settings-info-title">
                                    <span>{{ movie.title + ' (' + movie.year + ')' }}</span>
                                    <hr>
                                </div>
                                <div class="col-xs-12 settings-info-settings">
                                    <div class="vertical-center">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4">
                                                <label>Wanted languages
                                                    <span class="dropdown">
                                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                        </a>
                                                        <ul class="dropdown-menu has-tip info-list">
                                                            <li>
                                                                The list of wanted subtitle languages for the movie.<br>
                                                                This replaces the globally configured languages, but only for this movie.
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-xs-12 col-sm-8">
                                                <multiselect v-model="movieSettingsWantedLanguages"
                                                             :options="languages"
                                                             :multiple="true"
                                                             :taggable="true"
                                                             :show-labels="false"
                                                             placeholder="Select a language"
                                                             tag-placeholder=""
                                                             label="name"
                                                             track-by="alpha2">
                                                </multiselect>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10">
                                                <label>Refine video
                                                    <span class="dropdown">
                                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                        </a>
                                                        <ul class="dropdown-menu has-tip info-list">
                                                            <li>
                                                                When enabled, subliminal will enable 'refiners' to enrich the video meta-data before searching for subtitles.<br>
                                                                This can result in a higher score matching and thus a higher automatic subtitle download.
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="refineSwitch" v-model="movieSettings.refine">
                                                    <label for="refineSwitch" class="label-primary"></label>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10">
                                                <label>Prefer hearing impaired subs
                                                    <span class="dropdown">
                                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                        </a>
                                                        <ul class="dropdown-menu has-tip info-list">
                                                            <li>When enabled, 'hearing impaired' subtitles will be preferred over 'regular' subtitles.</li>
                                                        </ul>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="hearingImpairedSwitch" v-model="movieSettings.hearing_impaired">
                                                    <label for="hearingImpairedSwitch" class="label-primary"></label>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10">
                                                <label>Save subtitles in utf-8 encoding
                                                    <span class="dropdown">
                                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                        </a>
                                                        <ul class="dropdown-menu has-tip info-list">
                                                            <li>
                                                                When enabled, all subtitles will be saved in utf-8 encoding.<br>
                                                                When disabled, the original encoding of the subtitle is used.
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="utf8EncodingSwitch" v-model="movieSettings.utf8_encoding">
                                                    <label for="utf8EncodingSwitch" class="label-primary"></label>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-default" @click="saveSettings($event)">Save</button>
            </div>

        </div>

    </div>

</div>

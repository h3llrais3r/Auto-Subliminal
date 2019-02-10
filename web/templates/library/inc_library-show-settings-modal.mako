<div id="settingsModal" class="modal fade" tabindex="-1">

    <div class="modal-dialog settings-modal">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title">Show settings</h3>
            </div>

            <div v-if="show && showSettings" class="modal-body">
                <div class="settings-container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="settings-poster-container">
                                <img class="settings-poster-image" :src="posterThumbnailUrl + show.tvdb_id" @error="setPosterPlaceholderUrl($event)">
                            </div>
                            <div class="settings-info-container">
                                <div class="col-xs-12 settings-info-title">
                                    <span>{{ show.title + ' (' + show.year + ')' }}</span>
                                    <hr>
                                </div>
                                <div class="col-xs-12 settings-info-settings">
                                    <div class="vertical-center">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4">
                                                <label>Wanted languages</label>
                                                <div class="dropdown dropdown-icon">
                                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                    </a>
                                                    <ul class="dropdown-menu has-tip info-list">
                                                        <li>
                                                            The list of wanted subtitle languages for the show.<br>
                                                            This replaces the globally configured languages, but only for this show.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-8">
                                                <multiselect v-model="showSettingsWantedLanguages"
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
                                                <label>Refine video</label>
                                                <div class="dropdown dropdown-icon">
                                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                    </a>
                                                    <ul class="dropdown-menu has-tip info-list">
                                                        <li>
                                                            When enabled, subliminal will enable 'refiners' to enrich the video meta-data before searching for subtitles.<br>
                                                            This can result in a higher score matching and thus a higher automatic subtitle download.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="refineSwitch" v-model="showSettings.refine">
                                                    <label for="refineSwitch" class="label-primary"></label>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10">
                                                <label>Prefer hearing impaired subs</label>
                                                <div class="dropdown dropdown-icon">
                                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                    </a>
                                                    <ul class="dropdown-menu has-tip info-list">
                                                        <li>When enabled, 'hearing impaired' subtitles will be preferred over 'regular' subtitles.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="hearingImpairedSwitch" v-model="showSettings.hearing_impaired">
                                                    <label for="hearingImpairedSwitch" class="label-primary"></label>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10">
                                                <label>Save subtitles in utf-8 encoding</label>
                                                <div class="dropdown dropdown-icon">
                                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                                    </a>
                                                    <ul class="dropdown-menu has-tip info-list">
                                                        <li>
                                                            When enabled, all subtitles will be saved in utf-8 encoding.<br>
                                                            When disabled, the original encoding of the subtitle is used.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-2">
                                                <label class="switch-checkbox pull-right">
                                                    <input type="checkbox" id="utf8EncodingSwitch" v-model="showSettings.utf8_encoding">
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
                <button type="button" class="btn btn-primary" @click="saveSettings($event)">Save</button>
            </div>

        </div>

    </div>

</div>

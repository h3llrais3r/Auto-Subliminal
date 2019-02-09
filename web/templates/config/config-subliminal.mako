<%inherit file="/layout/page.mako"/>

<%!
    import subliminal

    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Subliminal settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">General</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label>Show MinMatchScore
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The items that must match before a show subtitle is downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="hidden" name="showmmsdefault" value="1">
                                <div class="switch-checkbox-inline-row">
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Source
                                        </label>
                                        % if autosubliminal.SHOWMATCHSOURCE:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmssource" name="showmmssource" checked>
                                                <label for="showmmssource" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmssource" name="showmmssource">
                                                <label for="showmmssource" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Quality
                                        </label>
                                        % if autosubliminal.SHOWMATCHQUALITY:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmsquality" name="showmmsquality" checked>
                                                <label for="showmmsquality" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmsquality" name="showmmsquality">
                                                <label for="showmmsquality" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Codec
                                        </label>
                                        % if autosubliminal.SHOWMATCHCODEC:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmscodec" name="showmmscodec" checked>
                                                <label for="showmmscodec" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmscodec" name="showmmscodec">
                                                <label for="showmmscodec" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Group
                                        </label>
                                        % if autosubliminal.SHOWMATCHRELEASEGROUP:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmsreleasegroup" name="showmmsreleasegroup" checked>
                                                <label for="showmmsreleasegroup" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="showmmsreleasegroup" name="showmmsreleasegroup">
                                                <label for="showmmsreleasegroup" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label>Movie MinMatchScore
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The items that must match before a movie subtitle is downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="hidden" name="moviemmsdefault" value="1">
                                <div class="switch-checkbox-inline-row">
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Source
                                        </label>
                                        % if autosubliminal.MOVIEMATCHSOURCE:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmssource" name="moviemmssource" checked>
                                                <label for="moviemmssource" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmssource" name="moviemmssource">
                                                <label for="moviemmssource" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Quality
                                        </label>
                                        % if autosubliminal.MOVIEMATCHQUALITY:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmsquality" name="moviemmsquality" checked>
                                                <label for="moviemmsquality" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmsquality" name="moviemmsquality">
                                                <label for="moviemmsquality" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Codec
                                        </label>
                                        % if autosubliminal.MOVIEMATCHCODEC:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmscodec" name="moviemmscodec" checked>
                                                <label for="moviemmscodec" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmscodec" name="moviemmscodec">
                                                <label for="moviemmscodec" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                    <div class="switch-checkbox-inline col-xs-3">
                                        <label class="switch-checkbox-inline-label">
                                            Group
                                        </label>
                                        % if autosubliminal.MOVIEMATCHRELEASEGROUP:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmsreleasegroup" name="moviemmsreleasegroup" checked>
                                                <label for="moviemmsreleasegroup" class="label-primary"></label>
                                            </span>
                                        % else:
                                            <span class="switch-checkbox">
                                                <input type="checkbox" id="moviemmsreleasegroup" name="moviemmsreleasegroup">
                                                <label for="moviemmsreleasegroup" class="label-primary"></label>
                                            </span>
                                        % endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="subliminalproviders">Subliminal providers
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The subliminal providers that must be used for searching and downloading subtitles.<br>
                                                Multiple providers can be selected.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <% providers = sorted(autosubliminal.SUBLIMINALPROVIDERMANAGER.names()) %>
                                <select multiple="multiple" id="subliminalproviders" name="subliminalproviders" size="${len(providers)}" class="form-control input-sm">
                                    % for provider in providers:
                                        % if provider in autosubliminal.SUBLIMINALPROVIDERS:
                                            <option selected="selected" value="${provider}">${provider}</option>
                                        % else:
                                            <option value="${provider}">${provider}</option>
                                        % endif
                                    % endfor
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="subtitleutf8encoding">Save subtitles in utf-8 encoding
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
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <select id="subtitleutf8encoding" name="subtitleutf8encoding" class="form-control input-sm">
                                    % if autosubliminal.SUBTITLEUTF8ENCODING:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="manualrefinevideo">Refine video manually
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                When enabled, you will be able to edit the video meta-data before searching for subtitles.<br>
                                                An edit icon will appear next to the show/movie name to edit the show/movie details.<br>
                                                This only affects a manual search temporarily until the next disk scan.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <select id="manualrefinevideo" name="manualrefinevideo" class="form-control input-sm">
                                    % if autosubliminal.MANUALREFINEVIDEO:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="refinevideo">Refine video
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
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <select id="refinevideo" name="refinevideo" class="form-control input-sm">
                                    % if autosubliminal.REFINEVIDEO:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="preferhearingimpaired">Prefer hearing impaired subs
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, 'hearing impaired' subtitles will be preferred over 'regular' subtitles.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <select id="preferhearingimpaired" name="preferhearingimpaired" class="form-control input-sm">
                                    % if autosubliminal.PREFERHEARINGIMPAIRED:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Addic7ed provider</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-warning">WARNING: Password is stored in plaintext!</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="addic7edusername">Username
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The username for your Addic7ed account.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.ADDIC7EDUSERNAME}" id="addic7edusername" name="addic7edusername" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="addic7edpassword">Password
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The password for your Addic7ed account.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <input type="password" value="${autosubliminal.ADDIC7EDPASSWORD}" id="addic7edpassword" name="addic7edpassword" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">OpenSubtitles provider</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-warning">WARNING: Password is stored in plaintext!</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="opensubtitlesusername">Username
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The username for your OpenSubtitles account.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.OPENSUBTITLESUSERNAME}" id="opensubtitlesusername" name="opensubtitlesusername" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="opensubtitlespassword">Password
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The password for your OpenSubtitles account.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <input type="password" value="${autosubliminal.OPENSUBTITLESPASSWORD}" id="opensubtitlespassword" name="opensubtitlespassword" class="form-control input-sm">
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/subliminal/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>
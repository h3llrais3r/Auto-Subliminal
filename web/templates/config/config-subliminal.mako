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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <input type="hidden" name="showmmsdefault" value="1">
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.SHOWMATCHSOURCE:
                                        <input type="checkbox" name="showmmssource" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="showmmssource" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Source
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.SHOWMATCHQUALITY:
                                        <input type="checkbox" name="showmmsquality" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="showmmsquality" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Quality
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.SHOWMATCHCODEC:
                                        <input type="checkbox" name="showmmscodec" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="showmmscodec" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Codec
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.SHOWMATCHRELEASEGROUP:
                                        <input type="checkbox" name="showmmsreleasegroup" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="showmmsreleasegroup" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Group
                                </label>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <input type="hidden" name="moviemmsdefault" value="1">
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.MOVIEMATCHSOURCE:
                                        <input type="checkbox" name="moviemmssource" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="moviemmssource" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Source
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.MOVIEMATCHQUALITY:
                                        <input type="checkbox" name="moviemmsquality" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="moviemmsquality" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Quality
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.MOVIEMATCHCODEC:
                                        <input type="checkbox" name="moviemmscodec" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="moviemmscodec" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Codec
                                </label>
                                <label class="checkbox-inline aligned">
                                    % if autosubliminal.MOVIEMATCHRELEASEGROUP:
                                        <input type="checkbox" name="moviemmsreleasegroup" data-toggle="toggle" data-size="mini" checked>
                                    % else:
                                        <input type="checkbox" name="moviemmsreleasegroup" data-toggle="toggle" data-size="mini">
                                    % endif
                                    Group
                                </label>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <% providers = sorted(autosubliminal.SUBLIMINALPROVIDERMANAGER.names()) %>
                                <select multiple="mutiple" id="subliminalproviders" name="subliminalproviders" size="${len(providers)}" class="form-control input-sm">
                                    % for provider in providers:
                                        % if provider in autosubliminal.SUBLIMINALPROVIDERLIST:
                                            <option selected="selected" value="${provider}">${provider}</option>
                                        % else:
                                            <option value="${provider}">${provider}</option>
                                        % endif
                                    % endfor
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.ADDIC7EDUSERNAME}" id="addic7edusername" name="addic7edusername" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
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
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.OPENSUBTITLESUSERNAME}" id="opensubtitlesusername" name="opensubtitlesusername" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
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
                            <span class="col-xs-8 col-md-6">
                                <input type="password" value="${autosubliminal.OPENSUBTITLESPASSWORD}" id="opensubtitlespassword" name="opensubtitlespassword" class="form-control input-sm">
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <a href="${autosubliminal.WEBROOT}/config/subliminal/save" class="btn btn-sm btn-default btn-save">Save</a>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js"></script>

</%block>
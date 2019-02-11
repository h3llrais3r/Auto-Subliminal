<%inherit file="/layout/page.mako"/>

<%!
    import babelfish

    import autosubliminal
    from autosubliminal.util.common import display_list_multi_line, display_list_single_line

    SUPPORTED_TIMESTAMP_FORMATS = ['%Y-%m-%d %H:%M:%S', '%m-%d-%Y %H:%M:%S', '%d-%m-%Y %H:%M:%S']
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">General settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="videopaths">Video paths</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The folders where your videos are located.<br>
                                            Use a new line for each location.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="videopaths" name="videopaths" class="form-control input-sm">${display_list_multi_line(autosubliminal.VIDEOPATHS)}</textarea>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="defaultlanguage">Default language</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The default subtitle language (alpha2 code).</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="defaultlanguage" name="defaultlanguage" class="form-control input-sm">
                                    % for language in babelfish.LANGUAGE_MATRIX:
                                        % if language.alpha2:
                                            <% name = (language.name[:language.name.find('(') if language.name.find('(') != -1 else len(language.name)]) + ' (' + language.alpha2 + ')' %>
                                            % if language.alpha2 == autosubliminal.DEFAULTLANGUAGE:
                                                <option value="${language.alpha2}" selected="selected">${name}</option>
                                            % else:
                                                <option value="${language.alpha2}">${name}</option>
                                            % endif
                                        % endif
                                    % endfor
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="defaultlanguagesuffix">Use language suffix</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>When enabled, the default subtitle will be extended with the alpha2 code of the language (f.e. showname.en.srt).</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="defaultlanguagesuffix" name="defaultlanguagesuffix" class="form-control input-sm">
                                    % if autosubliminal.DEFAULTLANGUAGESUFFIX:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="additionallanguages">Additional languages</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Comma separated list with the additional subtitle languages in alpha2 format.<br>
                                            If additional languages are provided, subtitles will be extended with the alpha2 code of the language (f.e. showname.en.srt).
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="additionallanguages" name="additionallanguages" value="${display_list_single_line(autosubliminal.ADDITIONALLANGUAGES)}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="manualsearchwithscoring">Manual search with scoring</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, only subtitles matching the minimum default score will be returned.<br>
                                            When disabled, all found subtitles will be returned.<br>
                                            REMARK: Disable it at your own risk because it might return even unrelated subtitles!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="manualsearchwithscoring" name="manualsearchwithscoring" class="form-control input-sm">
                                    % if autosubliminal.MANUALSEARCHWITHSCORING:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="scandiskinterval">Disk scan interval</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Disk scan interval of the ScanDisk thread. It scans the disk for missing subtitle files.<br>
                                            Time is in hours. Default value is 1 hour.<br>
                                            Cannot be set lower then 1 hour.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="scandiskinterval" name="scandiskinterval" value="${autosubliminal.SCANDISKINTERVAL}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="checksubinterval">Subtitle check interval</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Subtitle check interval of the CheckSub thread. It checks if there is a match on the configured subliminal providers.<br>
                                            Time is in hours. Default value is 24 hours.<br>
                                            Cannot be set lower then 6 hours.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="checksubinterval" name="checksubinterval" value="${autosubliminal.CHECKSUBINTERVAL}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="checksubdeadline">Subtitle check deadline</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Subtitle check deadline in weeks for checking subtitles on daily basis.<br>
                                            After this deadline, the daily search is replaced by a search every X days, defined by the parameter below.<br>
                                            Default value is 4 weeks. Cannot be set lower than 1 week.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="checksubdeadline" name="checksubdeadline" value="${autosubliminal.CHECKSUBDEADLINE}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="checksubdelta">Subtitle check delta</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Subtitle check delta in days for checking subtitles after deadline.<br>
                                            After the deadline (parameter above) is passed, a subtitle is search every X days, defined by this parameter.<br>
                                            Default value is 7 days (1 week). Cannot be set lower than 1 day.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="checksubdelta" name="checksubdelta" value="${autosubliminal.CHECKSUBDELTA}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="checkversioninterval">Version check interval</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            Version check interval of the VersionCheck thread. It checks if there is a new version available.<br>
                                            Time is in hours. Default value is 12 hours.<br>
                                            Cannot be set lower then 1 hour.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="checkversioninterval" name="checkversioninterval" value="${autosubliminal.CHECKVERSIONINTERVAL}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="checkversionautoupdate">Version check auto update</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the version check will also try to auto update the system.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="checkversionautoupdate" name="checkversionautoupdate" class="form-control input-sm">
                                    % if autosubliminal.CHECKVERSIONAUTOUPDATE:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="scanembeddedsubs">Scan for embedded subtitles</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the video files will be scanned for embedded subtitles.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="scanembeddedsubs" name="scanembeddedsubs" class="form-control input-sm">
                                    % if autosubliminal.SCANEMBEDDEDSUBS:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="scanhardcodedsubs">Scan for hardcoded subtitles</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the system will scan for hardcoded subtitles.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="scanhardcodedsubs" name="scanhardcodedsubs" class="form-control input-sm">
                                    % if autosubliminal.SCANHARDCODEDSUBS:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="skiphiddendirs">Skip hidden directories</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, also hidden directories (directories that start with a dot, f.e. .config) are scanned.<br>
                                            Doesn't work for Windows style hidden directories.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="skiphiddendirs" name="skiphiddendirs" class="form-control input-sm">
                                    % if autosubliminal.SKIPHIDDENDIRS:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="detectinvalidsublanguage">Detect invalid subtitle language</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the language of a subtitle, without a language suffix, will be detected.<br>
                                            If the language does not match the default language, the subtitle will be deleted from the system in order to search a new one.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="detectinvalidsublanguage" name="detectinvalidsublanguage" class="form-control input-sm">
                                    % if autosubliminal.DETECTINVALIDSUBLANGUAGE:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="detectedlanguageprobability">Language detection probability</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The minimum required probability (value between 0 and 1) for the invalid language detection functionality.<br>
                                            The probability must be at least this value before the language is accepted as the detected language of the subtitle.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="detectedlanguageprobability" name="detectedlanguageprobability" value="${autosubliminal.DETECTEDLANGUAGEPROBABILITY}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="minvideofilesize">Min video file size</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The mininum file size in MB that a video must be before it's including in the scanning.<br>
                                            Files with a size lower than this value will be ignored in the scanning.<br>
                                            Use 0 for disable this limit.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="minvideofilesize" name="minvideofilesize" value="${autosubliminal.MINVIDEOFILESIZE}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="maxdbresults">Max db results</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The maximum number of results returned from the database.<br>
                                            Use 0 for returning all the results.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" id="maxdbresults" name="maxdbresults" value="${autosubliminal.MAXDBRESULTS}" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="timestampformat">Timestamp format</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The format in which timestamps are displayed.<br>
                                            See Python <i>strftime()</i> for more details.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="timestampformat" name="timestampformat" class="form-control input-sm">
                                    % for format in SUPPORTED_TIMESTAMP_FORMATS:
                                        <% name = (language.name[:language.name.find('(') if language.name.find('(') != -1 else len(language.name)]) + ' (' + language.alpha2 + ')' %>
                                        % if format == autosubliminal.TIMESTAMPFORMAT:
                                            <option value="${format}" selected="selected">${format}</option>
                                        % else:
                                            <option value="${format}">${format}</option>
                                        % endif
                                    % endfor
                                </select>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/general/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>

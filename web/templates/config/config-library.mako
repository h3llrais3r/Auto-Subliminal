<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import display_list_multi_line
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Library settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="librarymode">Enable library mode
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                When enabled, a libraryscanner thread will be enabled to scan your complete library.<br>
                                                This will enable a new menu link 'Library' from which you can view your complete library.<br>
                                                ATTENTION: this may cause a very long disk scan if your library is very big!
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="librarymode" name="librarymode" class="form-control input-sm">
                                    % if autosubliminal.LIBRARYMODE:
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
                                <label for="librarypaths">Library paths
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The folders where your show/movie libraries are located.<br>
                                                Use a new line for each location.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <textarea id="librarypaths" name="librarypaths" class="form-control input-sm">${display_list_multi_line(autosubliminal.LIBRARYPATHS)}</textarea>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="scanlibraryinterval">Disk library interval
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                Library scan interval of the ScanLibrary thread. It scans the complete library for generating an overview.<br>
                                                Time is in seconds. Default value is 86400 seconds.<br>
                                                Cannot not be set lower then 86400.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" id="scanlibraryinterval" name="scanlibraryinterval" value="${autosubliminal.SCANLIBRARYINTERVAL}" class="form-control input-sm">
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <a href="${autosubliminal.WEBROOT}/config/library/save" class="btn btn-sm btn-default btn-save">Save</a>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>

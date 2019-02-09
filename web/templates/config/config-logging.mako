<%inherit file="/layout/page.mako"/>

<%!
    import logging

    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Logging settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="logfile">Logfile name
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The location and the name of the logfile.<br>
                                                When not set, AutoSubliminal.log will be used.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.LOGFILE}" id="logfile" name="logfile" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="loglevel">Log level
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The level of logging in the logfile.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="loglevel" name="loglevel" class="form-control input-sm">
                                    % if logging.getLevelName(autosubliminal.LOGLEVEL).lower() == 'info':
                                        <option value=${logging.INFO} selected="selected">Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVEL).lower() == 'critical':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL} selected="selected">Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVEL).lower() == 'warning':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING} selected="selected">Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVEL).lower() == 'error':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR} selected="selected">Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVEL).lower() == 'debug':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG} selected="selected">Debug</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="lognum">Max number of backup log files
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The maximum number of backup log files.<br>
                                                Use 0 for no backup log files.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.LOGNUM}" id="lognum" name="lognum" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="logsize">Max log size
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The maximum size of the log file(s) in MB.<br>
                                                Use 0 for unlimited size.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.LOGSIZE}" id="logsize" name="logsize" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="loghttpaccess">Log HTTP access
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, also http access calls will be logged.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="loghttpaccess" name="loghttpaccess" class="form-control input-sm">
                                    % if autosubliminal.LOGHTTPACCESS:
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
                                <label for="logexternallibs">Log external libs
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                When enabled, also external libs will be logged.<br>
                                                This only works in combination with the 'Log detailed format' option.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="logexternallibs" name="logexternallibs" class="form-control input-sm">
                                    % if autosubliminal.LOGEXTERNALLIBS:
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
                                <label for="logdetailedformat">Log detailed format
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, the detailed log format will be used.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="logdetailedformat" name="logdetailedformat" class="form-control input-sm">
                                    % if autosubliminal.LOGDETAILEDFORMAT:
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
                                <label for="logreversed">Log reversed
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, the log output will be shown in reversed order (newest at the top) in the application.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="logreversed" name="logreversed" class="form-control input-sm">
                                    % if autosubliminal.LOGREVERSED:
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
                                <label for="loglevelconsole">Console log level
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The level of logging in the console output.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="loglevelconsole" name="loglevelconsole" class="form-control input-sm">
                                    % if logging.getLevelName(autosubliminal.LOGLEVELCONSOLE).lower() == 'info':
                                        <option value=${logging.INFO} selected="selected">Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVELCONSOLE).lower() == 'critical':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL} selected="selected">Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVELCONSOLE).lower() == 'warning':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING} selected="selected">Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVELCONSOLE).lower() == 'error':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR} selected="selected">Error</option>
                                        <option value=${logging.DEBUG}>Debug</option>
                                    % elif logging.getLevelName(autosubliminal.LOGLEVELCONSOLE).lower() == 'debug':
                                        <option value=${logging.INFO}>Info</option>
                                        <option value=${logging.CRITICAL}>Critical</option>
                                        <option value=${logging.WARNING}>Warning</option>
                                        <option value=${logging.ERROR}>Error</option>
                                        <option value=${logging.DEBUG} selected="selected">Debug</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <a href="${autosubliminal.WEBROOT}/config/logging/save" class="btn btn-sm btn-primary btn-save">Save</a>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>
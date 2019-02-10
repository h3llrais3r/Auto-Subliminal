<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Webserver settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="webserverip">Webserver IP</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The webserver IP. <br>
                                            To allow hosts to connect to any IP number, use '0.0.0.0'.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.WEBSERVERIP}" id="webserverip" name="webserverip" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="webserverport">Webserver port</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The webserver port.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.WEBSERVERPORT}" id="webserverport" name="webserverport" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="webroot">Webserver webroot</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The webserver webroot for reverse proxying.<br>
                                            Example: to proxy it to 'http://localhost/autosubliminal/' the webroot needs to be '/autosubliminal'.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.WEBROOT}" id="webroot" name="webroot" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="username">Username</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The username for the webserver authentication.<br>
                                            If a username and password are set, the webserver requires authentication.<br>
                                            Otherwise no authentication is set or required.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.USERNAME}" id="username" name="username" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="password">Password</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The password for the webserver authentication.<br>
                                            If a username and password are set, the webserver requires authentication.<br>
                                            Otherwise no authentication is set or required.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="password" value="${autosubliminal.PASSWORD}" id="password" name="password" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="launchbrowser">Launch browser</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the browser will start every time Auto-Subliminal starts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="launchbrowser" name="launchbrowser" class="form-control input-sm">
                                    % if autosubliminal.LAUNCHBROWSER:
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
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-warning">
                                    ATTENTION: Changing webserver settings will result in no automatic reload!<br>
                                    You'll need to change the url manually in order to reload correctly!
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/webserver/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>

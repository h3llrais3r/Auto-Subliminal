<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">PostProcessing settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">General</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="postprocess">Post-process</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>When enabled, the post processing command(s) will be executed.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="postprocess" name="postprocess" class="form-control input-sm">
                                    % if autosubliminal.POSTPROCESS:
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
                                <label for="postprocessindividual">Individual</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the post processing will be executed after each subtitle download for a video.<br>
                                            If disabled, the post processing will only be executed when all wanted subtitles are downloaded for a video.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="postprocessindividual" name="postprocessindividual" class="form-control input-sm">
                                    % if autosubliminal.POSTPROCESSINDIVIDUAL:
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
                                <label for="postprocessutf8encoding">UTF-8 encoding</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            When enabled, the post processing command(s) and argument(s) will be encoded in UTF-8.<br>
                                            This means that the post processing script will need to decode the argument(s) from UTF-8.<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <select id="postprocessutf8encoding" name="postprocessutf8encoding" class="form-control input-sm">
                                    % if autosubliminal.POSTPROCESSUTF8ENCODING:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Show</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="showpostprocesscmd">Post-process command</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The command to run after downloading a subtitle for a show.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.SHOWPOSTPROCESSCMD}" id="showpostprocesscmd" name="showpostprocesscmd" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="showpostprocesscmdargs">Post-process argument(s)</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The argument(s) (separated by |) to pass to the command above after downloading a subtitle for a show.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.SHOWPOSTPROCESSCMDARGS}" id="showpostprocesscmdargs" name="showpostprocesscmdargs" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Movie</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="moviepostprocesscmd">Post-process command</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The command to run after downloading a subtitle for a movie.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.MOVIEPOSTPROCESSCMD}" id="moviepostprocesscmd" name="moviepostprocesscmd" class="form-control input-sm">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="moviepostprocesscmdargs">Post-process argument(s)</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>The argument(s) (separated by |) to pass to the command above after downloading a subtitle for a movie.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <input type="text" value="${autosubliminal.MOVIEPOSTPROCESSCMDARGS}" id="moviepostprocesscmdargs" name="moviepostprocesscmdargs" class="form-control input-sm">
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/postprocessing/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('config.js')}"></script>

</%block>
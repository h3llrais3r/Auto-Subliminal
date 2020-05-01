<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import display_mapping_dict, get_web_file
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">NameMapping settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-warning">WARNING: Use the namemapping at own risk! Incorrect use of the namemapping may result in subtitles not being found!</span>
                            </div>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Show</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="shownamemapping">Show name mapping</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The local show name mapping to the TVDB ID.<br>
                                            Examples:<br>
                                            Show name = 12345<br>
                                            Show name 2 = 123456<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="shownamemapping" name="shownamemapping" class="form-control input-sm multi-input hidden">${display_mapping_dict(autosubliminal.SHOWNAMEMAPPING)}</textarea>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="addic7edshownamemapping">Addic7ed show name mapping</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The local show name mapping to the Addic7ed ID.<br>
                                            Examples:<br>
                                            Show name = 12345<br>
                                            Show name 2 = 123456<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="addic7edshownamemapping" name="addic7edshownamemapping" class="form-control input-sm multi-input hidden">${display_mapping_dict(autosubliminal.ADDIC7EDSHOWNAMEMAPPING)}</textarea>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="alternativeshownamemapping">Alternative show name mapping</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            List the alternative names of a show to increase subtitle matching.<br>
                                            Examples:<br>
                                            Show name = Show name alternative 1a,Show name alternative 1b<br>
                                            Show name 2 = Show name 2a<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="alternativeshownamemapping" name="alternativeshownamemapping" class="form-control input-sm multi-input hidden">${display_mapping_dict(autosubliminal.ALTERNATIVESHOWNAMEMAPPING)}</textarea>
                            </div>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Movie</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="movienamemapping">Movie name mapping</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            The local movie name mapping to the IMDB ID.<br>
                                            Examples:<br>
                                            Movie title (year) = 12345<br>
                                            Movie title 2 (year) = 123456<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="movienamemapping" name="movienamemapping" class="form-control input-sm multi-input hidden">${display_mapping_dict(autosubliminal.MOVIENAMEMAPPING)}</textarea>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <label for="alternativemovienamemapping">Alternative movie name mapping</label>
                                <div class="dropdown dropdown-icon">
                                    <a class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                    </a>
                                    <ul class="dropdown-menu has-tip info-list">
                                        <li>
                                            List the alternative titles of a movie to increase subtitle matching.<br>
                                            Examples:<br>
                                            Movie title = Movie title alternative 1a,Movie title alternative 1b<br>
                                            Movie title 2 = Movie title 2a<br>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6">
                                <textarea id="alternativemovienamemapping" name="alternativemovienamemapping" class="form-control input-sm multi-input hidden">${display_mapping_dict(autosubliminal.ALTERNATIVEMOVIENAMEMAPPING)}</textarea>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/namemapping/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('config.js')}"></script>

</%block>


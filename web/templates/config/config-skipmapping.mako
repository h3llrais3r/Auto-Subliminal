<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import display_mapping_dict
%>

<%block name="bodyContent">

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">SkipMapping settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Show</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="skipshow">Skip show mapping
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The mapping to skip a show.<br>
                                                Examples:<br>
                                                Serie Name = 00 (this will skip the show 'Serie Name' completely<br>
                                                Another Serie name = 1,5,6 (this will skip the show 'Another Serie Name' season 1, 5 and 6<br>
                                                Show Name = 0,6,7 (this will skip the show 'Show Name' season 0 (specials), 6 and 7.<br>
                                                00 is different then 0, 00 skips a show, 0 skips specials (season 0)
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <textarea rows="5" id="skipshow" name="skipshow" class="form-control input-sm">${display_mapping_dict(autosubliminal.SKIPSHOW)}</textarea>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Movie</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-12 col-sm-4 col-md-3">
                                <label for="skipmovie">Skip movie mapping
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The mapping to skip a movie.<br>
                                                Examples:<br>
                                                Movie title (year) = 00<br>
                                                Movie title 2 (year) = 00<br>
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-12 col-sm-8 col-md-6">
                                <textarea rows="5" id="skipmovie" name="skipmovie" class="form-control input-sm">${display_mapping_dict(autosubliminal.SKIPMOVIE)}</textarea>
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btn-bar">
                <a href="${autosubliminal.WEBROOT}/config/skipmapping/save" class="btn btn-sm btn-primary btn-save">Save</a>
            </div>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>

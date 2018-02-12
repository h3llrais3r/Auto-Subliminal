<%!
    import autosubliminal
    from autosubliminal.db import LastDownloads
    from autosubliminal.utils import convert_timestamp, display_item, display_title
%>

<%block name="bodyContent">

    <% lastdownloads = LastDownloads().get_last_downloads() %>

    <div class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Last downloaded subtitles</span>
            </div>

            <div class="panel-body">

                <div class="form-inline">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 table-filter left">
                            <div class="input-group">
                                <span class="input-group-addon table-filter-label">Video type</span>
                                <select id="lastdownloadstypefilter" class="lastdownloadsfilter form-control input-sm" type="search" data-column="0">
                                    <option value="">All</option>
                                    <option value="episode">Shows</option>
                                    <option value="movie">Movies</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 table-filter right">
                            <div class="input-group">
                                <span class="input-group-addon table-filter-label">Search</span>
                                <input id="lastdownloadssearchfilter" class="lastdownloadsfilter form-control input-sm" type="search" data-column="all">
                                <span class="input-group-addon lastdownloadsfilterreset">
                                    <i class="fa fa-times" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <table id="lastdownloads" class="table table-condensed table-striped table-hover">

                    <thead>
                    <tr>
                        <th class="hidden">Type</th>
                        <th>Show/Movie name</th>
                        <th>Season</th>
                        <th>Episode</th>
                        <th>Source</th>
                        <th>Quality</th>
                        <th>Codec</th>
                        <th>Group</th>
                        <th>Lang</th>
                        <th>Time</th>
                    </tr>
                    </thead>

                    <tbody>
                        % for item in lastdownloads:
                            <tr>
                                <td class="hidden">${item['type']}</td>
                                <td>
                                    <span class="main-column">${display_title(item)}</span>
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                <span class="info-list-label">Subtitle:</span>
                                                <span>
                                                    ${display_item(item, 'subtitle', 'N/A', False)}
                                                </span>
                                            </li>
                                            <li>
                                                <span class="info-list-label">Provider:</span>
                                                <span>
                                                    ${display_item(item, 'provider', 'N/A', False)}
                                                </span>
                                            </li>
                                        </ul>
                                    </span>
                                </td>
                                <td>${display_item(item, 'season', '')}</td>
                                <td>${display_item(item, 'episode', '')}</td>
                                <td class="wrapped">
                                    ${display_item(item, 'source', 'N/A', True)}
                                </td>
                                <td class="wrapped">
                                    ${display_item(item, 'quality', 'N/A', True)}
                                </td>
                                <td class="wrapped">
                                    ${display_item(item, 'codec', 'N/A', True)}
                                </td>
                                <td class="wrapped">
                                    ${display_item(item, 'releasegrp', 'N/A', True)}
                                </td>
                                <td>
                                    <% imageurl = autosubliminal.WEBROOT + "/images/flags/language/" + item['language'] + ".png" %>
                                    <img src="${imageurl}" class="language-icon" alt="${item['language']}" title="${item['language']}">
                                </td>
                                <td class="datetime">
                                    ${convert_timestamp(item['timestamp'])}
                                </td>
                            </tr>
                        % endfor
                    </tbody>

                </table>

                <div id="lastdownloadspager" class="pager">
                    <% image_base_url = autosubliminal.WEBROOT + "/images/vendor/tablesorter" %>
                    <img src="${image_base_url}/first.png" class="first"/>
                    <img src="${image_base_url}/prev.png" class="prev"/>
                    <span class="pagedisplay"></span>
                    <!-- this can be any element, including an input -->
                    <img src="${image_base_url}/next.png" class="next"/>
                    <img src="${image_base_url}/last.png" class="last"/>
                    <select class="pagesize" title="Select page size">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="all">All</option>
                    </select>
                    <select class="gotoPage" title="Select page number"></select>
                </div>

            </div>

        </div>

    </div>

</%block>
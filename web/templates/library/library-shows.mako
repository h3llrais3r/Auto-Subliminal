<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Shows library</span>
            </div>

            <!-- Vue template for library shows -->
            <library-shows inline-template>

                <div class="panel-body">

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="alert alert-info library-scanner-running hidden" role="alert">
                                <i class="fa fa-spinner fa-spin"></i>
                                Scanning library...
                            </div>
                        </div>
                    </div>

                    <div class="form-inline">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6 table-filter left">
                                <div class="input-group">
                                    <div v-cloak>
                                        <span v-cloak class="btn btn-sm btn-static btn-gray table-filter-label">{{ shows.length }} shows</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 table-filter right">
                                <div class="input-group">
                                    <span class="input-group-addon table-filter-label">Search</span>
                                    <input class="shows-filter form-control input-sm" type="search" data-column="all">
                                    <span class="input-group-addon shows-filter-reset">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table id="shows" class="table table-condensed table-striped table-hover">

                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Path</th>
                            <th>Wanted subtitles</th>
                            <th>Subtitles</th>
                        </tr>
                        </thead>

                        <tbody v-cloak>
                        <tr class="loading-row">
                            <td colspan="10" class="text-center">
                                <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true" title="Loading..."></i>
                            </td>
                        </tr>
                        <tr v-for="show in shows" :id="show.tvdb_id">
                            <td>
                                <div class="title-banner-container" v-lazy-container>
                                    <a :href="getShowDetailsUrl(show.tvdb_id)" :title="show.title">
                                        <img v-if="show.banner" class="title-banner-image" :data-src="getShowBannerThumbnailUrl(show.tvdb_id)" :data-loading="bannerPlaceholderUrl" :data-error="bannerPlaceholderUrl">
                                    </a>
                                </div>
                            </td>
                            <td>{{ show.year }}</td>
                            <td class="wrapped">
                                <span class="path">{{ show.path }}</span>
                            </td>
                            <td>
                                <span v-for="language in show.settings.wanted_languages" class="language-badge">{{ language }}</span>
                            </td>
                            <td>
                                <vue-simple-progress
                                        size="medium"
                                        :val="getShowProgressPercentage(show)"
                                        :text="getShowProgressText(show)"
                                        text-position="middle"
                                        bar-color="transparent">
                                </vue-simple-progress>
                            </td>
                        </tr>
                        </tbody>

                    </table>

                    <div id="showsPager" class="pager">
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

            </library-shows>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('library.js')}"></script>
    <script type="text/javascript" src="${get_web_file('library-shows.js')}"></script>

</%block>
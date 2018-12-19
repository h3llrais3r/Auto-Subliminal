<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Library movies</span>
            </div>

            <!-- Vue template for library movies -->
            <library-movies inline-template>

                <div class="panel-body">

                    <div class="form-inline">
                        <div class="row">
                            <div class="col-xs-12 table-filter right">
                                <div class="input-group">
                                    <span class="input-group-addon table-filter-label">Search</span>
                                    <input class="movies-filter form-control input-sm" type="search" data-column="all">
                                    <span class="input-group-addon movies-filter-reset">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table id="movies" class="table table-condensed table-striped table-hover">

                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Indexer</th>
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
                        <tr v-for="movie in movies" :id="movie.imdb_id">
                            <td>
                                <a :href="getMovieDetailsUrl(movie.imdb_id)" target="_blank" :title="movie.title">
                                    <img v-if="movie.poster" v-lazy="posterThumbnailUrl" :data-srcset="posterThumbnailUrl + movie.imdb_id" height="55px">
                                    {{ movie.title }}
                                </a>
                            </td>
                            <td>{{ movie.year }}</td>
                            <td>
                                <a :href="imdbUrl + movie.imdb_id" target="_blank">
                                    <i class="fa fa-imdb" aria-hidden="true" title="Click to visit Imdb"></i>
                                </a>
                            </td>
                            <td class="wrapped">{{ movie.path }}</td>
                            <td>
                                <span v-for="language in movie.subtitles_wanted" class="label label-default">{{ language }}</span>
                            </td>
                            <td>
                                <vue-simple-progress size="medium" :val="getProcessPercentage(movie)" :text="movie.total_subtitles_available + ' of ' + movie.total_subtitles_needed" text-position="middle"/>
                            </td>
                        </tr>
                        </tbody>

                    </table>

                    <div id="moviesPager" class="pager">
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

            </library-movies>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/library-movies.js?v=${appUUID}"></script>

</%block>
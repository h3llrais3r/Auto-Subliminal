<%inherit file="/layout/page.mako"/>

<%!
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Status</span>
            </div>

            <status inline-template>

                <div class="panel-body">

                    <span class="row h4 weighted">Schedulers</span>

                    <table id="scheduler" class="table table-condensed table-striped">

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Alive</th>
                            <th>Active</th>
                            <th>Interval</th>
                            <th>Last run</th>
                            <th>Next run</th>
                        </tr>
                        </thead>

                        <tbody v-cloak>
                        <tr class="loading-row">
                            <td colspan="10" class="text-center">
                                <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true" title="Loading..."></i>
                            </td>
                        </tr>
                        <tr v-for="scheduler in schedulers" :id="scheduler.name" :class="scheduler.running ? 'scheduler-running' : ''">
                            <td class="main-column">{{ scheduler.name }}</td>
                            <td class="scheduler-alive">{{ scheduler.alive }}</td>
                            <td class="scheduler-active">{{ scheduler.active }}</td>
                            <td class="scheduler-interval">{{ formatDuration(scheduler.interval) }}</td>
                            <td class="scheduler-last-run">{{ formatDateTime(scheduler.last_run) }}</td>
                            <td class="scheduler-next-run">{{ scheduler.running ? 'Running...' : formatDateTime(scheduler.next_run) }}</td>
                        </tr>
                        </tbody>

                    </table>

                    <span class="row h4 weighted">Disk usage</span>

                    <table id="diskusage" class="table table-condensed table-striped">

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Free space</th>
                        </tr>
                        </thead>

                        <tbody v-cloak>
                        <tr class="loading-row">
                            <td colspan="10" class="text-center">
                                <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true" title="Loading..."></i>
                            </td>
                        </tr>
                        <tr v-for="disk in diskusage">
                            <td class="main-column">{{ disk.name}}</td>
                            <td>{{ disk.path }}</td>
                            <td>
                                {{ disk.free_space + ' of ' + disk.total_space + ' (' + disk.percentage_in_use + '%)' }}
                                <i v-if="disk.percentage_in_use < 10" class="fa fa-exclamation-triangle text-danger" aria-hidden="true" title="Low disk space"></i>
                            </td>
                        </tr>
                        </tbody>

                    </table>

                </div>

            </status>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('status.js')}"></script>

</%block>

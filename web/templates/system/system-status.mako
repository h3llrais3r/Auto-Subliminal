<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import display_interval, display_timestamp, get_disk_space_details, get_web_file, humanize_bytes, safe_lowercase, safe_text
%>

<%block name="bodyContent">

    <div class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="h3 weighted">Status</span>
            </div>

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

                    <tbody>
                        % for scheduler in list(autosubliminal.SCHEDULERS.values()):
                            <tr id="${scheduler.name}" ${'class="scheduler-running"' if scheduler.running else ''}>
                                <td class="main-column">${scheduler.name}</td>
                                <td class="scheduler-alive">${safe_lowercase(safe_text(scheduler.alive))}</td>
                                <td class="scheduler-active">${safe_lowercase(safe_text(scheduler.active))}</td>
                                <td class="scheduler-interval">${display_interval(scheduler.interval, True)}</td>
                                <td class="scheduler-last-run">${display_timestamp(scheduler.last_run)}</td>
                                <td class="scheduler-next-run">${'Running...' if scheduler.running else display_timestamp(scheduler.next_run)}</td>
                            </tr>
                        %endfor
                    </tbody>

                </table>

                <span class="row h4 weighted">Disk space</span>

                <table id="diskspace" class="table table-condensed table-striped">

                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Free space</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td class="main-column">Auto-Subliminal path</td>
                        <td>${autosubliminal.PATH}</td>
                        <%
                            free_bytes, total_bytes = get_disk_space_details(autosubliminal.PATH)
                            percentage = (float(free_bytes) / float(total_bytes) * 100)
                            percentage_string = '%.2f' % percentage + '%'
                        %>
                        <td>
                            ${humanize_bytes(free_bytes) + ' of ' + humanize_bytes(total_bytes) + ' (' + percentage_string + ')'}
                            % if percentage < 10:
                                <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true" title="Low disk space"></i>
                            % endif
                        </td>
                    </tr>
                        % for index, path in enumerate(autosubliminal.VIDEOPATHS):
                            <tr>
                                <%
                                    path_suffix = ''
                                    if len(autosubliminal.VIDEOPATHS) > 1:
                                        path_suffix = index + 1
                                %>
                                <td class="main-column">Video path ${path_suffix}</td>
                                <td>${path}</td>
                                <%
                                    free_bytes, total_bytes = get_disk_space_details(path)
                                    percentage = (float(free_bytes) / float(total_bytes) * 100)
                                    percentage_string = '%.2f' % percentage + '%'
                                %>
                                <td>
                                    ${humanize_bytes(free_bytes) + ' of ' + humanize_bytes(total_bytes) + ' (' + percentage_string + ')'}
                                    % if percentage < 10:
                                        <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true" title="Low disk space"></i>
                                    % endif
                                </td>
                            </tr>
                        %endfor
                    </tbody>

                </table>

            </div>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('status.js')}"></script>

</%block>

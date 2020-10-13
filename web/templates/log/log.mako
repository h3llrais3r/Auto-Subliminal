<%inherit file="/layout/page.mako"/>

<%!
    from string import capwords
    from six import text_type

    import autosubliminal
    from autosubliminal.core.logger import count_backup_logfiles
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="container">
                    <div class="row">
                        <span class="h3 weighted">Log File</span>
                        <span class="pull-right">
                            <% backup_count = count_backup_logfiles() %>
                            <ul class="log-pagination">
                                <% current_style = lognum is None and 'badge selected' or 'badge'%>
                                <li class="log-page ${current_style}">
                                    <a href="${autosubliminal.WEBROOT}/log/viewLog/${loglevel}">current</a>
                                </li>
                                % for num in list(range(backup_count)):
                                <%
                                    index = num + 1
                                    index_style = text_type(lognum) == text_type(index) and 'badge selected' or 'badge'
                                %>
                                    <li class="log-page ${index_style}">
                                        <a href="${autosubliminal.WEBROOT}/log/viewLog/${loglevel}/${index}">${index}</a>
                                    </li>
                                % endfor
                            </ul>
                            <span class="panel-title badge">${capwords(loglevel)}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                % if content:
                    <pre class="pre-scrollable-x">${content}</pre>
                % else:
                    <pre>
There is currently no '${capwords(loglevel)}' information in your log file, make sure your loglevel is at least: '${capwords(loglevel)}'.
You can change the loglevel in your <a href="${autosubliminal.WEBROOT}/config/logging">config</a>.</pre>
                %endif
            </div>
        </div>
    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('log.js')}"></script>

</%block>
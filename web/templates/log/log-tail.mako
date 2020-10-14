<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="container">
                    <div class="row">
                        <span class="h3 weighted">Log File</span>
                        <span id="logInfo" class="panel-title badge pull-right"></span>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <pre id="logContent" class="pre-scrollable-x">${content}</pre>
            </div>
        </div>
    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('log-tail.js')}"></script>

</%block>
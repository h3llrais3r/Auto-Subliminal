<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <div class="panel panel-default">

            <!-- Nav tabs -->
            <div class="panel-heading no-border-bottom no-padding-bottom">
                <ul id="infotabs" class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#general" role="tab" data-toggle="tab" aria-controls="general">General</a>
                    </li>
                    <li role="presentation">
                        <a href="#changelog" role="tab" data-toggle="tab" aria-controls="changelog">Changelog</a>
                    </li>
                </ul>
            </div>

            <!-- Tab panes -->
            <div class="panel-body">
                <div class="tab-content">
                    <div id="general" role="tabpanel" class="tab-pane active">
                            <%include file="/system/inc_system-info-general.mako"/>
                    </div>
                    <div id="changelog" role="tabpanel" class="tab-pane">
                            <%include file="/system/inc_system-info-changelog.mako"/>
                    </div>
                </div>
            </div>

        </div>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/system-info.js"></script>

</%block>
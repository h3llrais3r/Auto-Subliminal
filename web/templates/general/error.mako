<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="text-center">
                    <h1>Oops!</h1>
                    <h2>${status}</h2>
                    <br>
                    <p>${message}</p>
                    <div><a href="#" id="tracebackLink">Toggle error details</a></div>
                    <div id="traceback" class="hidden">
                        <div class="error-traceback alert-danger">${traceback}</div>
                    </div>
                    <br>
                    <div>
                        <a href="${autosubliminal.WEBROOT}/home" class="btn btn-primary btn-lg">
                            <span class="fa fa-home"></span>
                            Take Me Home
                        </a>
                        <a href="${autosubliminal.GITHUBURL}/issues" target="_blank" class="btn btn-default btn-lg">
                            <span class="fa fa-github"></span>
                            Create issue
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/error.js?v=${appUUID}"></script>

</%block>

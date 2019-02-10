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
                    <div class="traceback">
                        <div><a class="traceback-link">Toggle error details</a></div>
                        <div class="traceback-error alert-danger hidden">${traceback}</div>
                    </div>
                    <br>
                    <div class="btn-bar">
                        <a href="${autosubliminal.WEBROOT}/home" class="btn btn-primary">
                            <span class="fa fa-home"></span>
                            Take Me Home
                        </a>
                        <a href="${autosubliminal.GITHUBURL}/issues" target="_blank" class="btn btn-default">
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

<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="panel-title badge">Twitter registration</span>
            </div>

            <div class="panel-body">
                <form method="post" action="${autosubliminal.WEBROOT}/config/notification/regTwitter">
                    <div class="form-group narrow">
                        <span>
                            <label>In order to use twitter, you need to give permission to 'Auto-Subliminal' to send tweets with your account</label>
                        </span>
                    </div>
                    <div class="form-group narrow">
                        <span>
                            <label>Execute the following steps:</label>
                        </span>
                        <span>
                            <ul>
                                <li><label>Go to <a href="${url}" target="_blank">twitter</a></label></li>
                                <li><label>Login</label></li>
                                <li><label>Authorize 'Auto-Subliminal'</label></li>
                                <li><label>Enter pin below and click 'OK'</label></li>
                            </ul>
                        </span>
                    </div>
                    <div class="form-group narrow">
                        <span class="col-xs-4 col-md-2">
                            <input type="text" id="token_pin" name="token_pin" class="form-control input-sm">
                        </span>
                        <span class="col-xs-4 col-md-2">
                            <input type="submit" value="ok" class="btn btn-sm btn-primary">
                        </span>
                    </div>
                    <input type="hidden" id="token_key" name="token_key" value="${token_key}">
                    <input type="hidden" id="token_secret" name="token_secret" value="${token_secret}">
                </form>
            </div>

        </div>

    </div>

</%block>

<%inherit file="/layout/page.mako"/>

<%!
    import cgi
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="panel-title badge">Skip show</span>
            </div>

            <div class="panel-body">
                <form method="post" action="${autosubliminal.WEBROOT}/home/skipShow">
                    <div class="form-group narrow">
                        <span><label>Enter the season you want to skip for show '${title}'</label></span>
                    </div>
                    <div class="form-group narrow">
                        <span class="col-xs-6 col-md-2">
                            <input type="text" name="season" class="form-control input-sm">
                        </span>
                        <span class="col-xs-6 col-md-2">
                            <input type="submit" value="Skip" class="btn btn-sm btn-default">
                            <input type="button" value="Cancel" class="btn btn-sm btn-default" onClick="parent.location='${autosubliminal.WEBROOT}/home'">
                        </span>
                    </div>
                    <input type="hidden" name="wanted_item_index" value="${wanted_item_index}">
                    <% title_escaped = cgi.escape(title, True) %>
                    <input type="hidden" name="title" value="${title_escaped}">
                </form>
            </div>

            <div class="panel-footer">
                <div class="note">
                    Enter 00 to skip the show completely, enter 0 to skip special show.
                </div>
            </div>

        </div>

    </div>

</%block>
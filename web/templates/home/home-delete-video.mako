<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <div class="container">

        <div class="panel panel-default">

            <div class="panel-heading">
                <span class="panel-title badge">Delete video</span>
            </div>

            <div class="panel-body">
                <form method="post" action="${autosubliminal.WEBROOT}/home/deleteVideo">
                    <div class="form-group narrow">
                        <span><label>Are you sure you want to delete the following video file</label></span>
                    </div>
                    <div class="form-group">
                        <span class="text-muted"><dfn>${video}</dfn></span>
                    </div>
                    <div class="form-group">
                        <span class="text-muted">
                            <input type="checkbox" name="cleanup" value="True" checked="checked">
                            <dfn>Cleanup leftovers?</dfn>
                        </span>
                    </div>
                    <div class="form-group narrow">
                        <span class="col-xs-6 col-md-2">
                            <input type="submit" value="Delete" class="btn btn-sm btn-default">
                            <input type="button" value="Cancel" class="btn btn-sm btn-default" onClick="parent.location='${autosubliminal.WEBROOT}/home'">
                        </span>
                    </div>
                    <input type="hidden" name="wanted_item_index" value="${wanted_item_index}">
                    <input type="hidden" name="confirmed" value="True">
                </form>
            </div>

            <div class="panel-footer">
                <div class="note">
                    Deleting the video will make it impossible to recover afterwards.
                </div>
            </div>

        </div>

    </div>

</%block>
<%!
    import time

    import autosubliminal
    from autosubliminal import version
    from autosubliminal.util.common import get_next_scheduler_run_in_ms
%>

<!-- Footer -->
<div class="navbar navbar-fixed-bottom panel-footer text-center navbar-footer-small">
    <input type="hidden" id="scandisk-nextrun-time-ms" value="${get_next_scheduler_run_in_ms(autosubliminal.SCANDISK)}">
    <input type="hidden" id="checksub-nextrun-time-ms" value="${get_next_scheduler_run_in_ms(autosubliminal.CHECKSUB)}">
    <!-- tabindex="0" is needed to get the data-trigger="focus" working -->
    <i tabindex="0" class="fa fa-info-circle dropdown-toggle" aria-hidden="true" data-toggle="popover" data-placement="top"
       data-trigger="focus" data-title="<h4>Technical details</h4>" data-html="true" data-content='
        <ul class="list-unstyled">
            <li>
                <span><strong>Application PID:</strong></span>
                <span>${appPID}</span>
            </li>
            <li>
                <span><strong>Page render time:</strong></span>
                <span>${"%.4f" % (time.time() - makoStartTime)}s</span>
            </li>
        </ul>'>
    </i>
    <span>Auto-Subliminal version : ${version.RELEASE_VERSION}</span>
    <span class="separator">|</span>
    <span>
        Next disk scan in :
        <span id="scandisk-nextrun"></span>
    </span>
    <span class="separator">|</span>
    <span>
        Next subtitle check in :
        <span id="checksub-nextrun"></span>
    </span>
</div>

<!-- Vendor javascript -->
<% vendor_js = autosubliminal.DEVELOPER and "vendor.js" or "vendor.min.js" %>
<script type="text/javascript" src="${autosubliminal.WEBROOT}/js/${vendor_js}?v=${appUUID}"></script>

<!-- Auto-Subliminal javascript (applies to all pages) -->
<script type="text/javascript" src="${autosubliminal.WEBROOT}/js/autosubliminal.js?v=${appUUID}"></script>
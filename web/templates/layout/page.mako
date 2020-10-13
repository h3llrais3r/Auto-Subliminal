<!DOCTYPE html>

<html lang="en">

    <head>

        <%include file="/layout/inc_header.mako"/>
        <span class="scroll-icons top">
            <i class="fa fa-2x fa-arrow-circle-o-down scroll-icon-bottom hidden" aria-hidden="true" title="Scroll to bottom"></i>
            <i class="fa fa-2x fa-arrow-circle-o-up scroll-icon-top hidden" aria-hidden="true" title="Scroll to top"></i>
        </span>
        <%block name="headerContent"/>

    </head>

    <body>

        <%include file="/layout/inc_menu.mako"/>

        <div class="jumbotron jumbotron-global">

            <div class="jumbotron-body">
                <div id="stickyNotificationContext" class="container sticky-notification"></div>
                <%block name="bodyContent"/>
            </div>

        </div>

        <%include file="/layout/inc_footer.mako"/>
        <span class="scroll-icons bottom">
            <i class="fa fa-2x fa-arrow-circle-o-down scroll-icon-bottom hidden" aria-hidden="true" title="Scroll to bottom"></i>
            <i class="fa fa-2x fa-arrow-circle-o-up scroll-icon-top hidden" aria-hidden="true" title="Scroll to top"></i>
        </span>
        <%block name="footerContent"/>

    </body>

</html>
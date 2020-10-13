<!DOCTYPE html>

<html lang="en">

    <head>

        <%include file="/layout/inc_header.mako"/>
        <i id="scrollToBottom" class="fa fa-3x fa-arrow-circle-o-down scroll-icon bottom hidden" aria-hidden="true" title="Scroll to bottom"></i>
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
        <i id="scrollToTop" class="fa fa-3x fa-arrow-circle-o-up scroll-icon top hidden" aria-hidden="true" title="Scroll to top"></i>
        <%block name="footerContent"/>

    </body>

</html>
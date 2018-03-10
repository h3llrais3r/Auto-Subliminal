<!DOCTYPE html>

<html lang="en">

    <head>

        <%include file="/layout/inc_header.mako"/>
        <%block name="headerContent"/>

    </head>

    <body>

        <%include file="/layout/inc_menu.mako"/>

        <div class="jumbotron jumbotron-global">

            <div class="jumbotron-body">
                <div id="stack-context" class="container sticky-notification"></div>
                <%block name="bodyContent"/>
            </div>

        </div>

        <%include file="/layout/inc_footer.mako"/>
        <%block name="footerContent"/>

    </body>

</html>
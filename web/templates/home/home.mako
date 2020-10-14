<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app">

        <%include file="/home/inc_home-wanteditems.mako"/>

        <%include file="/home/inc_home-lastdownloads.mako"/>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${get_web_file('home.js')}"></script>

</%block>
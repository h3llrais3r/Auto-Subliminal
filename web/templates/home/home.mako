<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <!-- Vue app placeholder -->
    <div id="app" class="container">

        <%include file="/home/inc_home-wanteditems.mako"/>

        <%include file="/home/inc_home-lastdownloads.mako"/>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/home.js?v=${appUUID}"></script>

</%block>
<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <%include file="/home/inc_home-wanteditems.mako"/>

    <%include file="/home/inc_home-lastdownloads.mako"/>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/home.js"></script>

</%block>
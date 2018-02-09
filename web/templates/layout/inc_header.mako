<%!
    import autosubliminal
%>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>Auto-Subliminal</title>

<!-- Vendor theme -->
<% vendor_css = autosubliminal.DEVELOPER and "vendor.css" or "vendor.min.css" %>
<link rel="stylesheet" href="${autosubliminal.WEBROOT}/css/${vendor_css}" media="screen">

<!-- Auto-Subliminal theme -->
<link rel="stylesheet" href="${autosubliminal.WEBROOT}/css/autosubliminal.css" media="screen">

<script type="text/javascript">
    // Global webroot variable (can be used in Javascript files)
    var webroot = "${autosubliminal.WEBROOT}";
</script>
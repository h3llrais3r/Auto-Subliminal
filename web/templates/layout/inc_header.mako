<%!
    import autosubliminal
    from autosubliminal.util.common import get_web_file
%>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>Auto-Subliminal</title>

<!-- Vendor theme -->
<link rel="stylesheet" href="${get_web_file('vendor.css')}" media="screen">

<!-- Auto-Subliminal theme -->
<link rel="stylesheet" href="${get_web_file('autosubliminal.css')}" media="screen">

<script type="text/javascript">
    // Global webroot variable (can be used in Javascript files)
    var webRoot = '${autosubliminal.WEBROOT}';
</script>
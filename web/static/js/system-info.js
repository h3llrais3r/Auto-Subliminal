/**
 * Javascript needed on the config-info page
 */

// Setup the info tabs
$('#infoTabs a').on('click', function (event) {
    event.preventDefault();
    $(this).tab('show');
});
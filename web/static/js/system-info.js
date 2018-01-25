/**
 * Javascript needed on the config-info page
 */

// Activate the infotabs
$('#infotabs a').on('click', function (event) {
    event.preventDefault();
    $(this).tab('show');
});
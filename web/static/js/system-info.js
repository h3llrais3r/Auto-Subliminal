/**
 * Javascript needed on the config-info page
 */

'use strict';

// Setup the info tabs
$('#infoTabs a').on('click', function (event) {
    event.preventDefault();
    $(this).tab('show');
});
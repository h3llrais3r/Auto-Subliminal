/**
 * Javascript needed on the error pages
 */

'use strict';

// Setup the traceback link
$('#tracebackLink').on('click', function () {
    $('#traceback').toggleClass('hidden');
});
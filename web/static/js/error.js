/**
 * Javascript needed on the error pages
 */

$(document).ready(function () {
    $('#traceback-link').on('click', function () {
        $('#traceback').toggleClass('hidden');
    });
});
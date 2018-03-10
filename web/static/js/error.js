/**
 * Javascript needed on the error pages
 */

$(function () {
    $('#traceback-link').on('click', function () {
        $('#traceback').toggleClass('hidden');
    });
});
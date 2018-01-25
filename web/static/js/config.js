/**
 * Javascript needed on the config pages
 */

$(document).ready(function () {
    $('.btn-save').on('click', function (event) {
        // Prevent the actual click on the link
        event.preventDefault();
        // Submit the form data asynchronously
        var saveUrl = $(this).attr('href');
        var form = $(this).closest('form');
        $.post(saveUrl, form.serialize(), function (data) {
            if (data && data.restart) {
                // if restart is present, restart the system
                window.location = base_url + '/system/restart';
            }
        });
    });
});

$(document).ready(function () {
    $('.btn-test').on('click', function (event) {
        // Prevent the actual click on the link
        event.preventDefault();
        // Execute the link asynchronously
        var testUrl = $(this).attr('href');
        $.get(testUrl);
    });
});

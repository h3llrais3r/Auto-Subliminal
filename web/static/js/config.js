/**
 * Javascript needed on the config pages
 */

// Setup the save buttons
$('.btn-save').on('click', function (event) {
    // Prevent the actual click on the link
    event.preventDefault();
    // Submit the form data asynchronously
    var saveUrl = $(this).attr('href');
    var form = $(this).closest('form');
    $.post(saveUrl, form.serialize(), function (data) {
        if (data && data.restart) {
            // If restart is present, restart the system
            window.location = getUrl('/system/restart');
        }
    });
});

// Setup the test buttons
$('.btn-test').on('click', function (event) {
    // Prevent the actual click on the link
    event.preventDefault();
    // Execute the link asynchronously
    var testUrl = $(this).attr('href');
    $.get(testUrl);
});

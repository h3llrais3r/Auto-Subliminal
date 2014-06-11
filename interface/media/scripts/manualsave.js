// Javascript needed to handle a manual save

$(function () {
    // When a manual save link is clicked
    $(".manualsavelink").click(function (event) {
        // prevent default behaviour
        event.preventDefault();
        // define variables
        var saveurl = $(this).attr("href");
        // call the saveurl
        $.get(saveurl, function (data) {
            if(data['result']) {
                window.location.href = data['redirect'];
            } else {
                $("#div-saveerror").append(data['message']);
            }
        });
        return false;
    });
});

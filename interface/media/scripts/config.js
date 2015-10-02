/**
 * Javascript needed on the config page
 */

// Activate the configtabs
$("#configtabs a").click(function (event) {
    event.preventDefault();
    $(this).tab("show");
});
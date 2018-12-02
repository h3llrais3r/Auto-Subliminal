/**
 * Javascript needed on the home page
 */

// Wait until settings are loaded
PubSub.subscribe(SETTINGS_LOADED, settingsLoaded);

// Init after settings are loaded
function init() {
    // Setup the wanted items table
    $('#wanteditems')
        .tablesorter({
            debug: false, // Put on true to debug
            // Enable widgets
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector
                filter_external: '.wanteditemsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50,
                // Save filters
                filter_saveFilters: true,
                // Reset filter selector
                filter_reset: '.wanteditemsfilterreset'
            },
            // Use configured date format
            dateFormat: TABLESORTER_DATE_FORMAT,
            // Force text sorter in show/movie name column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                0: {sorter: 'false'},
                1: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[9, 1]],
            // Remove loading indication and show content when initialized
            initialized: function () {
                $('#wanteditems').find('.loading-row').remove();
                $('#wanteditems').find('.content-row').removeClass('hidden');
                $('#wanteditems').trigger('update'); // Trigger table update for the removed loading row
            }
        })
        .tablesorterPager({
            container: $('#wanteditemspager'),
            output: '{startRow} to {endRow} ({filteredRows})'
        });

    // Setup the wanted items filter
    $('.wanteditemsfilterreset').on('click', function () {
        $(this).prev('input').val('').focus();
        $.tablesorter.storage($('#wanteditems'), 'tablesorter-filters', '');
    });

    // Setup the last downloads table
    $('#lastdownloads')
        .tablesorter({
            debug: false, // Put on true to debug
            // Enable widgets
            widgets: ['reflow', 'filter', 'saveSort'],
            widgetOptions: {
                // No column filters
                filter_columnFilters: false,
                // External filter selector
                filter_external: '.lastdownloadsfilter',
                // Search faster (default 300)
                filter_searchDelay: 50,
                // Save filters
                filter_saveFilters: true,
                // Reset filter selector
                filter_reset: '.lastdownloadsfilterreset'
            },
            // Use configured date format
            dateFormat: TABLESORTER_DATE_FORMAT,
            // Force text sorter in show/movie name column (this is needed due to img in table cell)
            // See https://github.com/Mottie/tablesorter/issues/1149
            headers: {
                1: {sorter: 'text'}
            },
            // Sort default by time desc
            sortList: [[9, 1]],
            // Remove loading indication and show content when initialized
            initialized: function () {
                $('#lastdownloads').find('.loading-row').remove();
                $('#lastdownloads').find('.content-row').removeClass('hidden');
                $('#lastdownloads').trigger('update'); // Trigger table update for the removed loading row
            }
        })
        .tablesorterPager({
            container: $('#lastdownloadspager'),
            output: '{startRow} to {endRow} ({filteredRows})'
        });

    // Setup the last downloads filter
    $('.lastdownloadsfilterreset').on('click', function () {
        $(this).prev('input').val('').focus();
        $.tablesorter.storage($('#lastdownloads'), 'tablesorter-filters', '');
    });

    // Setup the manual search link
    $('.container-manualsearch-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var searchUrl = $(this).attr('href');
        var loadingIcon = $(this).next('i');
        var contentDiv = $(this).parent('div').next('div');
        // Show the loading icon
        loadingIcon.removeClass('invisible').addClass('visible');
        // Call the searchUrl
        $.get(searchUrl, function (data) {
            // hide the loading icon
            loadingIcon.removeClass('visible').addClass('invisible');
            // output result (empty before storing new data)
            contentDiv.empty();
            contentDiv.append(data);
        });
        return false;
    });

    // Setup the update wanted items link
    $('.update-wanted-item-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var link = $(this);
        var updateUrl = link.attr('href');
        var updatePanel = $(this).closest('.panel-body');
        var updateObj = {
            'title': updatePanel.find('input.update-wanted-item-title').val(),
            'year': updatePanel.find('input.update-wanted-item-year').val(),
            'season': updatePanel.find('input.update-wanted-item-season').val(),
            'episode': updatePanel.find('input.update-wanted-item-episode').val(),
            'source': updatePanel.find('input.update-wanted-item-source').val(),
            'quality': updatePanel.find('input.update-wanted-item-quality').val(),
            'codec': updatePanel.find('input.update-wanted-item-codec').val(),
            'releasegrp': updatePanel.find('input.update-wanted-item-releasegrp').val()
        };
        // Call the updateUrl
        $.post(updateUrl, updateObj, function (data) {
            if (data) {
                // Close the dropdown
                link.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                // Update wanted item
                var wantedItem = link.closest('.wanted-item');
                wantedItem.find('.wanted-item-title').text(data.displaytitle);
                wantedItem.find('.wanted-item-season').text(data.season);
                wantedItem.find('.wanted-item-episode').text(data.episode);
                wantedItem.find('.wanted-item-source').text(data.source);
                wantedItem.find('.wanted-item-quality').text(data.quality);
                wantedItem.find('.wanted-item-codec').text(data.codec);
                wantedItem.find('.wanted-item-releasegrp').text(data.releasegrp);
            }
        });
        return false;
    });

    // Setup the reset wanted items link
    $('.reset-wanted-item-link').on('click', function (event) {
        // Prevent default behaviour
        event.preventDefault();
        // Define variables
        var link = $(this);
        var resetUrl = link.attr('href');
        var updatePanel = $(this).closest('.panel-body');
        // Call the resetUrl
        $.get(resetUrl, function (data) {
            if (data) {
                // Close the dropdown
                link.closest('.dropdown').find('.dropdown-toggle').dropdown('toggle');
                // Update update panel
                updatePanel.find('input.update-wanted-item-title').val(data.title);
                updatePanel.find('input.update-wanted-item-year').val(data.year);
                updatePanel.find('input.update-wanted-item-season').val(data.season);
                updatePanel.find('input.update-wanted-item-episode').val(data.episode);
                updatePanel.find('input.update-wanted-item-source').val(data.source);
                updatePanel.find('input.update-wanted-item-quality').val(data.quality);
                updatePanel.find('input.update-wanted-item-codec').val(data.codec);
                updatePanel.find('input.update-wanted-item-releasegrp').val(data.releasegrp);
                // Update wanted item
                var wantedItem = link.closest('.wanted-item');
                wantedItem.find('.wanted-item-title').text(data.displaytitle);
                wantedItem.find('.wanted-item-season').text(data.season);
                wantedItem.find('.wanted-item-episode').text(data.episode);
                wantedItem.find('.wanted-item-source').text(data.source);
                wantedItem.find('.wanted-item-quality').text(data.quality);
                wantedItem.find('.wanted-item-codec').text(data.codec);
                wantedItem.find('.wanted-item-releasegrp').text(data.releasegrp);
            }
        });
        return false;
    });
}

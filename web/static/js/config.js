'use strict';

(function (autosubliminal) {
  'use strict';

  $('.btn-save').on('click', function (event) {
    event.preventDefault();
    var saveUrl = $(this).attr('href');
    var form = $(this).closest('form');
    $.post(saveUrl, form.serialize(), function (data) {
      if (!jQuery.isEmptyObject(data) && data['restart']) {
        window.location = autosubliminal.getUrl('/system/restart');
      }
    });
  });
  $('.btn-test').on('click', function (event) {
    event.preventDefault();
    var testUrl = $(this).attr('href');
    $.get(testUrl);
  });
})(autosubliminal);
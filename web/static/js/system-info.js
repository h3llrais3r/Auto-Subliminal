'use strict';

(function (autosubliminal) {
  'use strict';

  $('#infoTabs').find('a').on('click', function (event) {
    event.preventDefault();
    $(this).tab('show');
  });
})(autosubliminal);
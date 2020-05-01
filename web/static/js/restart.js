'use strict';

(function (autosubliminal) {
  'use strict';

  var isAlive = function isAlive() {
    $.get(autosubliminal.getUrl('/system/isAlive'), function (data) {
      if (!jQuery.isEmptyObject(data) && data['msg'] == 'False') {
        setTimeout(isAlive, 2000);
      } else {
          $('#restartModal').modal('hide');
          window.location = autosubliminal.getUrl('/home');
        }
    }, 'jsonp');
  };

  $('#restartModal').modal('show');
  isAlive();
})(autosubliminal);
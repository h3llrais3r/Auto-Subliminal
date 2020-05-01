'use strict';

(function (autosubliminal) {
  'use strict';

  var emptyMessages = function emptyMessages() {
    $('#infoMessage').empty();
    $('#errorMessage').empty();
  };

  $('.manualsearch-visit-link').on('click', function (event) {
    event.preventDefault();
    var url = $(this).attr('href');
    window.open(url, '_blank');
    return false;
  });
  $('.manualsearch-save-link').on('click', function (event) {
    event.preventDefault();
    var url = $(this).attr('href');
    $.get(url, function (data) {
      emptyMessages();

      if (data['result']) {
        $('#infoMessage').append(data['infomessage']);
      } else {
        $('#errorMessage').append(data['errormessage']);
      }
    });
    return false;
  });
  $('.manualsearch-delete-link').on('click', function (event) {
    event.preventDefault();
    var url = $(this).attr('href');
    $.get(url, function (data) {
      emptyMessages();

      if (data['result']) {
        $('#infoMessage').append(data['infomessage']);
      } else {
        $('#errorMessage').append(data['errormessage']);
      }
    });
    return false;
  });
  $('.manualsearch-play-link').on('click', function (event) {
    window.location = $(this).attr('href');
    emptyMessages();
    var infoMessage = $('#infoMessage');
    infoMessage.append('Trying to play the video. ');
    infoMessage.append('If the video does not start, you\'ll need to install the \'playvideo://\' protocol first!');
    return false;
  });
  $('.manualsearch-postprocess-link').on('click', function (event) {
    event.preventDefault();
    var postProcessLink = $(this);
    var url = $(this).attr('href');
    postProcessLink.find('i').toggleClass('hidden');
    $.get(url, function (data) {
      emptyMessages();

      if (data['result']) {
        postProcessLink.find('i').toggleClass('hidden');
        window.location.href = data['redirect'];
      } else {
        postProcessLink.find('i').toggleClass('hidden');
        $('#errorMessage').append(data['errormessage']);
      }
    });
    return false;
  });
  $('.dropdown-hoverintent').hoverIntent(function (event) {
    $(this).next('ul').show();
  }, function (event) {
    $(this).next('ul').hide();
  });
})(autosubliminal);
function renderOneImage(src) {
  var $wrapper = $('<a>').attr({
    href: src,
    class: 'col-md-4 col-xs-6'
  });
  var $img = $('<img>').attr({
    src: src,
    class: 'gallery-img'
  });
  $('#gallery').append($wrapper.append($img));
  setSquare();
}

function renderProfile(data) {
  var $img = $('<img>').attr({
    src: data.avatar || 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
    class: 'profile-avatar'
  });
  var $bioWrapper = $('<div>').attr('class', 'bio-wrapper');
  $bioWrapper.append($('<h2>').text(data.name));
  $bioWrapper.append($('<p>').text('@' + data.username));
  $bioWrapper.append($('<p>').text(data.bio));
  $('#profile').append($img, $bioWrapper);
}

function renderMsg(elementId, msg) {
  var $error = $('<div>').text(msg).attr('class', 'error-msg');
  $(elementId).append($error);
}

function clearPage() {
  $('#gallery, #profile').empty();
}

$(window)
  .on('resize', () => {
    var $galleryItem = $('.gallery-img');
    var gridWidth = $($galleryItem[0]).width();
    $galleryItem.css('height', gridWidth);
  });

function setSquare() {
  $(window).resize();
}

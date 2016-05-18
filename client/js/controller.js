function handleImageData(data) {
  if (!data.images.length) return renderMsg('#gallery', 'No images found');
  var failCount = 0;
  var promiseArr = data.images.map((src) => {
    return isValidImage(src)
      .then(() => renderOneImage(src), () => failCount++);
  });

  Promise.all(promiseArr)
    .then(() => {
      if (failCount === data.images.length) {
        renderMsg('#gallery', 'Unable to load images at this time');
      }
    });
}

function initPage(username) {
  clearPage();

  getUser(username)
    .then(
      (data) => {
        renderProfile(data);
        getUserImages(data._id)
          .then(
            handleImageData,
            () => renderMsg('#gallery', 'Unable to load images at this time')
          );
      },
      () => renderMsg('#profile', 'Something went wrong...')
    );
}

initPage('superman');

$('.search-bar').parent().submit((event) => {
  event.preventDefault();
  initPage($(event.target).find('.search-bar').val());
  $('#mobile-search-trigger').click();
});

$('#mobile-search-trigger').click((event) => {
  event.preventDefault();
  $('#mobile-search-trigger').toggleClass('active');
  $('.mobile-nav a:nth-child(4)').toggleClass('active');
  $('#mobile-search-form').slideToggle(200);
})

var apiEndpoint = $(location).attr('origin') + '/api';

function getUser(username) {
  return $.get(apiEndpoint + '/profiles/' + username);
}

function getUserImages(userId) {
  return $.get(apiEndpoint + '/galleries/' + userId);
}

function isValidImage(imgSrc) {
  return new Promise((resolve, reject) => {
    $.get({
      url: apiEndpoint + '/valid-image',
      headers: {src: imgSrc}
    }).then((data) => {
      if (data.success) resolve(data);
      reject(data);
    }, (err) => {
      console.log(err);
      reject(err);
    });
  });
}

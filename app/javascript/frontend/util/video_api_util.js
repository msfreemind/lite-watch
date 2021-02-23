export const getVideos = filters => (
  $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: filters
  })
);

export const postVideo = formData => (
  $.ajax({
    method: 'POST',
    url: '/api/videos',
    data: formData,
    contentType: false,
    processData: false
  })
);
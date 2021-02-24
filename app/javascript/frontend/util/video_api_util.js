export const getVideos = filters => (
  $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: filters
  })
);

export const getVideo = videoId => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`
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
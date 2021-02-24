import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

// sync action creators

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const removeVideo = video => ({
  type: REMOVE_VIDEO,
  video
});

// async action creators

export const fetchVideos = filters => dispatch => {
  return APIUtil.getVideos(filters).then(
    videos => dispatch(receiveVideos(videos))
  );
};

export const fetchVideo = videoId => dispatch => {
  return APIUtil.getVideo(videoId).then(
    video => dispatch(receiveVideo(video))
  );
};

export const createVideo = video => dispatch => {
  return APIUtil.postVideo(video).then(
    video => dispatch(receiveVideo(video))
  );
};

export const updateVideo = (videoId, video) => dispatch => {
  return APIUtil.patchVideo(videoId, video).then(
    video => dispatch(receiveVideo(video))
  );
};

export const destroyVideo = videoId => dispatch => {
  return APIUtil.deleteVideo(videoId).then(
    video => dispatch(removeVideo(video))
  );
};
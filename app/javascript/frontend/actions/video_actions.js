import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

// sync action creators

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

// async action creators

export const fetchVideos = filters => dispatch => {
  return APIUtil.getVideos(filters).then(
    videos => dispatch(receiveVideos(videos))
  );
};

export const createVideo = video => dispatch => {
  return APIUtil.postVideo(video).then(
    video => dispatch(receiveVideo(video))
  );
};
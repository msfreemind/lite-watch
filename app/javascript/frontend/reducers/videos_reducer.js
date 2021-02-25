import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;

    case RECEIVE_VIDEO:
      return Object.assign({}, state, action.response.video);

    case REMOVE_VIDEO:
      delete nextState[action.video.id];
      return nextState;
      
    default:
      return state;
  }
};

export default videosReducer;
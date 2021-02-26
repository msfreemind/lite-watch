import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return Object.assign({}, state, nextState);

    case REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;

    case RECEIVE_VIDEO:
      return action.response.comments || {};
      
    default:
      return state;
  }
};

export default commentsReducer;
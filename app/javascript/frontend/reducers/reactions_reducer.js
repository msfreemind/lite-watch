import { RECEIVE_REACTION } from '../actions/reaction_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions'

const reactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REACTION:
      nextState[action.reaction.id] = action.reaction;
      return Object.assign({}, state, nextState);

    case RECEIVE_VIDEO:
      return Object.assign({}, state, action.response.reaction);
      
    default:
      return state;
  }
};

export default reactionsReducer;
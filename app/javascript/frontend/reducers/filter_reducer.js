import { CHANGE_FILTER } from '../actions/filter_actions';

const _initialState = {
  title: ""
};

const filterReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case CHANGE_FILTER:
      nextState[action.filter] = action.value;
      return nextState;
  
    default:
      return state;
  }
};

export default filterReducer;
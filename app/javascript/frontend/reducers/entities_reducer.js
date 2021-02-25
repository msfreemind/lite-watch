import { combineReducers } from 'redux';
import reactionsReducer from './reactions_reducer';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  reactions: reactionsReducer
});

export default entitiesReducer;
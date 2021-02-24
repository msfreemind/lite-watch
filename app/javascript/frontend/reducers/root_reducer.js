import { combineReducers } from 'redux';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const appReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
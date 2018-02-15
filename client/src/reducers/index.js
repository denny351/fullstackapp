import { combineReducers } from 'redux';
import games from './games_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  games,
  user
});

export default rootReducer;
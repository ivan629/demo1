import {combineReducers} from 'redux';
import GameReducer from './Game';

const allReducers = combineReducers({
  game: GameReducer
}); 
export default allReducers;
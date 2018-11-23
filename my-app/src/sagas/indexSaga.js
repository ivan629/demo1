
import { all}  from 'redux-saga/effects';
import { seeStore } from './historySaga.js';
import { squareClick } from './gameSaga.js';


export default function* rootSaga() {
  yield all([
    seeStore(),
    squareClick()
  ]);
}

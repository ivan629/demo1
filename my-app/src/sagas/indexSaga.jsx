import { all } from 'redux-saga/effects';
import { seeStore } from './historySaga.jsx';
import { squareClick } from './gameSaga.jsx';
import { aiStep } from './dbSaga.js';

export default function* rootSaga() {
  yield all([
    seeStore(),
     squareClick(),
      aiStep()
  ]);
}

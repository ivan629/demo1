import { all } from 'redux-saga/effects';
import { seeStore, clearHistory } from './historySaga.jsx';
import { squareClick } from './gameSaga.jsx';
import { aiStep } from './dbSaga.js';
import { menu } from './menuSaga.js';

export default function* rootSaga() {
  yield all([
    seeStore(),
      clearHistory(),
     squareClick(),
      aiStep(),
      menu()
  ]);
}

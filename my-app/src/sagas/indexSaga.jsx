import { all } from 'redux-saga/effects';
import { seeStore } from './historySaga.jsx';
import { squareClick } from './gameSaga.jsx';
import { aiStep } from './dbSaga.js';
import { menu } from './menuSaga.js';

export default function* rootSaga() {
  yield all([
    seeStore(),
     squareClick(),
      aiStep(),
      menu()
  ]);
}

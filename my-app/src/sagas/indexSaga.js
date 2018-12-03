import { all } from 'redux-saga/effects';
import { seeStore, clearHistory } from './historySaga';
import { squareClick } from './gameSaga';
import { aiStep } from './dbSaga';
import { menu } from './menuSaga';

export default function* rootSaga() {
  yield all([
    seeStore(),
    clearHistory(),
    squareClick(),
    aiStep(),
    menu()
  ]);
}

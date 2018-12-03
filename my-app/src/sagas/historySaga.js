import { put, take } from 'redux-saga/effects';
import {
  CLEAR_HISTORY,
  DISPLAY_HISTORY_STEP,
  JUMP_TO_HISTORY_STEP,
  JUMP_TO_CLEAR_HISTORY
} from '../actions/index';

export function* seeStore() {
  while (true) {
    const { payload } = yield take(JUMP_TO_HISTORY_STEP);

    yield put({
      type: DISPLAY_HISTORY_STEP,
      payload
    });
  }
}

export function* clearHistory() {
  const { payload } = yield take(JUMP_TO_CLEAR_HISTORY);

  yield put({
    type: CLEAR_HISTORY,
    payload
  });
}

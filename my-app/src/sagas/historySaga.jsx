import { put, take } from 'redux-saga/effects';

export function* seeStore() {
  while (true) {
    const { payload } = yield take('BEFORE_SEE_HISTORY');

    yield put({
      type: 'SEE_HISTORY',
      payload
    });
  }
}

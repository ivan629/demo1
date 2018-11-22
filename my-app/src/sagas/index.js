import  { delay } from 'redux-saga';
import { put, take, all, call}  from 'redux-saga/effects';

function* seeStoreAsync() {
  while (true) {
    const { payload } = yield take('SEE_HISTORY');

    yield call(delay, 1000);
    yield put ({
      type: 'SEE_HISTORY_ASYNC',
      payload
    });
  }


}

export default function* rootSaga() {
  yield all([
    seeStoreAsync()
  ]);
}

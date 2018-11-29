import { put, take, takeEvery } from 'redux-saga/effects';

export function* menuOperation() {
  const action = yield take('SWITCH_PLAYER');

  yield put({
    type: 'SET_SWITCH_PLAYER',
    payload: action.payload
  });

  yield put({
    type: 'SET_VISIBLE_ROLE_OPTIONS',
    payload: true
  });
}

export function* roleOperation() {
  const action = yield take('PLAYER_ROLE');
  yield put({
    type: 'SEND_ROLE_TO_SERVER',
    payload: action.payload
  });
}

export function* menu() {
  yield takeEvery('SWITCH_PLAYER', menuOperation);
  yield takeEvery('PLAYER_ROLE', roleOperation);
}

import { put, takeEvery } from 'redux-saga/effects';

export function* menuOperation(action) {
  yield put({
    type: 'SET_VISIBLE_ROLE_OPTIONS',
    payload: true
  });

  yield put({
    type: 'SET_SWITCH_PLAYER',
    payload: action.payload
  });

  yield put({
    type: 'CLEAR_HISTORY'
  });
}

export function* roleOperation(action) {
  yield put({
    type: 'SEND_ROLE_TO_SERVER',
    payload: action.payload
  });
}

export function* menu() {
  yield takeEvery('SWITCH_PLAYER', menuOperation);
  yield takeEvery('PLAYER_ROLE', roleOperation);
}

import { put, takeEvery } from 'redux-saga/effects';

import {
  CLEAR_HISTORY,
  SET_SWITCH_PLAYER,
  SET_VISIBLE_ROLE_OPTIONS,
  SEND_ROLE_TO_SERVER,
  PLAYER_ROLE,
  SWITCH_PLAYER
} from '../constants/Game';

export function* menuOperation(action) {
  yield put({
    type: SET_VISIBLE_ROLE_OPTIONS,
    payload: true
  });

  yield put({
    type: CLEAR_HISTORY
  });

  yield put({
    type: SET_SWITCH_PLAYER,
    payload: action.payload
  });
}

export function* roleOperation(action) {
  yield put({
    type: SEND_ROLE_TO_SERVER,
    payload: action.payload
  });
}

export function* menu() {
  yield takeEvery(SWITCH_PLAYER, menuOperation);
  yield takeEvery(PLAYER_ROLE, roleOperation);
}

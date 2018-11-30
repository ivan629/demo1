import { takeEvery, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { calculateWinner, checkGamePicture } from './gameSaga';
import { urlSendData, urlSendRole } from '../constants/Game';

import {
  SET_VISIBLE_ROLE_OPTIONS,
  AI_CLICK,
  SEND_ROLE_TO_SERVER
} from '../constants/Game';

function getPreparedData(state, index) {
  const { history, stepNumber, xIsNext } = state.game;
  const gameHistory = history.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const i = index;

  if (calculateWinner(squares) || squares[i]) {
    return;
  }

  squares[i] = xIsNext ? 'X' : 'O';

  const newStore = {
    history: gameHistory.concat([{
      squares
    }]),
    stepNumber: gameHistory.length,
    xIsNext: !xIsNext };
  return newStore;
}

function* sendData() {
  const state = yield select();
  const { history } = state.game;
  const lastHistory = history.slice(-1)[0];
  let index;

  yield fetch(urlSendData, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: lastHistory
    })
  })
    .then(response => response.json())
    .then((resp) => {
      index = resp.indexAi;
    })
    .catch((errorMessage) => {
    });

  yield put({
    type: SET_VISIBLE_ROLE_OPTIONS,
    payload: false
  });
  yield call(delay, 200);
  const newState = yield call(getPreparedData, state, index);
  yield put({
    type: 'SET_STORE',
    payload: newState
  });
  yield call(checkGamePicture);
}

export function* sendRoleServer() {
  const state = yield select();
  const role = state.game.isButtonPressedValue;
  yield fetch(urlSendRole, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: role
    })
  })
    .then(response => response.json())
    .then((resp) => {
    })
    .catch((errorMessage) => {
    });
}

export function* aiStep() {
  yield takeEvery(AI_CLICK, sendData);
  yield takeEvery(SEND_ROLE_TO_SERVER, sendRoleServer);
}

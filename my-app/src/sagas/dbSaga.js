import { takeEvery, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { calculateWinner } from './gameSaga';
import { urlSendData } from '../constants/Game';

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
    });

  yield call(delay, 200);
  const newState = yield call(getPreparedData, state, index);
  yield put({
    type: 'SET_STORE',
    payload: newState
  });
}

export function* aiStep() {
  yield takeEvery('AI_CLICK', sendData);
}

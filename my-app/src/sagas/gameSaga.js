import { put, takeEvery, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  SQUARE_CLICKED,
  SET_END_GAME,
  SET_STORE,
  HIDE_ROLE_OPTIONS
} from '../actions/index';

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function* checkGamePicture() {
  const state = yield select();
  const { history, stepNumber } = state.game;

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const lastHistory = history.slice(-1)[0];
  if (check(lastHistory.squares) || (winner)) {
    yield call(delay, 1000);
    yield put({
      type: SET_END_GAME,
      payload: true
    });
  }
  function check(x) {
    return x.every(i => typeof i === 'string');
  }
}

export function* handleClick(action) {
  const state = yield select();
  const { history, stepNumber, xIsNext, isHumanPlayer } = state.game;
  const gameHistory = history.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const i = action.payload;

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

  yield put({
    type: HIDE_ROLE_OPTIONS,
    payload: false
  });
  yield put({
    type: SET_STORE,
    payload: newStore
  });
  yield call(checkGamePicture);
  if (!isHumanPlayer) {
    yield put({
      type: 'AI_CLICK'
    });
  }
}

export function* squareClick() {
  yield takeEvery(SQUARE_CLICKED, handleClick);
}

import { takeEvery, select, put } from 'redux-saga/effects';
import { calculateWinner } from './gameSaga';

const urlSendData = 'http://localhost:8080/api/sendData';
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
  let aiStepHistory;
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
      aiStepHistory = resp.newHistory;
      index = resp.indexAi;
    });

  yield put({
    type: 'SET_STORE',
    payload: getPreparedData(state, index)
  });
}

export function* dbSaga() {
  yield takeEvery('SQUARE_CLICKED', sendData);
}

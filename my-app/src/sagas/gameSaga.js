import { put, takeEvery, select}  from 'redux-saga/effects';

function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function* handleClick(action){

  const state = yield select();
  const { history, stepNumber, xIsNext } = state.game;
  const gameHistory = history.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  let i = action.payload;

  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = xIsNext ? 'X' : 'O';

  const newStore = {
    history: gameHistory.concat([{
      squares: squares
    }]),
    stepNumber: gameHistory.length,
    xIsNext: !xIsNext };
  yield put ({
    type: 'SET_SQUARE_STORE',
    payload: newStore
  });
}

export function* squareClick() {
  yield takeEvery('SQUARE_CLICKED', handleClick);
}

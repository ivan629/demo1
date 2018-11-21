import React from 'react';
import calculateWinner from './calculateWinner';
import {connect} from 'react-redux';
import Board from './Board';
import {bindActionCreators} from 'redux';
import  {squareClick, jumpTo} from '../actions/index';


class Game extends React.Component {

  handleClick(i) {

    const { history, stepNumber, xIsNext } = this.props;
    const gameHistory = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    this.props.squareClick({
      history: gameHistory.concat([{
        squares: squares
      }]),
      stepNumber: gameHistory.length,
      xIsNext: !xIsNext });
  }

  toHistory(step)
  {
    this.props.jumpTo({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.props;

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.toHistory(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ game }) {
  return  {
    history: game.history,
    stepNumber: game.stepNumber,
    xIsNext: game.xIsNext
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    squareClick: squareClick,
    jumpTo: jumpTo
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
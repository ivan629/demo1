import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { squareClick, jumpTo} from '../actions/index';
import { calculateWinner }from '../sagas/gameSaga';
import PropTypes from "prop-types";
import Board from './Board';
import React from 'react';

class Game extends React.Component {
  toHistory(step) {
    this.props.jumpTo({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.props;

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.toHistory(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = `Winner: ${winner}`;

    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;

    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
            onClick={i => this.props.squareClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game }) {
  return {
    history: game.history,
    stepNumber: game.stepNumber,
    xIsNext: game.xIsNext
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    squareClick,
    jumpTo
  }, dispatch);
}

Game.propTypes = {
    jumpTo: PropTypes.func,
    squareClick: PropTypes.func,
    history: PropTypes.array,
    stepNumber:  PropTypes.number,
    xIsNext: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

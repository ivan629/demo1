import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from "prop-types";

import { squareClick, jumpTo, switchPlayer, isRoleChosen,} from '../actions/index';
import { calculateWinner }from '../sagas/gameSaga';
import Board from './Board';
import Menu from './Menu';
import EndGame from './EndGame';
import RoleOptions from './RoleOptions';

class Game extends React.Component {
    toHistory(step) {
    this.props.jumpTo({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

    renderRoleOptions(){

        if(this.props.isRoleOptionsVisible) {
            return(
                <RoleOptions text={"Choose role"}/>
            )
        }
        return null;
    }

    renderEndGame(winner){

        if(this.props.isEndGame) {
            return(
                <EndGame winner={winner}/>
            )
        }
        return null;
    }

    componentDidMount(){
     this.props.isRoleChosen(true);
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
          {this.renderEndGame(winner)}
          <div className="menu-container">
          <Menu />
          {this.renderRoleOptions()}
          </ div>
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
    xIsNext: game.xIsNext,
    isRoleOptionsVisible: game.isRoleOptionsVisible,
    isEndGame: game.isEndGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    squareClick,
    jumpTo,
    switchPlayer,
      isRoleChosen
  }, dispatch);
}

Game.propTypes = {
    jumpTo: PropTypes.func,
    squareClick: PropTypes.func,
    isRoleOptionsVisible: PropTypes.bool,
    history: PropTypes.array,
    stepNumber:  PropTypes.number,
    xIsNext: PropTypes.bool,
    isRoleChosen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

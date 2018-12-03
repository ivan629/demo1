import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { isEndGameVisible, clearHistory } from '../actions/index';

class EndGame extends React.Component {
  closeEndGame(value) {
    if (value === 'play') {
      this.props.clearHistory();
    }
    this.props.isEndGameVisible(false);
  }

  render() {
    return (
      <div className="end-game">
        <div className="end-game-text">
          {'Winner '}
          <span className="winner">{this.props.winner}</span>
        </div>
        <div className="container-button-end-game">
          <div className="button-end-game border" onClick={() => this.closeEndGame('play')}>Play again</div>
          <div className="button-end-game border" onClick={() => this.closeEndGame('history')}>See history</div>
        </div>
      </div>
    );
  }
}

EndGame.propTypes = {
  isEndGameVisible: PropTypes.func,
  clearHistory: PropTypes.func,
  winner: PropTypes.string,

};
export default connect(null, {
  isEndGameVisible,
  clearHistory
})(EndGame);

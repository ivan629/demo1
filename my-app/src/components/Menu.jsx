import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import React from 'react';

import { switchPlayer, isRoleChosen } from '../actions/index';

class RoleOptions extends React.Component {
  switchPlayer(value) {
    this.props.switchPlayer(value);
  }

  render() {
    return (
      <div className="menu">
        <div className={this.props.isHumanPlayer ? 'menu-button border toggled ' : 'menu-button  border'}
          onClick={() => this.switchPlayer(true)}
          onKeyUp={() => this.switchPlayer(true)}>
Play with human
        </div>
        <div className={this.props.isHumanPlayer ? 'menu-button  border' : 'menu-button border toggled '}
          onClick={() => this.switchPlayer(false)}
          onKeyUp={() => this.switchPlayer(false)}>
Play with computer
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game }) {
  return {

    isHumanPlayer: game.isHumanPlayer
  };
}

RoleOptions.propTypes = {
  switchPlayer: PropTypes.func,
  isHumanPlayer: PropTypes.bool
};

export default connect(mapStateToProps, {
  switchPlayer,
  isRoleChosen
})(RoleOptions);

import { bindActionCreators } from 'redux';
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { isRoleChosen } from '../actions/index';

class RoleOptions extends React.Component {
  chooseRole(value) {
    this.props.isRoleChosen(value);
  }

  render() {
    return (
      <div className="options-wrapper">
        <div className="option-title">Choose role</div>
        <div className="role-container">
          <div className={this.props.isButtonPressedValue ? 'role toggled border' : 'role border'}
            onClick={() => this.chooseRole(true)}
            onKeyUp={() => this.chooseRole(true)}>
X
          </div>
          <div className={this.props.isButtonPressedValue ? 'role border' : 'role toggled border'}
            onClick={() => this.chooseRole(false)}
            onKeyUp={() => this.chooseRole(false)}>
O
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game }) {
  return {
    isButtonPressedValue: game.isButtonPressedValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isRoleChosen
  }, dispatch);
}

RoleOptions.propTypes = {
  isButtonPressedValue: PropTypes.bool,
  isRoleChosen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleOptions);

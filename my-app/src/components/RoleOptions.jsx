import { bindActionCreators } from 'redux';
import connect from "react-redux/es/connect/connect";
import React from 'react';
import {isRoleChosen} from "../actions";
import PropTypes from "prop-types";

class RoleOptions extends React.Component {

    chooseRole(value){
        this.props.isRoleChosen(value);
    }

    render() {
        return (
            <div className="options-wrapper">
                <div className="option-title">Choose role</div>
                <div className="role-container">
                    <div className={this.props.isButtonPressedValue ? "role toggled border" : "role border"} onClick={() => this.chooseRole(true)}>X</div>
                    <div className={this.props.isButtonPressedValue ? "role border" : "role toggled border"} onClick={() => this.chooseRole(false)}>O</div>
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
        isButtonPressedValue: game.isButtonPressedValue
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        isRoleChosen
    }, dispatch);
}

RoleOptions.propTypes  = {
    history: PropTypes.array,
    stepNumber: PropTypes.number,
    xIsNext: PropTypes.bool,
    isButtonPressedValue:  PropTypes.bool,
    isRoleChosen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleOptions);

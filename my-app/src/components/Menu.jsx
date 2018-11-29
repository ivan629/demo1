import { bindActionCreators } from 'redux';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import React from 'react';
import {switchPlayer, switchRoleOptions, isRoleChosen} from "../actions";

class RoleOptions extends React.Component {
    switchPlayer(value){
        this.props.switchPlayer(value);
        this.props.switchRoleOptions(value);
    }

    render() {
        return (
            <div className="menu">
                <button className="menu-button" onClick={() => this.switchPlayer(true)}>Play with human</button>
                <button className="menu-button" onClick={() => this.switchPlayer(false)}>Play with computer</button>
            </div>
        );
    }
}

function mapStateToProps({ game }) {
    return {
        history: game.history,
        stepNumber: game.stepNumber,
        xIsNext: game.xIsNext,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        switchPlayer,
        switchRoleOptions,
        isRoleChosen
    }, dispatch);
}

RoleOptions.propTypes  = {
    history: PropTypes.array,
    stepNumber: PropTypes.number,
    xIsNext: PropTypes.bool,
    switchPlayer: PropTypes.func,
    switchRoleOptions: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleOptions);

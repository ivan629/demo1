import { bindActionCreators } from 'redux';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import React from 'react';
import {switchPlayer, isRoleChosen} from "../actions";

class RoleOptions extends React.Component {
    switchPlayer(value){
        this.props.switchPlayer(value);
    }

    render() {
        return (
            <div className="menu">
                <div className={this.props.isHumanPlayer ? "menu-button border toggled " : "menu-button  border"}  onClick={() => this.switchPlayer(true)}>Play with human</div>
                <div className={this.props.isHumanPlayer ? "menu-button  border" : "menu-button border toggled "} onClick={() => this.switchPlayer(false)}>Play with computer</div>
            </div>
        );
    }
}

function mapStateToProps({ game }) {
    return {
        history: game.history,
        stepNumber: game.stepNumber,
        xIsNext: game.xIsNext,
        isHumanPlayer: game.isHumanPlayer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        switchPlayer,
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

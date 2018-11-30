import { bindActionCreators } from 'redux';
import connect from "react-redux/es/connect/connect";
import React from 'react';
import {isRoleChosen} from "../actions";
import PropTypes from "prop-types";

class EndGame extends React.Component {


    render() {
        return (
            <div className="end-game">
                The end
            </div>
        );
    }
}

function mapStateToProps({ game }) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

EndGame.propTypes  = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);

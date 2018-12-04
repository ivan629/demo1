import React from 'react';
import connect from 'react-redux/es/connect/connect';

class Register extends React.Component {

    render() {
        return (
            <div className="register">
            <h1>Register</h1>
            </div>
        );
    }
}

export default connect()(Register);

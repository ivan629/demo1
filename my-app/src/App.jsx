import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './components/Game';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Register from './components/Register';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Navigation />
                    <Content>
                        <Route exact path="/" component={Game}/>
                        <Route path="/register" component={Register}/>
                    </Content>
                </div>
            </Router>
        );
    }
}

export default connect()(App);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducers from './reducers/index';
import Game from './components/Game';
import './index.css';

const store = createStore (AllReducers);
ReactDOM.render(
  <Provider store = {store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
  
  
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import AllReducers from './reducers/index';

import Game from './components/Game';
import  rootSaga  from './sagas';
import './index.css';


const sagaMiddleware = createSagaMiddleware();

const store = createStore (
  AllReducers,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = {store}>
    <Game/>
  </Provider>,
  document.getElementById('root')
);

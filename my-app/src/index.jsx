import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/indexSaga';
import AllReducers from './reducers/index';
import './index.css';
import Game from './components/Game';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  AllReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);


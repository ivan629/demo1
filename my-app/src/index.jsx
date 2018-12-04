import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/indexSaga';
import AllReducers from './reducers/index';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  AllReducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


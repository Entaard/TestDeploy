import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router routes={Routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));

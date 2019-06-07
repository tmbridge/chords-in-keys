import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import example from './example';

const store = createStore(
  example,
  composeWithDevTools(applyMiddleware(
    logger,
    // customMiddleware
  )),
);

export default store;

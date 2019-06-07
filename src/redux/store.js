import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

const store = createStore(
  todos,
  composeWithDevTools(applyMiddleware(
    logger,
  )),
);

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

export default store;

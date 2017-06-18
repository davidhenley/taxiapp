import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const log = createLogger({
  diff: true,
  collapsed: true
});

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, log)
  );

  return store;
};

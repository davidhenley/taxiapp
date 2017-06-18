import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const log = createLogger({
  diff: true,
  collapsed: true
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, log)
);

export default store;

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducer';

const logger = createLogger({
  collapsed: () => true
});
const store = createStore(reducers, applyMiddleware(logger));

export default store;

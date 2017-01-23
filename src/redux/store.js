import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

import { rootEpic, rootReducer } from './root';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [ epicMiddleware, thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({
    collapsed: () => true
  }));
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;

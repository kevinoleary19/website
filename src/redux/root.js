import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import home, { hobbyEpic } from '../components/Pages/HomePage/state/dux';

export const rootEpic = combineEpics({
  hobbyEpic
});

export const rootReducer = combineReducers({
  home
});

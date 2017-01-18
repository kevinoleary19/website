// @flow
import { createAction, createReducer } from 'redux-act';

import initialState from '../initialState';

export const changeHobby = createAction('change hobby');

function changeHobbyReducer(state) {
  const {
    currentHobby,
    hobbies
  } = state;

  let newHobby;
  const currentHobbyIndex = hobbies.indexOf(currentHobby);
  if (currentHobbyIndex === -1 || currentHobbyIndex === hobbies.length - 1) {
    newHobby = hobbies[0];
  } else {
    newHobby = hobbies[currentHobbyIndex + 1];
  }

  return {
    ...state,
    currentHobby: newHobby
  };
}

export default createReducer({
  [changeHobby]: changeHobbyReducer
}, initialState);

// @flow
import { createReducer } from 'redux-act';
import { changeHobby } from './actions';

const initialState = {
  currentHobby: 'Orchestration',
  hobbies: ['Music', 'Investing', 'Minimalism', 'Statistics', 'Landscapes']
};

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
});

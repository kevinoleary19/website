// @flow
import { createAction, createReducer } from 'redux-act';

import * as generators from './helpers/generators';
import initialState from '../initialState';
import type { $Bar, $Hobby } from 'types';


const adjustBars = createAction('adjust bars to current hobby');
export const changeHobby = createAction('change hobby');

const hobbyEpic = action$ =>
  action$.ofType(changeHobby)
    .mapTo(adjustBars);

function adjustBarsReducer(state) {
  const {
    bars,
    currentHobby
  } : {
    bars: Array<$Bar>,
    currentHobby: $Hobby
  } = state;

  let generator;
  switch (currentHobby) {
    case 'Landscapes':
      generator = generators.landscapeGenerator;
      break;
    case 'Investing':
      generator = generators.investingGenerator;
      break;
    case 'Music':
      generator = generators.sinGenerator;
      break;
    case 'Statistics':
      generator = generators.statisticsGenerator;
      break;
    case 'Minimalism':
      generator = generators.minimalismGenerator;
      break;
    default:
      generator = generators.randomGenerator;
      break;
  }

  for (let i = 0; i < bars.length; i++) {
    const bar: $Bar = bars[i];
    bar.height = generator(i);
  }
}

function changeHobbyReducer(state) {
  const {
    currentHobby,
    hobbies
  } : {
    currentHobby: $Hobby,
    hobbies: Array<$Hobby>
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
  [adjustBars]: adjustBarsReducer,
  [changeHobby]: changeHobbyReducer
}, initialState);

// @flow
import { HOBBIES } from 'constants';
const { INVESTING, LANDSCAPES, MINIMALISM, MUSIC, ORCHESTRATION, STATISTICS } = HOBBIES;
import type { $Bar } from 'types';

function createBars() {
  const numBars = 14;
  const bars: Array<$Bar> = [];
  const bStartValue = 125;
  const bEndValue = 81;
  const difference = bStartValue - bEndValue;

  for (let i = 0; i < numBars; i++) {
    bars.push({
      color: `RGB(226,94,${Math.round(bStartValue - (i * (difference / numBars)))})`,
      height: 1
    });
  }
  return bars;
}

export default {
  bars: createBars(),
  currentHobby: ORCHESTRATION,
  hobbies: [MUSIC, INVESTING, MINIMALISM, STATISTICS, LANDSCAPES]
};

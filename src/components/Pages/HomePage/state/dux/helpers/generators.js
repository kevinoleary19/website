// @flow
export const landscapeGenerator = (x: number): number => (
  [96, 85, 85, 35, 35, 61, 89, 76, 76, 49, 107, 107, 60, 75][x]
);

export const investingGenerator = (x: number) => (
  [12, 11, 17, 34, 25, 28, 45, 47, 67, 45, 51, 68, 83, 83][x]
);

export const minimalismGenerator = (x: number) => 35;

export const sinGenerator = (x: number, numBars: number = 14) => {
  const deviation = 35;
  const yOffset = 50;
  return Math.round(deviation * Math.sin(Math.PI * x / ((numBars - 1) / 2)) + yOffset);
};

export const statisticsGenerator = (x: number) => (
  [0.5, 1, 2, 12, 35, 66, 90, 90, 66, 35, 12, 2, 1, 0.5][x]
);

export const randomGenerator = (x: number) => Math.round(Math.random() * 100);

// @flow
import { HOBBIES } from 'constants';

export type $Bar = {
  color: string,
  height: number
}

const { INVESTING, LANDSCAPES, MINIMALISM, MUSIC, ORCHESTRATION, STATISTICS } = HOBBIES;
export type $Hobby = INVESTING | LANDSCAPES | MINIMALISM | MUSIC | ORCHESTRATION | STATISTICS;

export type $Technology = Array<string>;

export type $Project = {
  header: string,
  description: string,
  technology: $Technology,
  src: string,
  githubLink?: string,
  webLink?: string
}

import Sherpa from '../../_/sherpa';
import { type Hobby } from './_Hobby.ts';

const sherpa = Sherpa.makeSherpa();

export const hobbies: Hobby[] = [
  { name: 'Disc Golf', href: sherpa.play.discGolf({}) },
  { name: 'Board Games', href: sherpa.play.boardGames({}) },
  { name: 'Video Games', href: sherpa.play.videoGames({}) },
  { name: 'Reading', href: sherpa.play.reading({}) },
];

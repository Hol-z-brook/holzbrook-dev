import type { AppPageData } from '../../../lib/app';
import { hobbies, type PlayHobby } from './hobby';

export interface PlayPageData extends AppPageData {
  title: string;
  subtitle: string;
  introduction?: string[];
  hobbies: PlayHobby[];
}

export const playPageData: PlayPageData = {
  id: 'play',
  title: 'Hobby Corner',
  subtitle: 'Games, discs, books. The fun stuff.',
  introduction: [
    "Here's what I do when I'm not coding or hanging with family.",
    'Each hobby scratches a different itch - from the strategy of board games to the satisfaction of hitting chains in disc golf.',
  ],
  hobbies,
};

export default {
  playPageData,
};

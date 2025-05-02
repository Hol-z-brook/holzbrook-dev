import { LandingPage } from '@/lib/ui';
import { hobbies } from '@/lib/domain/play/hobby/hobbies.data';
import type { PlayHobby } from '@/lib/domain/play/hobby/PlayHobby';

export interface PlayPageData extends LandingPage.Data {
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

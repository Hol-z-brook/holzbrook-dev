import type { AppPageMetaData } from '../../../lib/app';

export enum SkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum HobbyId {
  DiscGolf = 'disc-golf',
  Coding = 'coding',
}

export enum HobbyProjectId {
  PersonalBest = 'personal-best',
  PersonalWebsite = 'personal-website',
}

export interface HobbyProject {
  id: HobbyProjectId;
  name: string;
  description: string;
  date?: string;
  imageUrl?: string;
  link?: string;
  achievements?: string[];
}

export interface Hobby {
  id: HobbyId;
  name: string;
  href: string;
  description: string;
  icon?: string;
  startedYear?: number;
  skillLevel?: SkillLevel;
  projects?: HobbyProject[];
  relatedSkills?: string[];
  favoriteThings?: string[];
}

export interface PlayPageContent extends AppPageMetaData {
  title: string;
  subtitle: string;
  hobbies: Array<{
    name: string;
    href: string;
  }>;
}

export const pageData: PlayPageContent = {
  id: 'play',
  title: 'My Hobbies',
  subtitle: 'Explore the things I enjoy doing in my free time.',
  hobbies: [
    { name: 'Disc Golf', href: '/play/disc-golf' },
    { name: 'Board Games', href: '/play/board-games' },
    { name: 'Video Games', href: '/play/video-games' },
    { name: 'Reading', href: '/play/reading' },
  ],
};

export default {
  pageData,
};

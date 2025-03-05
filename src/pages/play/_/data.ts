import type { AppPageMetaData } from '../../lib/app';

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
  hobbies: Hobby[];
}

export const pageData: PlayPageContent = {
  id: 'play',
  title: 'Play',
  subtitle: 'Explore my hobbies and side projects.',
  hobbies: [
    {
      id: HobbyId.DiscGolf,
      name: 'Disc Golf',
      href: '/play/disc-golf',
      description: 'A fun outdoor activity that combines strategy and physical exercise.',
      icon: '🥏',
      startedYear: 2020,
      skillLevel: SkillLevel.Advanced,
      projects: [
        {
          id: HobbyProjectId.PersonalBest,
          name: 'Personal Best',
          description: 'Achieved a personal best score of -5 on a local course.',
          date: '2023-06-15',
        },
      ],
      relatedSkills: ['Strategy', 'Physical Fitness', 'Outdoor Activities'],
      favoriteThings: ['Course Design', 'Disc Selection', 'Putting Practice'],
    },
    {
      id: HobbyId.Coding,
      name: 'Coding',
      href: '/play/coding',
      description: 'Building and experimenting with various programming projects.',
      icon: '💻',
      startedYear: 2010,
      skillLevel: SkillLevel.Expert,
      projects: [
        {
          id: HobbyProjectId.PersonalWebsite,
          name: 'Personal Website',
          description: 'Built a modern, responsive website using Next.js and Tailwind CSS.',
          date: '2023-12-01',
          link: 'https://github.com/yourusername/website',
        },
      ],
      relatedSkills: ['Web Development', 'TypeScript', 'UI/UX Design'],
      favoriteThings: ['Problem Solving', 'Learning New Technologies', 'Code Organization'],
    },
  ],
};

export default {
  pageData,
};

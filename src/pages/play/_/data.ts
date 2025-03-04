export interface HobbyProject {
  name: string;
  description: string;
  date?: string;
  imageUrl?: string;
  link?: string;
  achievements?: string[];
}

export interface Hobby {
  name: string;
  href: string;
  description: string;
  icon?: string;
  startedYear?: number;
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  projects?: HobbyProject[];
  relatedSkills?: string[];
  favoriteThings?: string[];
}

export interface PlayContent {
  pageTitle: string;
  pageSubtitle: string;
  hobbies: Hobby[];
}

export const playContent: PlayContent = {
  pageTitle: 'My Hobbies',
  pageSubtitle: 'Explore the things I enjoy doing in my free time.',
  hobbies: [
    {
      name: 'Video Games',
      href: '/play/video-games',
      description: 'Gaming has been a lifelong passion, from classic RPGs to modern indie gems.',
      skillLevel: 'Advanced',
      favoriteThings: ['RPGs', 'Strategy Games', 'Indie Games'],
      startedYear: 1990,
    },
    {
      name: 'Disc Golf',
      href: '/play/disc-golf',
      description: 'A perfect blend of outdoor activity and precision throwing.',
      skillLevel: 'Intermediate',
      favoriteThings: ['Distance Driving', 'Approach Shots', 'Local Tournaments'],
    },
    {
      name: 'Reading',
      href: '/play/reading',
      description: 'Exploring worlds through books, from sci-fi to technical literature.',
      favoriteThings: ['Science Fiction', 'Technical Books', 'Fantasy'],
    },
    {
      name: 'Board Games',
      href: '/play/board-games',
      description: 'Strategic thinking and social interaction through modern board games.',
      favoriteThings: ['Strategy Games', 'Cooperative Games', 'Card Games'],
    },
  ],
};

export default {
  playContent,
};

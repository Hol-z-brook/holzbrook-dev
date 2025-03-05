import type { AppPageMetaData } from '../../lib/app';

export interface HomePageExploreSection {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  cta: string;
  ctaClass: string;
}

export interface HomePageContent extends AppPageMetaData {
  sections: {
    work: HomePageExploreSection;
    family: HomePageExploreSection;
    play: HomePageExploreSection;
  };
}

export const pageData: HomePageContent = {
  id: 'home',
  title: 'Andrew Hol(z)brook',
  subtitle:
    'Building systems that simplify life. Exploring how family, play, and a touch of AI make everything better.',
  sections: {
    work: {
      title: 'Work',
      description: 'A journey through my professional experience.',
      link: '/work',
      bgColor: 'bg-orange-100',
      cta: 'Explore Career',
      ctaClass: 'bg-orange-500 hover:bg-orange-600',
    },
    family: {
      title: 'Family',
      description: 'Family is at the heart of everything I do.',
      link: '/family',
      bgColor: 'bg-amber-100',
      cta: 'Meet the Family',
      ctaClass: 'bg-amber-500 hover:bg-amber-600',
    },
    play: {
      title: 'Play',
      description: 'YOLO, and I do a lot of it.',
      link: '/play',
      bgColor: 'bg-red-100',
      cta: "See What I'm Playing",
      ctaClass: 'bg-rose-500 hover:bg-rose-600',
    },
  },
};

export default {
  pageData,
};

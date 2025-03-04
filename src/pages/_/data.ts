export interface HomePageExploreSection {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  cta: string;
  ctaClass: string;
}

export interface HomePageContent {
  pageTitle: string;
  pageSubtitle: string;
  sections: {
    work: HomePageExploreSection;
    family: HomePageExploreSection;
    play: HomePageExploreSection;
  };
}

export const homeContent: HomePageContent = {
  pageTitle: 'Andrew Hol(z)brook',
  pageSubtitle:
    'Building systems that simplify life. Exploring how family, play, and a touch of AI make everything better.',
  sections: {
    work: {
      title: 'Work',
      description:
        'A journey through my professional experience—projects, skills, and collaborations that shaped my career.',
      link: '/work',
      bgColor: 'bg-orange-100',
      cta: 'Explore Career',
      ctaClass: 'bg-orange-500 hover:bg-orange-600',
    },
    family: {
      title: 'Family',
      description:
        'Family is at the heart of everything I do. Discover the routines, habits, and moments that keep us growing together.',
      link: '/family',
      bgColor: 'bg-amber-100',
      cta: 'Meet the Family',
      ctaClass: 'bg-amber-500 hover:bg-amber-600',
    },
    play: {
      title: 'Play',
      description:
        'Exploring creativity through board games, tech experiments, and hobbies that bring joy and balance to life.',
      link: '/play',
      bgColor: 'bg-red-100',
      cta: "See What I'm Playing",
      ctaClass: 'bg-rose-500 hover:bg-rose-600',
    },
  },
};

export default {
  homeContent,
};

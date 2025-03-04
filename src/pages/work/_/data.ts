export interface WorkExperience {
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface CoreProficiency {
  name: string;
  icon: string;
  description: string;
}

export interface Candidate {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  workExperience: WorkExperience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  coreProficiencies: CoreProficiency[];
}

export const candidate: Candidate = {
  name: 'Andrew Holbrook',
  title: 'Senior Frontend Engineer',
  email: 'holz55@gmail.com',
  phone: '801.361.0417',
  summary:
    'Senior Software Engineer with 10+ years in front-end development. Specializes in React, Next.js, and Flutter, focusing on scalable, high-performance applications. Experienced in leading teams and driving product innovation.',
  workExperience: [
    {
      company: 'Chatbooks',
      title: 'Senior Frontend Developer',
      period: 'March 2019 - December 2024',
      description: 'Supported web and cross-platform initiatives.',
      highlights: [
        'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
        'Implemented Swagger/OpenAPI for streamlined code generation with React Query, simplifying mutation handling and improving API integration efficiency.',
        'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
        'Led the development of a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
        'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
      ],
    },
    {
      company: 'Sling TV',
      title: 'Senior Software Engineer',
      period: 'Feb 2018 - March 2019',
      description: 'Developed core features using AngularJS, SASS, and Redux',
      highlights: [
        'Developed core features using AngularJS, SASS, and Redux, driving increased user engagement.',
        'Consolidated AngularJS libraries, improving maintainability and reducing bundle size.',
        'Modernized state management by transitioning to Redux, reducing bugs and improving application consistency.',
      ],
    },
    {
      company: 'MasterControl',
      title: 'Software Engineer II',
      period: '2014 - Feb 2018',
      description: 'Individual contributor taking on a variety of software development tasks.',
      highlights: [
        'Received Innovation Award for the QuickNav feature, significantly reducing task completion time.',
        'Designed stateful UI architecture using ngrx/store, optimizing user experience and system performance.',
        'Led a team of junior developers, boosting team velocity and ensuring high code quality.',
      ],
    },
  ],
  projects: [
    {
      name: 'Flutter Desktop',
      description:
        'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
      tech: ['Flutter', 'Dart', 'Responsive Design'],
    },
    {
      name: 'Next.js Platform',
      description:
        'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
      tech: ['Next.js', 'React', 'TypeScript'],
    },
    {
      name: 'Web Cart',
      description:
        'Led the development of a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
      tech: ['React', 'TypeScript', 'State Management'],
    },
    {
      name: 'Marketing Site',
      description:
        'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
      tech: ['React', 'Prismic CMS', 'TypeScript'],
    },
  ],
  skillCategories: [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'Next.js', 'Chakra UI', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: '📱',
      skills: ['Flutter', 'Dart', 'React Native', 'Responsive Design'],
    },
    {
      category: 'State Management',
      icon: '🔄',
      skills: ['Redux', 'React Query', 'ngrx/store', 'Context API'],
    },
    {
      category: 'Performance & DevOps',
      icon: '⚡',
      skills: ['Webpack', 'SEO', 'CI/CD', 'Testing', 'Code Optimization'],
    },
    {
      category: 'Tools & Methods',
      icon: '🛠',
      skills: ['Git', 'Agile/Scrum', 'Test-Driven Development', 'Code Review', 'Technical Writing'],
    },
    {
      category: 'Leadership',
      icon: '👥',
      skills: ['Team Management', 'Mentoring', 'Project Planning', 'Technical Leadership'],
    },
  ],
  coreProficiencies: [
    {
      name: 'Frontend Architecture',
      icon: '🏗️',
      description:
        'Designing scalable frontend architectures with modern frameworks and best practices.',
    },
    {
      name: 'UI/UX Design',
      icon: '✨',
      description:
        'Creating intuitive and responsive user interfaces with a focus on user experience.',
    },
    {
      name: 'Technical Leadership',
      icon: '🎯',
      description:
        'Leading development teams, making architectural decisions, and mentoring developers.',
    },
  ],
};

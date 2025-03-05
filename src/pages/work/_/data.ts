import type { AppPageMetaData } from '../../../lib/app';

export enum SkillCategoryId {
  FrontendDevelopment = 'Frontend Development',
  MobileCrossPlatform = 'Mobile & Cross-Platform',
  StateManagement = 'State Management',
  PerformanceDevOps = 'Performance & DevOps',
  ToolsMethods = 'Tools & Methods',
  Leadership = 'Leadership',
}

export enum SkillId {
  // Frontend Development
  React = 'React',
  TypeScript = 'TypeScript',
  NextJs = 'Next.js',
  ChakraUI = 'Chakra UI',
  TailwindCSS = 'Tailwind CSS',
  HTML5CSS3 = 'HTML5/CSS3',

  // Mobile & Cross-Platform
  Flutter = 'Flutter',
  Dart = 'Dart',
  ReactNative = 'React Native',
  ResponsiveDesign = 'Responsive Design',

  // State Management
  Redux = 'Redux',
  ReactQuery = 'React Query',
  NgrxStore = 'ngrx/store',
  ContextAPI = 'Context API',

  // Performance & DevOps
  Webpack = 'Webpack',
  SEO = 'SEO',
  CICD = 'CI/CD',
  Testing = 'Testing',
  CodeOptimization = 'Code Optimization',

  // Tools & Methods
  Git = 'Git',
  AgileScrum = 'Agile/Scrum',
  TDD = 'Test-Driven Development',
  CodeReview = 'Code Review',
  TechnicalWriting = 'Technical Writing',

  // Leadership
  TeamManagement = 'Team Management',
  Mentoring = 'Mentoring',
  ProjectPlanning = 'Project Planning',
  TechnicalLeadership = 'Technical Leadership',
}

export enum CoreProficiencyId {
  FrontendArchitecture = 'Frontend Architecture',
  UIUXDesign = 'UI/UX Design',
  TechnicalLeadership = 'Technical Leadership',
}

export enum CompanyId {
  Chatbooks = 'Chatbooks',
  SlingTV = 'Sling TV',
  MasterControl = 'MasterControl',
  TriVir = 'TriVir LLC',
}

export enum WorkProjectId {
  FlutterDesktop = 'Flutter Desktop',
  NextJsPlatform = 'Next.js Platform',
  WebCart = 'Web Cart',
  MarketingSite = 'Marketing Site',
}

export enum CandidateId {
  AndrewHolbrook = 'andrew-holbrook',
}

export interface WorkExperience {
  id: CompanyId;
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface WorkProject {
  id: WorkProjectId;
  name: string;
  description: string;
  tech: string[];
}

export interface Skill {
  id: SkillId;
  name: string;
  description?: string;
}

export interface SkillCategory {
  category: SkillCategoryId;
  icon: string;
  skillIds: SkillId[];
}

export interface CoreProficiency {
  name: CoreProficiencyId;
  icon: string;
  description: string;
}

export interface Candidate {
  id: CandidateId;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  workExperience: WorkExperience[];
  projects: WorkProject[];
  skillCategories: SkillCategory[];
  coreProficiencies: CoreProficiency[];
  skills: Record<SkillId, Skill>;
}

export const skills: Record<SkillId, Skill> = {
  // Frontend Development
  [SkillId.React]: { id: SkillId.React, name: 'React' },
  [SkillId.TypeScript]: { id: SkillId.TypeScript, name: 'TypeScript' },
  [SkillId.NextJs]: { id: SkillId.NextJs, name: 'Next.js' },
  [SkillId.ChakraUI]: { id: SkillId.ChakraUI, name: 'Chakra UI' },
  [SkillId.TailwindCSS]: { id: SkillId.TailwindCSS, name: 'Tailwind CSS' },
  [SkillId.HTML5CSS3]: { id: SkillId.HTML5CSS3, name: 'HTML5/CSS3' },

  // Mobile & Cross-Platform
  [SkillId.Flutter]: { id: SkillId.Flutter, name: 'Flutter' },
  [SkillId.Dart]: { id: SkillId.Dart, name: 'Dart' },
  [SkillId.ReactNative]: { id: SkillId.ReactNative, name: 'React Native' },
  [SkillId.ResponsiveDesign]: { id: SkillId.ResponsiveDesign, name: 'Responsive Design' },

  // State Management
  [SkillId.Redux]: { id: SkillId.Redux, name: 'Redux' },
  [SkillId.ReactQuery]: { id: SkillId.ReactQuery, name: 'React Query' },
  [SkillId.NgrxStore]: { id: SkillId.NgrxStore, name: 'ngrx/store' },
  [SkillId.ContextAPI]: { id: SkillId.ContextAPI, name: 'Context API' },

  // Performance & DevOps
  [SkillId.Webpack]: { id: SkillId.Webpack, name: 'Webpack' },
  [SkillId.SEO]: { id: SkillId.SEO, name: 'SEO' },
  [SkillId.CICD]: { id: SkillId.CICD, name: 'CI/CD' },
  [SkillId.Testing]: { id: SkillId.Testing, name: 'Testing' },
  [SkillId.CodeOptimization]: { id: SkillId.CodeOptimization, name: 'Code Optimization' },

  // Tools & Methods
  [SkillId.Git]: { id: SkillId.Git, name: 'Git' },
  [SkillId.AgileScrum]: { id: SkillId.AgileScrum, name: 'Agile/Scrum' },
  [SkillId.TDD]: { id: SkillId.TDD, name: 'Test-Driven Development' },
  [SkillId.CodeReview]: { id: SkillId.CodeReview, name: 'Code Review' },
  [SkillId.TechnicalWriting]: { id: SkillId.TechnicalWriting, name: 'Technical Writing' },

  // Leadership
  [SkillId.TeamManagement]: { id: SkillId.TeamManagement, name: 'Team Management' },
  [SkillId.Mentoring]: { id: SkillId.Mentoring, name: 'Mentoring' },
  [SkillId.ProjectPlanning]: { id: SkillId.ProjectPlanning, name: 'Project Planning' },
  [SkillId.TechnicalLeadership]: { id: SkillId.TechnicalLeadership, name: 'Technical Leadership' },
};

export interface WorkPageContent extends AppPageMetaData {
  sections: {
    workExperience: {
      title: string;
    };
    projects: {
      title: string;
    };
    coreProficiencies: {
      title: string;
    };
    technicalSkills: {
      title: string;
    };
    resume: {
      title: string;
    };
  };
  candidate: Candidate;
}

export const pageData: WorkPageContent = {
  id: 'work',
  title: 'My Career',
  subtitle: "When work is play, you'll never play another day in your life.",
  sections: {
    workExperience: {
      title: 'Work Experience',
    },
    projects: {
      title: 'Projects',
    },
    coreProficiencies: {
      title: 'Core Proficiencies',
    },
    technicalSkills: {
      title: 'Technical Skills',
    },
    resume: {
      title: 'Resume',
    },
  },
  candidate: {
    id: CandidateId.AndrewHolbrook,
    name: 'Andrew Holbrook',
    title: 'Senior Frontend Engineer',
    email: 'holz55@gmail.com',
    phone: '801.361.0417',
    summary:
      'Senior Software Engineer with 10+ years in front-end development. Specializes in React, Next.js, and Flutter, focusing on scalable, high-performance applications. Experienced in leading teams and driving product innovation.',
    workExperience: [
      {
        id: CompanyId.Chatbooks,
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
        id: CompanyId.SlingTV,
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
        id: CompanyId.MasterControl,
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
        id: WorkProjectId.FlutterDesktop,
        name: 'Flutter Desktop',
        description:
          'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
        tech: ['Flutter', 'Dart', 'Responsive Design'],
      },
      {
        id: WorkProjectId.NextJsPlatform,
        name: 'Next.js Platform',
        description:
          'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
        tech: ['Next.js', 'React', 'TypeScript'],
      },
      {
        id: WorkProjectId.WebCart,
        name: 'Web Cart',
        description:
          'Led the development of a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
        tech: ['React', 'TypeScript', 'State Management'],
      },
      {
        id: WorkProjectId.MarketingSite,
        name: 'Marketing Site',
        description:
          'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
        tech: ['React', 'Prismic CMS', 'TypeScript'],
      },
    ],
    skillCategories: [
      {
        category: SkillCategoryId.FrontendDevelopment,
        icon: '🎨',
        skillIds: [
          SkillId.React,
          SkillId.TypeScript,
          SkillId.NextJs,
          SkillId.ChakraUI,
          SkillId.TailwindCSS,
          SkillId.HTML5CSS3,
        ],
      },
      {
        category: SkillCategoryId.MobileCrossPlatform,
        icon: '📱',
        skillIds: [SkillId.Flutter, SkillId.Dart, SkillId.ReactNative, SkillId.ResponsiveDesign],
      },
      {
        category: SkillCategoryId.StateManagement,
        icon: '🔄',
        skillIds: [SkillId.Redux, SkillId.ReactQuery, SkillId.NgrxStore, SkillId.ContextAPI],
      },
      {
        category: SkillCategoryId.PerformanceDevOps,
        icon: '⚡',
        skillIds: [
          SkillId.Webpack,
          SkillId.SEO,
          SkillId.CICD,
          SkillId.Testing,
          SkillId.CodeOptimization,
        ],
      },
      {
        category: SkillCategoryId.ToolsMethods,
        icon: '🛠',
        skillIds: [
          SkillId.Git,
          SkillId.AgileScrum,
          SkillId.TDD,
          SkillId.CodeReview,
          SkillId.TechnicalWriting,
        ],
      },
      {
        category: SkillCategoryId.Leadership,
        icon: '👥',
        skillIds: [
          SkillId.TeamManagement,
          SkillId.Mentoring,
          SkillId.ProjectPlanning,
          SkillId.TechnicalLeadership,
        ],
      },
    ],
    coreProficiencies: [
      {
        name: CoreProficiencyId.FrontendArchitecture,
        icon: '🏗️',
        description:
          'Designing scalable frontend architectures with modern frameworks and best practices.',
      },
      {
        name: CoreProficiencyId.UIUXDesign,
        icon: '✨',
        description:
          'Creating intuitive and responsive user interfaces with a focus on user experience.',
      },
      {
        name: CoreProficiencyId.TechnicalLeadership,
        icon: '🎯',
        description:
          'Leading development teams, making architectural decisions, and mentoring developers.',
      },
    ],
    skills,
  },
};

export default {
  pageData,
};

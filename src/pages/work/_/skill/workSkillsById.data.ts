import { WorkSkillId, type WorkSkill } from './WorkSkill';

export const workSkillsById: Record<WorkSkillId, WorkSkill> = {
  // Frontend Development
  [WorkSkillId.React]: {
    id: WorkSkillId.React,
    name: 'React',
    description:
      'Building modern web applications with React, including experience at MasterControl, Sling TV, and Chatbooks. Specialized in component architecture and state management.',
    recruiterValue: 10,
  },
  [WorkSkillId.TypeScript]: {
    id: WorkSkillId.TypeScript,
    name: 'TypeScript',
    description:
      'Using TypeScript for type-safe JavaScript development, enhancing code quality and maintainability.',
    recruiterValue: 9,
  },
  [WorkSkillId.NextJs]: {
    id: WorkSkillId.NextJs,
    name: 'Next.js',
    description:
      'Developing server-side rendered React applications with Next.js, particularly for marketing sites and web applications at Chatbooks.',
    recruiterValue: 8,
    parentSkillId: WorkSkillId.React,
  },
  [WorkSkillId.ChakraUI]: {
    id: WorkSkillId.ChakraUI,
    name: 'Chakra UI',
    description:
      'Building accessible and responsive user interfaces using Chakra UI component library at Chatbooks.',
    recruiterValue: 6,
    parentSkillId: WorkSkillId.React,
  },
  [WorkSkillId.TailwindCSS]: {
    id: WorkSkillId.TailwindCSS,
    name: 'Tailwind CSS',
    description: 'Utilizing utility-first CSS framework for rapid UI development.',
    recruiterValue: 7,
    parentSkillId: WorkSkillId.HTML5CSS3,
  },
  [WorkSkillId.HTML5CSS3]: {
    id: WorkSkillId.HTML5CSS3,
    name: 'HTML5/CSS3',
    description:
      'Core web development skills used throughout career, starting from Utah Valley University through present.',
    recruiterValue: 8,
  },

  // Mobile & Cross-Platform
  [WorkSkillId.Flutter]: {
    id: WorkSkillId.Flutter,
    name: 'Flutter',
    description:
      'Developing cross-platform applications at Chatbooks, including converting mobile-first solutions to fully responsive applications.',
    recruiterValue: 7,
  },
  [WorkSkillId.Dart]: {
    id: WorkSkillId.Dart,
    name: 'Dart',
    description:
      'Programming language used in conjunction with Flutter for cross-platform development at Chatbooks.',
    recruiterValue: 6,
    parentSkillId: WorkSkillId.Flutter,
  },
  [WorkSkillId.ResponsiveDesign]: {
    id: WorkSkillId.ResponsiveDesign,
    name: 'Responsive Design',
    description:
      'Creating adaptive user interfaces that work across all device sizes, particularly demonstrated at Chatbooks.',
    recruiterValue: 8,
  },

  // State Management
  [WorkSkillId.Redux]: {
    id: WorkSkillId.Redux,
    name: 'Redux',
    description:
      'State management for React applications, implemented at MasterControl and Chatbooks.',
    recruiterValue: 8,
    parentSkillId: WorkSkillId.React,
  },
  [WorkSkillId.ReactQuery]: {
    id: WorkSkillId.ReactQuery,
    name: 'React Query',
    description: 'Managing server state and caching in React applications at Chatbooks.',
    recruiterValue: 7,
    parentSkillId: WorkSkillId.React,
  },
  [WorkSkillId.NgrxStore]: {
    id: WorkSkillId.NgrxStore,
    name: 'ngrx/store',
    description: 'State management for Angular applications, used at MasterControl.',
    recruiterValue: 6,
    parentSkillId: WorkSkillId.Angular,
  },
  [WorkSkillId.ContextAPI]: {
    id: WorkSkillId.ContextAPI,
    name: 'Context API',
    description: 'Using React Context for state management in React applications.',
    recruiterValue: 7,
    parentSkillId: WorkSkillId.React,
  },

  // Performance & DevOps
  [WorkSkillId.Webpack]: {
    id: WorkSkillId.Webpack,
    name: 'Webpack',
    description: 'Module bundling and build optimization, particularly at Sling TV.',
    recruiterValue: 7,
  },
  [WorkSkillId.SEO]: {
    id: WorkSkillId.SEO,
    name: 'SEO',
    description: 'Search engine optimization for web applications.',
    recruiterValue: 7,
  },
  [WorkSkillId.CICD]: {
    id: WorkSkillId.CICD,
    name: 'CI/CD',
    description: 'Implementing continuous integration and deployment pipelines at Chatbooks.',
    recruiterValue: 8,
  },
  [WorkSkillId.Testing]: {
    id: WorkSkillId.Testing,
    name: 'Testing',
    description:
      'Writing and maintaining tests, including integration tests at Trivir and throughout career.',
    recruiterValue: 8,
  },
  [WorkSkillId.CodeOptimization]: {
    id: WorkSkillId.CodeOptimization,
    name: 'Code Optimization',
    description: 'Improving performance and maintainability of applications.',
    recruiterValue: 7,
  },

  // Tools & Methods
  [WorkSkillId.Git]: {
    id: WorkSkillId.Git,
    name: 'Git',
    description: 'Version control and collaboration throughout career.',
    recruiterValue: 7,
  },
  [WorkSkillId.AgileScrum]: {
    id: WorkSkillId.AgileScrum,
    name: 'Agile/Scrum',
    description: 'Agile development methodologies, particularly at MasterControl.',
    recruiterValue: 8,
  },
  [WorkSkillId.TDD]: {
    id: WorkSkillId.TDD,
    name: 'Test-Driven Development',
    description: 'Writing tests before implementation, practiced at MasterControl.',
    recruiterValue: 7,
  },
  [WorkSkillId.CodeReview]: {
    id: WorkSkillId.CodeReview,
    name: 'Code Review',
    description: 'Reviewing and providing feedback on code changes.',
    recruiterValue: 7,
  },
  [WorkSkillId.TechnicalWriting]: {
    id: WorkSkillId.TechnicalWriting,
    name: 'Technical Writing',
    description: 'Documentation and technical communication.',
    recruiterValue: 6,
  },

  // Leadership
  [WorkSkillId.Mentoring]: {
    id: WorkSkillId.Mentoring,
    name: 'Mentoring',
    description: 'Mentoring junior developers, particularly at MasterControl.',
    recruiterValue: 8,
  },
  [WorkSkillId.ProjectPlanning]: {
    id: WorkSkillId.ProjectPlanning,
    name: 'Project Planning',
    description: 'Planning and organizing development projects.',
    recruiterValue: 8,
  },
  [WorkSkillId.TechnicalLeadership]: {
    id: WorkSkillId.TechnicalLeadership,
    name: 'Technical Leadership',
    description: 'Providing technical direction and leadership on projects.',
    recruiterValue: 9,
  },

  // Languages & Frameworks
  [WorkSkillId.CSharp]: {
    id: WorkSkillId.CSharp,
    name: 'C#',
    description: 'Object-oriented programming with C#, learned at Utah Valley University.',
    recruiterValue: 7,
  },
  [WorkSkillId.SQL]: {
    id: WorkSkillId.SQL,
    name: 'SQL',
    description:
      'Database querying and management, used at Utah Valley University and MasterControl.',
    recruiterValue: 8,
  },
  [WorkSkillId.CPlusPlus]: {
    id: WorkSkillId.CPlusPlus,
    name: 'C++',
    description: 'Systems programming and graphics programming at Utah Valley University.',
    recruiterValue: 6,
  },
  [WorkSkillId.C]: {
    id: WorkSkillId.C,
    name: 'C',
    description: 'Low-level programming, including compiler development at Utah Valley University.',
    recruiterValue: 5,
  },
  [WorkSkillId.JavaScript]: {
    id: WorkSkillId.JavaScript,
    name: 'JavaScript',
    description: 'Core web development language used throughout career.',
    recruiterValue: 9,
  },
  [WorkSkillId.OpenGL]: {
    id: WorkSkillId.OpenGL,
    name: 'OpenGL',
    description: '3D graphics programming at Utah Valley University.',
    recruiterValue: 4,
  },
  [WorkSkillId.ColdFusion]: {
    id: WorkSkillId.ColdFusion,
    name: 'ColdFusion',
    description: 'Web application development at MasterControl.',
    recruiterValue: 3,
  },
  [WorkSkillId.Java]: {
    id: WorkSkillId.Java,
    name: 'Java',
    description: 'Backend development at MasterControl.',
    recruiterValue: 7,
  },
  [WorkSkillId.SpringMVC]: {
    id: WorkSkillId.SpringMVC,
    name: 'Spring MVC',
    description: 'Java web framework used at MasterControl.',
    recruiterValue: 6,
    parentSkillId: WorkSkillId.Java,
  },
  [WorkSkillId.SpringBoot]: {
    id: WorkSkillId.SpringBoot,
    name: 'Spring Boot',
    description: 'Java application framework used at MasterControl.',
    recruiterValue: 7,
    parentSkillId: WorkSkillId.Java,
  },
  [WorkSkillId.Angular]: {
    id: WorkSkillId.Angular,
    name: 'Angular 2',
    description: 'Frontend development with Angular at MasterControl.',
    recruiterValue: 7,
  },

  // Architecture & Patterns
  [WorkSkillId.DependencyInjection]: {
    id: WorkSkillId.DependencyInjection,
    name: 'Dependency Injection',
    description: 'Software design pattern implemented at MasterControl.',
    recruiterValue: 7,
  },
  [WorkSkillId.InversionOfControl]: {
    id: WorkSkillId.InversionOfControl,
    name: 'Inversion of Control',
    description: 'Architecture pattern used at MasterControl.',
    recruiterValue: 6,
  },
  [WorkSkillId.Architecture]: {
    id: WorkSkillId.Architecture,
    name: 'Architecture',
    description: 'Software architecture design and implementation at MasterControl.',
    recruiterValue: 9,
  },

  // Tools & Platforms
  [WorkSkillId.MicrosoftSQLServer]: {
    id: WorkSkillId.MicrosoftSQLServer,
    name: 'Microsoft SQL Server',
    description: 'Database management system used at MasterControl.',
    recruiterValue: 7,
  },
  [WorkSkillId.VMWare]: {
    id: WorkSkillId.VMWare,
    name: 'VMWare',
    description: 'Virtualization platform used at Trivir.',
    recruiterValue: 5,
  },
  [WorkSkillId.VersionOne]: {
    id: WorkSkillId.VersionOne,
    name: 'Version One',
    description: 'Project management tool used at MasterControl.',
    recruiterValue: 4,
  },

  // Methodologies
  [WorkSkillId.SAFe]: {
    id: WorkSkillId.SAFe,
    name: 'SAFe',
    description: 'Scaled Agile Framework implemented at MasterControl.',
    recruiterValue: 6,
  },
  [WorkSkillId.ScrumMaster]: {
    id: WorkSkillId.ScrumMaster,
    name: 'Scrum Master',
    description: 'Scrum facilitation and team leadership at MasterControl.',
    recruiterValue: 7,
  },
};

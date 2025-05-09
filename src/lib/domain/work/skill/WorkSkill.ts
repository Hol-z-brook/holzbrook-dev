export enum WorkSkillId {
  AgileScrum = 'Agile/Scrum',
  Angular = 'Angular 2',
  Architecture = 'Architecture',
  C = 'C',
  ChakraUI = 'Chakra UI',
  CICD = 'CI/CD',
  CodeOptimization = 'Code Optimization',
  CodeReview = 'Code Review',
  ColdFusion = 'ColdFusion',
  ContextAPI = 'Context API',
  CPlusPlus = 'C++',
  CSharp = 'C#',
  Dart = 'Dart',
  DependencyInjection = 'Dependency Injection',
  Flutter = 'Flutter',
  Git = 'Git',
  HTML5CSS3 = 'HTML5/CSS3',
  InversionOfControl = 'Inversion of Control',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Mentoring = 'Mentoring',
  MicrosoftSQLServer = 'Microsoft SQL Server',
  NextJs = 'Next.js',
  NgrxStore = 'ngrx/store',
  OpenGL = 'OpenGL',
  ProjectPlanning = 'Project Planning',
  React = 'React',
  ReactQuery = 'React Query',
  Redux = 'Redux',
  ResponsiveDesign = 'Responsive Design',
  SAFe = 'SAFe',
  ScrumMaster = 'Scrum Master',
  SEO = 'SEO',
  SpringBoot = 'Spring Boot',
  SpringMVC = 'Spring MVC',
  SQL = 'SQL',
  TailwindCSS = 'Tailwind CSS',
  TDD = 'Test-Driven Development',
  TechnicalLeadership = 'Technical Leadership',
  TechnicalWriting = 'Technical Writing',
  Testing = 'Testing',
  TypeScript = 'TypeScript',
  VersionOne = 'Version One',
  VMWare = 'VMWare',
  Webpack = 'Webpack',
}

export interface WorkSkill {
  id: WorkSkillId;
  name: string;
  description?: string;
  recruiterValue: number; // 0-10 rating of how valuable this skill is to recruiters
  parentSkillId?: WorkSkillId; // Optional reference to a parent skill
}

const careerSkillProgression = {
  utahValleyUniversity: {
    skills: ['C#', 'SQL', 'C++', 'C', 'HTML', 'JavaScript', 'CSS', 'OpenGL'],
    projects: [
      'Compiler',
      'Virtual Machine',
      '3d Graphics Projects',
      'Neural Network',
      'C#/.NET Projects',
    ],
  },
  trivir: {
    skills: ['HTML', 'JSON', 'CSS', 'VMWare'],
    responsibilities: [
      'Archived and organized client projects.',
      'Wrote integration tests for Identity Management Systems.',
    ],
  },
  masterControl: {
    skills: [
      'ColdFusion',
      'SQL',
      'MicroSoft SQL Server',
      'Java',
      'Spring MVC',
      'Spring Boot',
      'Angular 2',
      'Dependency Injection',
      'Inversion of Control',
      'Architecture',
      'React',
      'Redux',
      '@ngrx/store',
      'TDD',
      'Scrum',
      'SAFe',
      'Agile',
      'Architecture',
      'Version One',
      'Scrum Master',
      'Mentoring',
    ],
    projects: ['QuickNav', 'Elasticsearch', 'Batch Processing UI'],
  },
  slingTv: {
    skills: ['AngularJS', 'React', 'Sass', 'Node.js', 'Service Workers', 'Webpack', 'npm'],
  },
  chatbooks: {
    skills: [
      'React',
      'AngularJS',
      'Redux',
      'NextJS',
      'ChakraUI',
      'React Query',
      'Docker',
      'CI/CD',
      'Responsive Design',
      'Reactive Programming',
      'Nx',
      'Figma',
      'Flutter',
      'Dart',
    ],
    projects: [
      'WordPress to Headless CMS React Migration',
      'Web Cart',
      'Legacy Site Maintenance',
      'Greenfield NextJS Marketing Site',
      'Full Stack Designer Covers for Web',
      'Convert Mobile-first Flutter Solution to Fully Responsive',
      'Full Stack Designer Covers for Flutter',
    ],
  },
} as const;

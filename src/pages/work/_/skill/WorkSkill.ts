export enum WorkSkillId {
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

export interface WorkSkill {
  id: WorkSkillId;
  name: string;
  description?: string;
}

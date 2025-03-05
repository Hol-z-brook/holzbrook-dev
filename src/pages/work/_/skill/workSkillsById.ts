import { WorkSkillId, type WorkSkill } from './WorkSkill';

export const workSkillsById: Record<WorkSkillId, WorkSkill> = {
  // Frontend Development
  [WorkSkillId.React]: { id: WorkSkillId.React, name: 'React' },
  [WorkSkillId.TypeScript]: { id: WorkSkillId.TypeScript, name: 'TypeScript' },
  [WorkSkillId.NextJs]: { id: WorkSkillId.NextJs, name: 'Next.js' },
  [WorkSkillId.ChakraUI]: { id: WorkSkillId.ChakraUI, name: 'Chakra UI' },
  [WorkSkillId.TailwindCSS]: { id: WorkSkillId.TailwindCSS, name: 'Tailwind CSS' },
  [WorkSkillId.HTML5CSS3]: { id: WorkSkillId.HTML5CSS3, name: 'HTML5/CSS3' },

  // Mobile & Cross-Platform
  [WorkSkillId.Flutter]: { id: WorkSkillId.Flutter, name: 'Flutter' },
  [WorkSkillId.Dart]: { id: WorkSkillId.Dart, name: 'Dart' },
  [WorkSkillId.ReactNative]: { id: WorkSkillId.ReactNative, name: 'React Native' },
  [WorkSkillId.ResponsiveDesign]: { id: WorkSkillId.ResponsiveDesign, name: 'Responsive Design' },

  // State Management
  [WorkSkillId.Redux]: { id: WorkSkillId.Redux, name: 'Redux' },
  [WorkSkillId.ReactQuery]: { id: WorkSkillId.ReactQuery, name: 'React Query' },
  [WorkSkillId.NgrxStore]: { id: WorkSkillId.NgrxStore, name: 'ngrx/store' },
  [WorkSkillId.ContextAPI]: { id: WorkSkillId.ContextAPI, name: 'Context API' },

  // Performance & DevOps
  [WorkSkillId.Webpack]: { id: WorkSkillId.Webpack, name: 'Webpack' },
  [WorkSkillId.SEO]: { id: WorkSkillId.SEO, name: 'SEO' },
  [WorkSkillId.CICD]: { id: WorkSkillId.CICD, name: 'CI/CD' },
  [WorkSkillId.Testing]: { id: WorkSkillId.Testing, name: 'Testing' },
  [WorkSkillId.CodeOptimization]: { id: WorkSkillId.CodeOptimization, name: 'Code Optimization' },

  // Tools & Methods
  [WorkSkillId.Git]: { id: WorkSkillId.Git, name: 'Git' },
  [WorkSkillId.AgileScrum]: { id: WorkSkillId.AgileScrum, name: 'Agile/Scrum' },
  [WorkSkillId.TDD]: { id: WorkSkillId.TDD, name: 'Test-Driven Development' },
  [WorkSkillId.CodeReview]: { id: WorkSkillId.CodeReview, name: 'Code Review' },
  [WorkSkillId.TechnicalWriting]: { id: WorkSkillId.TechnicalWriting, name: 'Technical Writing' },

  // Leadership
  [WorkSkillId.TeamManagement]: { id: WorkSkillId.TeamManagement, name: 'Team Management' },
  [WorkSkillId.Mentoring]: { id: WorkSkillId.Mentoring, name: 'Mentoring' },
  [WorkSkillId.ProjectPlanning]: { id: WorkSkillId.ProjectPlanning, name: 'Project Planning' },
  [WorkSkillId.TechnicalLeadership]: {
    id: WorkSkillId.TechnicalLeadership,
    name: 'Technical Leadership',
  },
};

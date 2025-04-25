// types.ts

// List of projects I may want to showcase.
// [[Past Experience - MasterControl - QuickNav]]
// [[Past Experience - MasterControl - EBR Builder]]
// [[Past Experience - Chatbooks - Cart & Checkout]]
// [[Past Experience - Chatbooks - React Query Code Generator]]
// [[Past Experience - Chatbooks - Responsive Flutter (Subscription Config|Checkout|Book Editor)]]
// [[Past Experience - Chatbooks - Designer Covers]]

interface Project {
  title: string;
  role: string;
  company: string;
  timeline: string;
  tech: string[];
  timeToCover: number;
  rawDescription: string;
  problem?: string[];
  solution?: string[];
  phases?: ProjectPhase[];
  impact?: string[];
  notes?: string[];
}

interface ProjectPhase {
  name: string;
  description: string;
}

const projects: Record<string, Project> = {
  'mastercontrol-quicknav': {
    title: 'MasterControl – QuickNav Tool',
    // first pass
    rawDescription: '',
    role: 'Internal Tooling Developer',
    company: 'MasterControl',
    timeline: '2018',
    tech: ['ColdFusion', 'Custom search UI'],
    timeToCover: 2,
    problem: [
      'Hard to debug layout/navigation config in legacy app',
      'New devs struggled to know where routes were defined',
    ],
    solution: [
      'Built searchable UI to find navigation elements and related config',
      'Enabled faster onboarding and debugging',
    ],
    impact: [
      'Reduced time to debug screens',
      'Used by most of the dev team regularly',
      'Became part of team onboarding',
    ],
    notes: [
      "My first tool that 'stuck' and became institutionalized",
      'Proactive fix to an invisible but costly pain point',
    ],
  },

  'mastercontrol-ebr-builder-ui': {
    title: 'MasterControl – EBR Builder UI',
    rawDescription: '',
    role: 'Internal Tooling Developer',
    company: 'MasterControl',
    timeline: '2018',
    tech: ['Angular 2', 'ngrx/store', 'RxJS', 'normalizr'],
    timeToCover: 2,
    problem: [
      'Hard to debug layout/navigation config in legacy app',
      'New devs struggled to know where routes were defined',
    ],
  },

  'chatbooks-cart-checkout': {
    title: 'Chatbooks – Cart & Checkout',
    rawDescription: '',
    role: 'Lead Frontend Developer',
    company: 'Chatbooks',
    timeline: 'Multiple iterations over 1–2 years',
    tech: ['Redux', 'Next.js', 'React Query'],
    timeToCover: 6,
    phases: [
      {
        name: 'Initial Redux SPA',
        description:
          'First full SPA conversion of the checkout flow using Redux for state management and thunk for side effects.',
      },
      {
        name: 'Next.js Migration',
        description:
          'Rebuilt checkout in Next.js to enable SSR and improved performance. Rewrote data layer to use React Query.',
      },
    ],
    impact: [
      'Improved checkout conversion rate',
      'Enabled marketing to run A/B tests',
      'Reduced tech debt in core revenue flow',
    ],
    notes: [
      'Mission-critical: any change impacted revenue directly',
      'Worked closely with product, design, and backend',
      'Learned a lot about performance bottlenecks',
    ],
  },

  'chatbooks-designer-covers': {
    title: 'Chatbooks – Designer Covers',
    rawDescription: '',
    role: 'Solo frontend + UX/dev tooling',
    company: 'Chatbooks',
    timeline: 'Q1 2023',
    tech: ['React', 'Next.js', 'Slug-based routing', 'Custom CMS config'],
    timeToCover: 4,
    problem: [
      'Hard-coded seasonal landing pages',
      'Weeks of dev work to launch new content',
      'Poor customer experience discovering covers',
    ],
    solution: [
      'Built an indexable, filterable grid of designer covers',
      'Enabled dynamic page generation via slugs and config',
      'Made system declarative so marketing could own updates',
    ],
    impact: [
      'Launches went from weeks to minutes',
      'Covers were easier to find and select',
      'SEO visibility improved significantly',
    ],
    notes: [
      'Worked closely with brand and marketing',
      'Used this to push dev-content handoff best practices',
    ],
  },

  'chatbooks-react-query-generator': {
    title: 'Chatbooks – React Query Code Generator',
    rawDescription: '',
    role: 'Lead Frontend Developer',
    company: 'Chatbooks',
    timeline: '2022',
    tech: ['TypeScript', 'React Query', 'Code Generation'],
    timeToCover: 3,
    problem: [
      'Manual creation of React Query hooks was time-consuming',
      'Inconsistent patterns across different API endpoints',
      'Error-prone manual typing of API responses',
    ],
    solution: [
      'Built a code generator that created typed React Query hooks from OpenAPI specs',
      'Automated the creation of query keys and mutation handlers',
      'Generated TypeScript types from API schemas',
    ],
    impact: [
      'Reduced time to create new API integrations by 80%',
      'Eliminated type errors in API integrations',
      'Standardized query patterns across the codebase',
    ],
    notes: [
      'One of my favorite developer experience improvements',
      'Showed the power of code generation for reducing boilerplate',
    ],
  },

  'chatbooks-responsive-flutter': {
    title: 'Chatbooks – Responsive Flutter',
    rawDescription: '',
    role: 'Lead Frontend Developer',
    company: 'Chatbooks',
    timeline: '2021-2022',
    tech: ['Flutter', 'Dart', 'Responsive Design'],
    timeToCover: 5,
    phases: [
      {
        name: 'Subscription Configuration',
        description:
          'Built responsive subscription management interface with dynamic pricing and plan selection.',
      },
      {
        name: 'Checkout Flow',
        description:
          'Created adaptive checkout experience that worked across mobile and desktop devices.',
      },
      {
        name: 'Book Editor',
        description:
          'Developed responsive book editing interface with real-time preview and layout adjustments.',
      },
    ],
    impact: [
      'Unified mobile and desktop experiences',
      'Improved conversion rates on larger screens',
      'Reduced development time for new features',
    ],
    notes: [
      'First major Flutter project at Chatbooks',
      'Pioneered responsive design patterns in Flutter',
      'Worked closely with design team on adaptive layouts',
    ],
  },
};

interface ProjectMenuItem {
  id: string;
  company: string;
  headline: string;
  subheadline: string;
  timeToCover: number;
}

interface ProjectData {
  menu: ProjectMenuItem[];
  projects: Record<string, Project>;
}

const projectData: ProjectData = {
  menu: Object.entries(projects)
    .map(([id, project]) => ({
      id,
      company: project.company,
      headline: project.title.split(' – ')[1] || project.title,
      subheadline: project.problem?.[0] || project.solution?.[0] || '',
      timeToCover: project.timeToCover,
    }))
    .sort((a, b) => b.timeToCover - a.timeToCover),
  projects: projects,
};

export {
  projectData,
  type ProjectData,
  type Project,
  type ProjectMenuItem as MenuItem,
  type ProjectPhase as Phase,
};

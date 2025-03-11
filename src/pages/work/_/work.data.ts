import type { AppPageData } from '../../../lib/app';
import { andrewCandidate, type WorkCandidate } from './candidate';
import { WorkSkillId } from './skill/WorkSkill';

export interface WorkPageData extends AppPageData {
  sections: {
    technologies: {
      title: string;
      highlights: WorkSkillId[];
    };
    workExperience: {
      title: string;
    };
    projects: {
      title: string;
    };
    proficiencies: {
      title: string;
    };
    skills: {
      title: string;
    };
    resume: {
      title: string;
    };
  };
  candidate: WorkCandidate;
}

export const workPageData: WorkPageData = {
  id: 'work',
  title: 'Portfolio & Expertise',
  subtitle: 'Senior Frontend Engineer | Digital solutions across web and mobile.',
  sections: {
    technologies: {
      title: 'Key Technical Skills',
      highlights: [
        WorkSkillId.React,
        WorkSkillId.Flutter,
        WorkSkillId.NextJs,
        WorkSkillId.ResponsiveDesign,
        WorkSkillId.TypeScript,
        WorkSkillId.TailwindCSS,
      ],
    },
    workExperience: {
      title: 'Work Experience',
    },
    projects: {
      title: 'Projects',
    },
    proficiencies: {
      title: 'Core Proficiencies',
    },
    skills: {
      title: 'Technical Skills',
    },
    resume: {
      title: 'Resume',
    },
  },
  candidate: andrewCandidate,
};

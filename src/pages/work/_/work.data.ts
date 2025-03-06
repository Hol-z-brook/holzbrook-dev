import type { AppPageData } from '../../../lib/app';
import { andrewCandidate, type WorkCandidate } from './candidate';

export interface WorkPageData extends AppPageData {
  sections: {
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
  subtitle: 'Senior Frontend Developer | Digital solutions across web and mobile.',
  sections: {
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

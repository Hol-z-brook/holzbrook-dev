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
  title: 'My Career',
  subtitle: "When work is play, you'll never play another day in your life.",
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

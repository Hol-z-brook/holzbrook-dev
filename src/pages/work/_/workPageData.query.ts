import type { AppPageData } from '../../../lib/app';
import { andrewCandidate } from './candidate/andrewCandidate.query';
import { type WorkCandidate } from './candidate/WorkCandidate';

export interface WorkPageData extends AppPageData {
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
  candidate: WorkCandidate;
}

export const pageData: WorkPageData = {
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
  candidate: andrewCandidate,
};

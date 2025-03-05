import type { AppPageData } from '../../../lib/app';
import type { WorkCandidate } from './candidate/WorkCandidate';

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

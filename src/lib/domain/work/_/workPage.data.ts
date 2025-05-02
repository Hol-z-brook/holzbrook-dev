import { andrewCandidate } from '@/lib/domain/work/candidate/andrewCandidate.data';
import type { WorkCandidate } from '@/lib/domain/work/candidate/WorkCandidate';
import { WorkSkillId } from '@/lib/domain/work/skill/WorkSkill';
import { LandingPage } from '@/lib/ui';

export interface WorkPageData extends LandingPage.Data {
  sections: {
    professionalProfile: {
      title: string;
      description: string;
      sections: {
        resume: {
          title: string;
          description: string;
        };
        coverLetter: {
          title: string;
          description: string;
        };
        statement: {
          title: string;
          description: string;
        };
      };
    };
    companies: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
    };
    expertise: {
      title: string;
      description: string;
      sections: {
        technologies: {
          title: string;
          highlights: WorkSkillId[];
        };
        proficiencies: {
          title: string;
        };
        skills: {
          title: string;
        };
      };
    };
  };
  candidate: WorkCandidate;
}

export const workPageData: WorkPageData = {
  id: 'work',
  title: 'Portfolio & Expertise',
  subtitle: 'Senior Frontend Engineer | Digital solutions across web and mobile.',
  sections: {
    professionalProfile: {
      title: 'Professional Profile',
      description: 'A comprehensive overview of my professional journey and approach',
      sections: {
        resume: {
          title: 'Resume',
          description: 'Download my detailed professional history',
        },
        coverLetter: {
          title: 'Cover Letter',
          description: 'My approach to collaboration and problem-solving',
        },
        statement: {
          title: 'Professional Statement',
          description: 'My career philosophy and values',
        },
      },
    },
    companies: {
      title: 'Work Experience',
      description: 'A chronological history of my professional journey',
    },
    projects: {
      title: 'Projects',
      description: 'Detailed showcase of my work and contributions',
    },
    expertise: {
      title: 'Technical Expertise',
      description: 'My skills and technical capabilities',
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
        proficiencies: {
          title: 'Core Proficiencies',
        },
        skills: {
          title: 'Technical Skills',
        },
      },
    },
  },
  candidate: andrewCandidate,
};

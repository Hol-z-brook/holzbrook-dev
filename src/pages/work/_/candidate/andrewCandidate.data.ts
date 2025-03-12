import { WorkCandidateId, type WorkCandidate } from './WorkCandidate';
import { workJobs } from '../job';
import { workProficiencies } from '../proficiency';
import { workProjects } from '../project';
import { workSkillsById } from '../skill';
import { workSkillTags } from '../skillTag';

export const andrewCandidate: WorkCandidate = {
  id: WorkCandidateId.AndrewHolbrook,
  name: 'Andrew Holbrook',
  title: 'Senior Frontend Engineer',
  email: 'andrew@holzbrook.dev',
  phone: '801.361.0417',
  website: 'https://holzbrook.dev',
  linkedIn: 'https://www.linkedin.com/in/andrew-holzbrook',
  github: 'https://github.com/holzbrook',
  jobs: workJobs,
  projects: workProjects,
  skillTags: workSkillTags,
  proficiencies: workProficiencies,
  skills: workSkillsById,
  summary:
    'Senior Software Engineer with 10+ years in front-end development. Specializes in React, Next.js, and Flutter, focusing on scalable, high-performance applications. Experienced in leading teams and driving product innovation.',
};

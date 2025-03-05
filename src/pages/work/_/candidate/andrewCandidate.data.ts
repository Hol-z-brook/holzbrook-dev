import { WorkCandidateId, type WorkCandidate } from './WorkCandidate';
import { workJobs } from '../job/workJobs.data';
import { workProficiencies } from '../proficiency/workProficiencies.data';
import { workProjects } from '../project/workProjects.data';
import { workSkillsById } from '../skill/workSkillsById.data';
import { workSkillTags } from '../skillTag/workSkillTags.data';

export const andrewCandidate: WorkCandidate = {
  id: WorkCandidateId.AndrewHolbrook,
  name: 'Andrew Holbrook',
  title: 'Senior Frontend Engineer',
  email: 'holz55@gmail.com',
  phone: '801.361.0417',
  summary:
    'Senior Software Engineer with 10+ years in front-end development. Specializes in React, Next.js, and Flutter, focusing on scalable, high-performance applications. Experienced in leading teams and driving product innovation.',
  jobs: workJobs,
  projects: workProjects,
  skillTags: workSkillTags,
  proficiencies: workProficiencies,
  skills: workSkillsById,
};

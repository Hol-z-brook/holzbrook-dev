import type { WorkJob } from '../job';
import type { WorkProficiency } from '../proficiency';
import type { WorkProject } from '../project';
import type { WorkSkillId, WorkSkill } from '../skill';
import type { WorkSkillTag } from '../skillTag';

export interface WorkCandidate {
  id: WorkCandidateId;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  jobs: WorkJob[];
  projects: WorkProject[];
  skillTags: WorkSkillTag[];
  proficiencies: WorkProficiency[];
  skills: Record<WorkSkillId, WorkSkill>;
}

export enum WorkCandidateId {
  AndrewHolbrook = 'andrew-holbrook',
}

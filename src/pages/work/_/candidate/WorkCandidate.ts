import type { WorkJob } from '../job/WorkJob';
import type { WorkProficiency } from '../proficiency/WorkProficiency';
import type { WorkProject } from '../project/WorkProject';
import type { WorkSkillId, WorkSkill } from '../skill/WorkSkill';
import type { WorkSkillTag } from '../skillTag/WorkSkillTag';

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

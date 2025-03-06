import type { WorkCompanyId } from '../company';

export interface WorkJob {
  id: WorkCompanyId;
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

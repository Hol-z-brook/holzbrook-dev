import type { WorkCompanyId } from '../company/WorkCompany';

export interface WorkJob {
  id: WorkCompanyId;
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

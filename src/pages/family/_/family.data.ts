import type { LandingPage } from '@/lib/ui';

import { familyMembers, type FamilyMember } from './member';

export interface FamilyPageData extends LandingPage.Data {
  familyMembers: FamilyMember[];
}

export const familyPageData: FamilyPageData = {
  id: 'family',
  title: 'Meet the Fam',
  subtitle: '2 parents, 4 kids, and only some regrets...',
  familyMembers,
};

export default {
  familyPageData,
};

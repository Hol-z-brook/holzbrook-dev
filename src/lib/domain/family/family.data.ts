import type { LandingPage } from '@/lib/ui';

import { familyMembers } from './familyMembers.data';
import type { FamilyMember } from './member/FamilyMember';

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

import { familyMembersById } from './familyMembersById.data';
import { FamilyMemberId } from './member/FamilyMember';
import type { FamilyMember } from './member/FamilyMember';

export const familyMembers: FamilyMember[] = [
  familyMembersById[FamilyMemberId.Andrew],
  familyMembersById[FamilyMemberId.Brooke],
  familyMembersById[FamilyMemberId.Oakley],
  familyMembersById[FamilyMemberId.Finn],
  familyMembersById[FamilyMemberId.Leo],
  familyMembersById[FamilyMemberId.Wren],
];

export enum WorkProficiencyId {
  FrontendArchitecture = 'Frontend Architecture',
  UIUXDesign = 'UI/UX Design',
  TechnicalLeadership = 'Technical Leadership',
}

export interface WorkProficiency {
  name: WorkProficiencyId;
  icon: string;
  description: string;
}

export enum WorkCompanyId {
  Chatbooks = 'Chatbooks',
  SlingTV = 'Sling TV',
  MasterControl = 'MasterControl',
  TriVir = 'TriVir LLC',
}

export interface WorkCompany {
  id: WorkCompanyId;
  name: string;
}

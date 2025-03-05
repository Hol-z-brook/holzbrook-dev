export enum WorkProjectId {
  FlutterDesktop = 'Flutter Desktop',
  NextJsPlatform = 'Next.js Platform',
  WebCart = 'Web Cart',
  MarketingSite = 'Marketing Site',
}

export interface WorkProject {
  id: WorkProjectId;
  name: string;
  description: string;
  tech: string[];
}

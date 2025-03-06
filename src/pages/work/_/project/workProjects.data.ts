import { WorkProjectId } from './WorkProject';
import { workProjectsById } from './workProjectsById.data';

export const workProjects = [
  workProjectsById[WorkProjectId.FlutterDesktop],
  workProjectsById[WorkProjectId.NextJsPlatform],
  workProjectsById[WorkProjectId.WebCart],
  workProjectsById[WorkProjectId.MarketingSite],
];

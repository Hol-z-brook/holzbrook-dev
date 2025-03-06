import { WorkProjectId } from './WorkProject';
import { workProjectsById } from './workProjectsById.data';

export const workProjects = [
  workProjectsById[WorkProjectId.FlutterDesktop],
  workProjectsById[WorkProjectId.NextJsMarketingSite],
  workProjectsById[WorkProjectId.ReactReduxWebCart],
  workProjectsById[WorkProjectId.WordPressToReactMigration],
  workProjectsById[WorkProjectId.QuickNav],
];

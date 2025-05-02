import {
  defaultSherpaConfig,
  makeLinkResolver,
  type LinkResolver,
  type SherpaConfig,
} from '../../../sherpa';

export const path = 'work';

export interface WorkSherpa {
  index: LinkResolver;
  internalResumePage: LinkResolver;
  resumePdf: () => string;
}

export const makeWorkSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): WorkSherpa => ({
  index: props => makeLinkResolver(`${path}`, props, config),
  internalResumePage: props => makeLinkResolver(`${path}/_internal/resume`, props, config),
  resumePdf: () => '/files/andrew-holbrook-resume.pdf',
});

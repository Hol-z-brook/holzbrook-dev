import {
  defaultSherpaConfig,
  makeLinkResolver,
  type LinkResolver,
  type SherpaConfig,
} from '../../../lib/sherpa';

export const path = 'work';

export interface WorkSherpa {
  index: LinkResolver;
  resume: LinkResolver;
}

export const makeWorkSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): WorkSherpa => ({
  index: props => makeLinkResolver(`${path}`, props, config),
  resume: props => makeLinkResolver(`${path}/resume`, props, config),
});

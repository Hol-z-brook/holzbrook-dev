import {
  defaultSherpaConfig,
  type SherpaConfig,
  makeLinkResolver,
  type LinkResolver,
} from '../../../lib/sherpa';

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

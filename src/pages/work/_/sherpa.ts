import { makeLinkResolver, type LinkResolver } from '../../../lib/sherpa/util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from '../../../lib/sherpa/util/SherpaConfig';

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

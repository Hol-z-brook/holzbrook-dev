import { makeLinkResolver, type LinkResolver } from '../../_/sherpa/util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from '../../_/sherpa/util/SherpaConfig';

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

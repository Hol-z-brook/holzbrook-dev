import { makeLinkResolver, type LinkResolver } from '../../../lib/sherpa/util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from '../../../lib/sherpa/util/SherpaConfig';

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): FamilySherpa => ({
  index: props => makeLinkResolver(`${path}`, props, config),
});

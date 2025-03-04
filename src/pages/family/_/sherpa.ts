import { makeLinkResolver, type LinkResolver } from '../../_/sherpa/util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from '../../_/sherpa/util/SherpaConfig';

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): FamilySherpa => ({
  index: props => makeLinkResolver(`${path}`, props, config),
});

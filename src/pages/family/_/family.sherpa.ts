import {
  type SherpaConfig,
  type LinkResolver,
  makeLinkResolver,
  defaultSherpaConfig,
} from '../../../lib/sherpa';

export const path = 'family';

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): FamilySherpa => ({
  index: props => makeLinkResolver(`${path}`, props, config),
});

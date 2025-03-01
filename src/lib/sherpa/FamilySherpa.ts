import { makeLinkResolver, type LinkResolver } from "./util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./util/SherpaConfig";

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): FamilySherpa => ({
  index: (props) => makeLinkResolver(`${path}`, props, config),
});

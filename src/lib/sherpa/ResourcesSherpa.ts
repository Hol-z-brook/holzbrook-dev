import { makeLinkResolver, type LinkResolver } from "./util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./util/SherpaConfig";

export interface ResourcesSherpa {
  logo: LinkResolver;
}

export const makeResourcesSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): ResourcesSherpa => ({
  logo: (props) =>
    makeLinkResolver(`${path}logo-placeholder.jpg`, props, config),
});

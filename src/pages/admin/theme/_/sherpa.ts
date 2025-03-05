import { makeLinkResolver, type LinkResolver } from '../../../../lib/sherpa/util/LinkResolver';
import { type SherpaConfig } from '../../../../lib/sherpa/util/SherpaConfig';

export interface ThemeSherpa {
  index: LinkResolver;
  colors: LinkResolver;
  typography: LinkResolver;
  spacing: LinkResolver;
  borderRadius: LinkResolver;
  shadows: LinkResolver;
  transitions: LinkResolver;
}

export function makeThemeSherpa(basePath: string, config: SherpaConfig): ThemeSherpa {
  return {
    index: props => makeLinkResolver(basePath, props, config),
    colors: props => makeLinkResolver(`${basePath}/colors`, props, config),
    typography: props => makeLinkResolver(`${basePath}/typography`, props, config),
    spacing: props => makeLinkResolver(`${basePath}/spacing`, props, config),
    borderRadius: props => makeLinkResolver(`${basePath}/border-radius`, props, config),
    shadows: props => makeLinkResolver(`${basePath}/shadows`, props, config),
    transitions: props => makeLinkResolver(`${basePath}/transitions`, props, config),
  };
}

import { type SherpaConfig, type LinkResolver, makeLinkResolver } from '../../../../lib/sherpa';
import { paths } from './paths';

export const path = 'theme';

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
    colors: props => makeLinkResolver(`${basePath}/${paths.colors}`, props, config),
    typography: props => makeLinkResolver(`${basePath}/${paths.typography}`, props, config),
    spacing: props => makeLinkResolver(`${basePath}/${paths.spacing}`, props, config),
    borderRadius: props => makeLinkResolver(`${basePath}/${paths.borderRadius}`, props, config),
    shadows: props => makeLinkResolver(`${basePath}/${paths.shadows}`, props, config),
    transitions: props => makeLinkResolver(`${basePath}/${paths.transitions}`, props, config),
  };
}

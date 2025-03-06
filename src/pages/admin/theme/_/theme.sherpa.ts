import { type SherpaConfig, type LinkResolver, makeLinkResolver } from '../../../../lib/sherpa';
import { path as colorsPath } from '../colors/index.astro';
import { path as typographyPath } from '../typography/index.astro';
import { path as spacingPath } from '../spacing/index.astro';
import { path as borderRadiusPath } from '../border-radius/index.astro';
import { path as shadowsPath } from '../shadows/index.astro';
import { path as transitionsPath } from '../transitions/index.astro';

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
    colors: props => makeLinkResolver(`${basePath}/${colorsPath}`, props, config),
    typography: props => makeLinkResolver(`${basePath}/${typographyPath}`, props, config),
    spacing: props => makeLinkResolver(`${basePath}/${spacingPath}`, props, config),
    borderRadius: props => makeLinkResolver(`${basePath}/${borderRadiusPath}`, props, config),
    shadows: props => makeLinkResolver(`${basePath}/${shadowsPath}`, props, config),
    transitions: props => makeLinkResolver(`${basePath}/${transitionsPath}`, props, config),
  };
}

import { type SherpaConfig, type LinkResolver, makeLinkResolver } from '../../../lib/sherpa';
import { makeThemeSherpa, type ThemeSherpa } from '../theme/_/theme.sherpa';

export interface AdminSherpa {
  index: LinkResolver;
  theme: ThemeSherpa;
}

export function makeAdminSherpa(basePath: string, config: SherpaConfig): AdminSherpa {
  return {
    index: props => makeLinkResolver(`${basePath}`, props, config),
    theme: makeThemeSherpa(`${basePath}/theme`, config),
  };
}

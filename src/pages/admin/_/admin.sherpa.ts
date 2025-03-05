import { makeThemeSherpa, type ThemeSherpa } from '../theme/_/theme.sherpa';
import { makeLinkResolver, type LinkResolver } from '../../../lib/sherpa/util/LinkResolver';
import { type SherpaConfig } from '../../../lib/sherpa/util/SherpaConfig';

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

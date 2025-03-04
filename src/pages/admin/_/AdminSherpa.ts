import { makeThemeSherpa, type ThemeSherpa } from '../theme/_/sherpa';
import { makeLinkResolver, type LinkResolver } from '../../_/sherpa/util/LinkResolver';
import { type SherpaConfig } from '../../_/sherpa/util/SherpaConfig';

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

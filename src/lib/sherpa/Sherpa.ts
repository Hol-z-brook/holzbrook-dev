import { defaultSherpaConfig, type SherpaConfig } from './util/SherpaConfig';
import type { LinkResolver } from './util/LinkResolver';
import { makePlaySherpa, type PlaySherpa } from '../../pages/play/_/sherpa';
import { makeWorkSherpa, type WorkSherpa } from '../../pages/work/_/sherpa';
import { makeFamilySherpa, type FamilySherpa } from '../../pages/family/_/sherpa';
import { makeResourcesSherpa, type ResourcesSherpa } from './ResourcesSherpa';
import { makeAdminSherpa, type AdminSherpa } from '../../pages/admin/_/AdminSherpa';

export interface Sherpa {
  home: LinkResolver;
  admin: AdminSherpa;
  work: WorkSherpa;
  family: FamilySherpa;
  play: PlaySherpa;
  resources: ResourcesSherpa;
}

export function makeSherpa(config: SherpaConfig = defaultSherpaConfig): Sherpa {
  return {
    home: () => '/',
    admin: makeAdminSherpa('/admin', config),
    work: makeWorkSherpa('/work', config),
    family: makeFamilySherpa('/family', config),
    play: makePlaySherpa('/play', config),
    resources: makeResourcesSherpa('/', config),
  };
}

export type { ThemeSherpa } from '../../pages/admin/theme/_/sherpa';

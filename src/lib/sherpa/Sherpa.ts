import { makeResourcesSherpa, type ResourcesSherpa } from './ResourcesSherpa';
import { defaultSherpaConfig, type SherpaConfig } from './util/SherpaConfig';
import type { LinkResolver } from './util/LinkResolver';
import { makePlaySherpa, type PlaySherpa } from '../../pages/play/_/sherpa';
import { makeWorkSherpa, type WorkSherpa } from '../../pages/work/_/work.sherpa';
import { makeFamilySherpa, type FamilySherpa } from '../../pages/family/_/sherpa';
import { makeAdminSherpa, type AdminSherpa } from '../../pages/admin/_/sherpa';

export interface Sherpa {
  admin: AdminSherpa;
  family: FamilySherpa;
  home: LinkResolver;
  play: PlaySherpa;
  resources: ResourcesSherpa;
  work: WorkSherpa;
}

export function makeSherpa(config: SherpaConfig = defaultSherpaConfig): Sherpa {
  return {
    admin: makeAdminSherpa('/admin', config),
    family: makeFamilySherpa('/family', config),
    home: () => '/',
    play: makePlaySherpa('/play', config),
    resources: makeResourcesSherpa('/', config),
    work: makeWorkSherpa('/work', config),
  };
}

export type { ThemeSherpa } from '../../pages/admin/theme/_/sherpa';

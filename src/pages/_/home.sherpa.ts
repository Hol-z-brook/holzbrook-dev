import {
  defaultSherpaConfig,
  makeResourcesSherpa,
  type LinkResolver,
  type ResourcesSherpa,
  type SherpaConfig,
} from '../../lib/sherpa';
import { makePlaySherpa, type PlaySherpa } from '../play/_/play.sherpa';
import { makeWorkSherpa, type WorkSherpa } from '../work/_/work.sherpa';
import { makeFamilySherpa, type FamilySherpa } from '../family/_/family.sherpa';
import { makeAdminSherpa, type AdminSherpa } from '../admin/_/admin.sherpa';

export interface HomeSherpa {
  admin: AdminSherpa;
  family: FamilySherpa;
  home: LinkResolver;
  play: PlaySherpa;
  resources: ResourcesSherpa;
  work: WorkSherpa;
}

export function makeHomeSherpa(config: SherpaConfig = defaultSherpaConfig): HomeSherpa {
  return {
    home: () => '/',
    admin: makeAdminSherpa('/admin', config),
    family: makeFamilySherpa('/family', config),
    play: makePlaySherpa('/play', config),
    resources: makeResourcesSherpa('/', config),
    work: makeWorkSherpa('/work', config),
  };
}

export type { ThemeSherpa } from '../admin/theme/_/theme.sherpa';

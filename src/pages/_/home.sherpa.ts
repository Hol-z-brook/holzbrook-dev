import {
  defaultSherpaConfig,
  type SherpaConfig,
  makeResourcesSherpa,
  type ResourcesSherpa,
  type LinkResolver,
} from '../../lib/sherpa';
import { makePlaySherpa, type PlaySherpa } from '../play/_/play.sherpa';
import { makeWorkSherpa, type WorkSherpa } from '../work/_/work.sherpa';
import { makeFamilySherpa, type FamilySherpa } from '../family/_/family.sherpa';
import { makeAdminSherpa, type AdminSherpa } from '../admin/_/admin.sherpa';

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

export type { ThemeSherpa } from '../admin/theme/_/theme.sherpa';

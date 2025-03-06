import {
  defaultSherpaConfig,
  makeResourcesSherpa,
  type LinkResolver,
  type ResourcesSherpa,
  type SherpaConfig,
} from '../../lib/sherpa';
import { path as playPath, makePlaySherpa, type PlaySherpa } from '../play/_/play.sherpa';
import { path as workPath, makeWorkSherpa, type WorkSherpa } from '../work/_/work.sherpa';
import { path as familyPath, makeFamilySherpa, type FamilySherpa } from '../family/_/family.sherpa';
import { path as adminPath, makeAdminSherpa, type AdminSherpa } from '../admin/_/admin.sherpa';

export const path = '';

export interface HomeSherpa {
  home: LinkResolver;
  [adminPath]: AdminSherpa;
  [familyPath]: FamilySherpa;
  [playPath]: PlaySherpa;
  [workPath]: WorkSherpa;
  resources: ResourcesSherpa;
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

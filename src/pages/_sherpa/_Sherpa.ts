import { makeLinkResolver, type LinkResolver } from "./_util/_LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/_SherpaConfig";
import { makePlaySherpa, type PlaySherpa } from "./_PlaySherpa";
import { makeWorkSherpa, type WorkSherpa } from "./_WorkSherpa";
import { makeFamilySherpa, type FamilySherpa } from "./_FamilySherpa";
import { makeResourcesSherpa, type ResourcesSherpa } from "./_ResourcesSherpa";
import { makeThemeSherpa, type ThemeSherpa } from "./_ThemeSherpa";

export interface Sherpa {
  home: () => string;
  work: WorkSherpa;
  family: FamilySherpa;
  play: PlaySherpa;
  theme: ThemeSherpa;
  resources: ResourcesSherpa;
}

export function makeSherpa(config: SherpaConfig = defaultSherpaConfig): Sherpa {
  return {
    home: () => '/',
    work: makeWorkSherpa('/work', config),
    family: makeFamilySherpa('/family', config),
    play: makePlaySherpa('/play', config),
    theme: makeThemeSherpa('/theme', config),
    resources: makeResourcesSherpa('/', config),
  };
}

export type { ThemeSherpa } from './_ThemeSherpa';

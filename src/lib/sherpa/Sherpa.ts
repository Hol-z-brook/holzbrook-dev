import { defaultSherpaConfig, type SherpaConfig } from "./util/SherpaConfig";
import { makePlaySherpa, type PlaySherpa } from "./PlaySherpa";
import { makeWorkSherpa, type WorkSherpa } from "./WorkSherpa";
import { makeFamilySherpa, type FamilySherpa } from "./FamilySherpa";
import { makeResourcesSherpa, type ResourcesSherpa } from "./ResourcesSherpa";
import { makeThemeSherpa, type ThemeSherpa } from "./ThemeSherpa";

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

export type { ThemeSherpa } from './ThemeSherpa';

import { makeLinkResolver, type LinkResolver } from "./_util/_LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/_SherpaConfig";
import { makePlaySherpa, type PlaySherpa } from "./_PlaySherpa";
import { makeWorkSherpa, type WorkSherpa } from "./_WorkSherpa";
import { makeFamilySherpa, type FamilySherpa } from "./_FamilySherpa";
import { makeResourcesSherpa, type ResourcesSherpa } from "./_ResourcesSherpa";

interface Sherpa {
  family: FamilySherpa;
  home: LinkResolver;
  play: PlaySherpa;
  resources: ResourcesSherpa;
  work: WorkSherpa;
}

export const makeSherpa = (
  config: SherpaConfig = defaultSherpaConfig,
): Sherpa => ({
  family: makeFamilySherpa("/family", config),
  home: (props) => makeLinkResolver("/", props, config),
  play: makePlaySherpa("/play", config),
  resources: makeResourcesSherpa("/", config),
  work: makeWorkSherpa("/work", config),
});

import {
  defaultSherpaConfig,
  type SherpaConfig,
  makeLinkResolver,
  type LinkResolver,
} from '../../../lib/sherpa';

export interface PlaySherpa {
  boardGames: LinkResolver;
  discGolf: LinkResolver;
  index: LinkResolver;
  reading: LinkResolver;
  videoGames: LinkResolver;
}

export const makePlaySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): PlaySherpa => ({
  boardGames: props => makeLinkResolver(`${path}/board-games`, props, config),
  discGolf: props => makeLinkResolver(`${path}/disc-golf`, props, config),
  index: props => makeLinkResolver(`${path}`, props, config),
  reading: props => makeLinkResolver(`${path}/reading`, props, config),
  videoGames: props => makeLinkResolver(`${path}/video-games`, props, config),
});

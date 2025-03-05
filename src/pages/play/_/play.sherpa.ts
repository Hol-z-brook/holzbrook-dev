import { makeLinkResolver, type LinkResolver } from '../../../lib/sherpa/util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from '../../../lib/sherpa/util/SherpaConfig';

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

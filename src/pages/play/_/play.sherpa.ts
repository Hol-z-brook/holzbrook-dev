import * as Sherpa from '../../../lib/sherpa';

export interface PlaySherpa {
  index: Sherpa.LinkResolver;
}

export const makePlaySherpa = (
  path: string,
  config: Sherpa.SherpaConfig = Sherpa.defaultSherpaConfig
): PlaySherpa => ({
  index: props => Sherpa.makeLinkResolver(`${path}`, props, config),
});

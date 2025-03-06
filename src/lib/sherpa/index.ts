import { makeLinkResolver, type LinkResolver } from './util/LinkResolver';
import { defaultSherpaConfig, type SherpaConfig } from './util/SherpaConfig';
import { makeResourcesSherpa, type ResourcesSherpa } from './resources.sherpa';

export { makeLinkResolver };
export { defaultSherpaConfig };
export { makeResourcesSherpa };

export type { LinkResolver, SherpaConfig, ResourcesSherpa };

export default {
  makeLinkResolver,
  defaultSherpaConfig,
  makeResourcesSherpa,
};

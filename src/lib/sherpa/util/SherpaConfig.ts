import type { FeatureFlags } from '../../FeatureFlags';

export interface SherpaConfig {
  featureFlags?: FeatureFlags;
}

export const defaultSherpaConfig = {
  featureFlags: {
    testPageEnabled: true,
  },
};

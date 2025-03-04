import { type AppFeatureFlags } from '../../app/AppFeatureFlags';

export interface SherpaConfig {
  featureFlags?: AppFeatureFlags;
}

export const defaultSherpaConfig = {
  featureFlags: {
    testPageEnabled: true,
  },
};

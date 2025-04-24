import type { LandingPageId } from './LandingPageId';

export interface LandingPageData {
  id: LandingPageId;
  title: string;
  subtitle?: string;
  intro?: string;
}

import type { PageId } from './PageId';

export interface AppPageData {
  id: PageId;
  title: string;
  subtitle?: string;
  intro?: string;
}

import { type AppPageData } from '../../../lib/app';

export interface AdminPageData extends AppPageData {
  id: string;
  title: string;
  subtitle: string;
}

export const adminPageData: AdminPageData = {
  id: 'admin',
  title: 'Admin Dashboard',
  subtitle: 'Site administration and configuration',
};

import AppLink from './AppLink.astro';
import AppLogo from './AppLogo.astro';
import AppLogoLink from './AppLogoLink.astro';
import AppNavMenu from './AppNavMenu.astro';
import AppNavMenuItem from './AppNavMenuItem.astro';
import AppPage from './AppPage.astro';
import AppPageBody from './AppPageBody.astro';
import AppPageFooter from './AppPageFooter.astro';
import AppPageHeader from './AppPageHeader.astro';
import AppPageSection from './AppPageSection.astro';

export type { AppPageMetaData } from './AppPageMetaData';

export default {
  Link: AppLink,
  Logo: AppLogo,
  LogoLink: AppLogoLink,
  NavMenu: AppNavMenu,
  NavMenuItem: AppNavMenuItem,
  Page: AppPage,
  PageBody: AppPageBody,
  PageFooter: AppPageFooter,
  PageHeader: AppPageHeader,
  PageSection: AppPageSection,
};

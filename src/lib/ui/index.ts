// Typography
import H1 from './typography/H1.astro';
import H2 from './typography/H2.astro';
import H3 from './typography/H3.astro';
import H4 from './typography/H4.astro';
import H5 from './typography/H5.astro';
import H6 from './typography/H6.astro';
import P from './typography/P.astro';
import Strong from './typography/Strong.astro';
import Em from './typography/Em.astro';
import Blockquote from './typography/Blockquote.astro';
import Code from './typography/Code.astro';
import Pre from './typography/Pre.astro';

// Layout
import Box from './layout/Box.astro';
import Stack from './layout/Stack.astro';
import HStack from './layout/HStack.astro';
import VStack from './layout/VStack.astro';
import Center from './layout/Center.astro';

// Buttons
import PrimaryButton from './button/PrimaryButton.astro';
import OutlinedButton from './button/OutlinedButton.astro';

// Page Header
import PageHeader from './page-header/PageHeader.astro';
import PageHeaderTitle from './page-header/PageHeaderTitle.astro';
import PageHeaderBody from './page-header/PageHeaderBody.astro';
import PageHeaderSubtitle from './page-header/PageHeaderSubtitle.astro';

// Lists
import Ul from './list/Ul.astro';
import Ol from './list/Ol.astro';
import Li from './list/Li.astro';

// Navigation
import Link from './navigation/Link.astro';
import Navigation from './navigation/Navigation.astro';
import BackLink from './navigation/BackLink.astro';

// Breadcrumbs
import BreadcrumbItem from './breadcrumb/BreadcrumbItem.astro';
import BreadcrumbList from './breadcrumb/BreadcrumbList.astro';

// Other
import Card from './Card.astro';
import GradientBackground from './GradientBackground.astro';

export default {
  // Typography
  Typography: {
    Heading: {
      H1,
      H2,
      H3,
      H4,
      H5,
      H6,
    },
    Text: {
      P,
      Strong,
      Em,
      Blockquote,
      Code,
      Pre,
    },
  },

  // Layout
  Layout: {
    Box,
    Flex: {
      Stack,
      HStack,
      VStack,
      Center,
    },
  },

  // Buttons
  Button: {
    Primary: PrimaryButton,
    Outlined: OutlinedButton,
  },

  // Page Header
  PageHeader: {
    Root: PageHeader,
    Title: PageHeaderTitle,
    Body: PageHeaderBody,
    Subtitle: PageHeaderSubtitle,
  },

  // Lists
  List: {
    Ul,
    Ol,
    Li,
  },

  // Navigation
  Navigation: {
    Link,
    Root: Navigation,
    BackLink,
  },

  // Breadcrumbs
  Breadcrumb: {
    Item: BreadcrumbItem,
    List: BreadcrumbList,
  },

  // Other
  Card,
  GradientBackground,
};

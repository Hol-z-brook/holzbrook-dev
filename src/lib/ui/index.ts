// Typography
import H1 from "./H1.astro";
import H2 from "./H2.astro";
import H3 from "./H3.astro";
import H4 from "./H4.astro";
import H5 from "./H5.astro";
import H6 from "./H6.astro";
import P from "./P.astro";
import Strong from "./Strong.astro";
import Em from "./Em.astro";
import Blockquote from "./Blockquote.astro";
import Code from "./Code.astro";
import Pre from "./Pre.astro";

// Layout
import Box from "./Box.astro";
import Stack from "./Stack.astro";
import HStack from "./HStack.astro";
import VStack from "./VStack.astro";
import Center from "./Center.astro";

// Buttons
import PrimaryButton from "./PrimaryButton.astro";
import OutlinedButton from "./OutlinedButton.astro";

// Page Header
import PageHeader from "./PageHeader.astro";
import PageHeaderTitle from "./PageHeaderTitle.astro";
import PageHeaderBody from "./PageHeaderBody.astro";
import PageHeaderSubtitle from "./PageHeaderSubtitle.astro";

// Lists
import Ul from "./Ul.astro";
import Ol from "./Ol.astro";
import Li from "./Li.astro";

// Navigation
import A from "./A.astro";
import Nav from "./Nav.astro";
import BackLink from "./BackLink.astro";

// Breadcrumbs
import Breadcrumb from "./Breadcrumb.astro";
import Breadcrumbs from "./Breadcrumbs.astro";

// Other
import Card from "./Card.astro";
import GradientBackground from "./GradientBackground.astro";

export default {
  // Typography
  Typography: {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Strong,
    Em,
    Blockquote,
    Code,
    Pre,
  },
  
  // Layout
  Layout: {
    Box,
    Stack,
    HStack,
    VStack,
    Center,
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
  Nav: {
    A,
    Nav,
    BackLink,
  },
  
  // Breadcrumbs
  Breadcrumb: {
    Item: Breadcrumb,
    List: Breadcrumbs,
  },
  
  // Other
  Card,
  GradientBackground,
}; 
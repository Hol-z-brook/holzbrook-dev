import type { AppPageData } from '../../../../lib/app';
import { makeHomeSherpa } from '../../../_/home.sherpa';

export interface ThemePageSection extends AppPageData {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  gradient: string;
}

export interface ThemePageData extends AppPageData {
  sections: ThemePageSection[];
}

const sherpa = makeHomeSherpa();

export const themePageData: ThemePageData = {
  id: 'theme',
  title: 'Design System',
  subtitle: 'Explore the building blocks of our design system',
  sections: [
    {
      id: 'colors',
      title: 'Colors',
      subtitle: 'Color scales, base colors, and gradients.',
      href: sherpa.admin.theme.colors({}),
      icon: '🎨',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      id: 'typography',
      title: 'Typography',
      subtitle: 'Font sizes, weights, and text styles.',
      href: sherpa.admin.theme.typography({}),
      icon: '✍️',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 'spacing',
      title: 'Spacing',
      subtitle: 'Margins, padding, and layout spacing.',
      href: sherpa.admin.theme.spacing({}),
      icon: '📏',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 'border-radius',
      title: 'Border Radius',
      subtitle: 'Corner radius values for components.',
      href: sherpa.admin.theme.borderRadius({}),
      icon: '⚪',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      id: 'shadows',
      title: 'Shadows',
      subtitle: 'Elevation and depth effects.',
      href: sherpa.admin.theme.shadows({}),
      icon: '🌗',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 'transitions',
      title: 'Transitions',
      subtitle: 'Motion and animation timings.',
      href: sherpa.admin.theme.transitions({}),
      icon: '✨',
      gradient: 'from-purple-500 to-pink-500',
    },
  ],
};

export default {
  themePageData,
};

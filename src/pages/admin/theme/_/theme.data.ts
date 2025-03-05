import type { AppPageData } from '../../../../lib/app';

export enum TransitionId {
  Default = 'default',
  Fast = 'fast',
  Delayed = 'delayed',
}

export enum TransitionType {
  Basic = 'basic',
  Advanced = 'advanced',
}

export enum TransitionCategory {
  ColorChanges = 'Color Changes',
  TransformEffects = 'Transform Effects',
}

export enum ColorId {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
}

export enum TypographyId {
  Body = 'body',
  Heading = 'heading',
  Display = 'display',
}

export enum ThemeSectionId {
  Transitions = 'transitions',
  Colors = 'colors',
  Typography = 'typography',
  Spacing = 'spacing',
  Shadows = 'shadows',
  BorderRadius = 'border-radius',
}

export interface ThemeExample {
  name: string;
  code: string;
  description?: string;
  preview?: string;
}

export interface ThemeProperty {
  name: string;
  value: string;
  description?: string;
  cssVariable?: string;
  tailwindClass?: string;
}

export interface ThemeTransition {
  id: TransitionId;
  name: string;
  value: string;
  description: string;
  examples: Array<{
    name: string;
    code: string;
    type: TransitionType;
    category: TransitionCategory;
  }>;
}

export interface ThemeColor {
  id: ColorId;
  name: string;
  value: string;
  description?: string;
  variants?: Record<string | number, string>;
}

export interface ThemeTypography {
  id: TypographyId;
  name: string;
  value: string;
  description: string;
  preview: string;
  usage: string[];
}

export interface ThemeSection {
  id: ThemeSectionId;
  title: string;
  description: string;
  properties: ThemeProperty[];
  examples: ThemeExample[];
}

export enum PageSectionId {
  Transitions = 'transitions',
  Colors = 'colors',
  Typography = 'typography',
  Spacing = 'spacing',
  Shadows = 'shadows',
  BorderRadius = 'border-radius',
}

export interface PageSection {
  id: PageSectionId;
  title: string;
  description: string;
}

export interface ColorsPageSection extends PageSection {
  colors: ThemeColor[];
  scales: Array<{
    name: string;
    description: string;
    colors: ThemeColor[];
  }>;
}

export interface TransitionsPageSection extends PageSection {
  transitions: ThemeTransition[];
  categories: Array<{
    name: TransitionCategory;
    description: string;
    examples: ThemeExample[];
  }>;
}

export interface TypographyPageSection extends PageSection {
  fonts: ThemeTypography[];
  sizes: Array<{
    name: string;
    value: string;
    usage: string;
  }>;
}

export interface ThemePageData extends AppPageData {
  sections: {
    transitions: TransitionsPageSection;
    colors: ColorsPageSection;
    typography: TypographyPageSection;
    spacing: PageSection;
    shadows: PageSection;
    borderRadius: PageSection;
  };
}

export const pageData: ThemePageData = {
  id: 'theme',
  title: 'Design System',
  subtitle: 'Explore the building blocks of our design system',
  sections: {
    transitions: {
      id: PageSectionId.Transitions,
      title: 'Transitions',
      description:
        'Our transition system provides consistent motion and animation timing to create smooth and delightful interactions.',
      transitions: [
        {
          id: TransitionId.Default,
          name: 'default',
          value: '300ms ease-in-out',
          description: 'Standard transition timing for most interactions',
          examples: [
            {
              name: 'Color Change',
              code: 'transition: background-color 300ms ease-in-out',
              type: TransitionType.Basic,
              category: TransitionCategory.ColorChanges,
            },
            {
              name: 'Scale Effect',
              code: 'transition: transform 300ms ease-in-out',
              type: TransitionType.Advanced,
              category: TransitionCategory.TransformEffects,
            },
          ],
        },
        {
          id: TransitionId.Fast,
          name: 'fast',
          value: '150ms ease-in-out',
          description: 'Quick transition for subtle interactions',
          examples: [
            {
              name: 'Quick Color',
              code: 'transition: background-color 150ms ease-in-out',
              type: TransitionType.Basic,
              category: TransitionCategory.ColorChanges,
            },
          ],
        },
        {
          id: TransitionId.Delayed,
          name: 'delayed',
          value: '500ms ease-in-out',
          description: 'Slower transition for more dramatic effects',
          examples: [
            {
              name: 'Delayed Transform',
              code: 'transition: transform 500ms ease-in-out',
              type: TransitionType.Advanced,
              category: TransitionCategory.TransformEffects,
            },
          ],
        },
      ],
      categories: [
        {
          name: TransitionCategory.ColorChanges,
          description: 'Simple transitions for common interactions',
          examples: [
            {
              name: 'Color Change',
              code: '<div class="transition-colors hover:bg-primary-200">Hover me</div>',
              description: 'Basic color transition on hover',
            },
            {
              name: 'Opacity',
              code: '<div class="transition-opacity hover:opacity-50">Fade effect</div>',
              description: 'Simple opacity transition',
            },
          ],
        },
        {
          name: TransitionCategory.TransformEffects,
          description: 'Complex transitions combining multiple properties',
          examples: [
            {
              name: 'Combined Effects',
              code: '<div class="transition-all hover:scale-105 hover:bg-primary-200">Scale and color</div>',
              description: 'Multiple properties transitioning together',
            },
            {
              name: 'Transform',
              code: '<div class="transition-transform hover:translate-x-2">Move me</div>',
              description: 'Transform-based transitions',
            },
          ],
        },
      ],
    },
    colors: {
      id: PageSectionId.Colors,
      title: 'Colors',
      description:
        'Our color system is designed to create consistent, accessible, and beautiful interfaces',
      colors: [
        {
          id: ColorId.Primary,
          name: 'primary',
          value: '#3B82F6',
          description: 'Primary brand color',
          variants: {
            100: '#EBF5FF',
            500: '#3B82F6',
            900: '#1E3A8A',
          },
        },
      ],
      scales: [],
    },
    typography: {
      id: PageSectionId.Typography,
      title: 'Typography',
      description: 'A type system that establishes a clear visual hierarchy',
      fonts: [
        {
          id: TypographyId.Body,
          name: 'body',
          value: 'Inter',
          description: 'Main text font used throughout the application',
          preview: 'The quick brown fox jumps over the lazy dog',
          usage: ['Body text', 'UI elements', 'Form inputs'],
        },
      ],
      sizes: [
        {
          name: 'text-sm',
          value: '0.875rem',
          usage: 'Small text, captions, and helper text',
        },
      ],
    },
    spacing: {
      id: PageSectionId.Spacing,
      title: 'Spacing',
      description: 'Consistent spacing scales for margin and padding',
    },
    shadows: {
      id: PageSectionId.Shadows,
      title: 'Shadows',
      description: 'Elevation system using box shadows',
    },
    borderRadius: {
      id: PageSectionId.BorderRadius,
      title: 'Border Radius',
      description: 'Rounded corners for various UI elements',
    },
  },
};

export default {
  pageData,
};

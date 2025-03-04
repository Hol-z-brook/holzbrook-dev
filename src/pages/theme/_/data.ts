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
  name: string;
  value: string;
  description: string;
  examples: Array<{
    name: string;
    code: string;
    type: 'basic' | 'advanced';
    category: string;
  }>;
}

export interface ThemeColor {
  name: string;
  value: string;
  description?: string;
  variants?: Record<string | number, string>;
}

export interface ThemeTypography {
  name: string;
  value: string;
  description: string;
  preview: string;
  usage: string[];
}

export interface ThemeSection {
  id: string;
  title: string;
  description: string;
  properties: ThemeProperty[];
  examples: ThemeExample[];
}

export interface ThemeContent {
  pageTitle: string;
  pageSubtitle: string;
  sections: {
    transitions: {
      title: string;
      description: string;
      transitions: ThemeTransition[];
      categories: Array<{
        name: string;
        description: string;
        examples: ThemeExample[];
      }>;
    };
    colors: {
      title: string;
      description: string;
      colors: ThemeColor[];
      scales: Array<{
        name: string;
        description: string;
        colors: ThemeColor[];
      }>;
    };
    typography: {
      title: string;
      description: string;
      fonts: ThemeTypography[];
      sizes: Array<{
        name: string;
        value: string;
        usage: string;
      }>;
    };
    spacing: ThemeSection;
    shadows: ThemeSection;
    borderRadius: ThemeSection;
  };
}

export const themeContent: ThemeContent = {
  pageTitle: 'Design System',
  pageSubtitle: 'Explore the building blocks of our design system',
  sections: {
    transitions: {
      title: 'Transitions',
      description:
        'Our transition system provides consistent motion and animation timing to create smooth and delightful interactions.',
      transitions: [
        {
          name: 'default',
          value: '300ms ease-in-out',
          description: 'Standard transition timing for most interactions',
          examples: [
            {
              name: 'Color Change',
              code: 'transition: background-color 300ms ease-in-out',
              type: 'basic',
              category: 'Color Changes',
            },
            {
              name: 'Scale Effect',
              code: 'transition: transform 300ms ease-in-out',
              type: 'advanced',
              category: 'Transform Effects',
            },
          ],
        },
        {
          name: 'fast',
          value: '150ms ease-in-out',
          description: 'Quick transition for subtle interactions',
          examples: [
            {
              name: 'Quick Color',
              code: 'transition: background-color 150ms ease-in-out',
              type: 'basic',
              category: 'Color Changes',
            },
          ],
        },
        {
          name: 'delayed',
          value: '500ms ease-in-out',
          description: 'Slower transition for more dramatic effects',
          examples: [
            {
              name: 'Delayed Transform',
              code: 'transition: transform 500ms ease-in-out',
              type: 'advanced',
              category: 'Transform Effects',
            },
          ],
        },
      ],
      categories: [
        {
          name: 'Basic Transitions',
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
          name: 'Advanced Transitions',
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
      title: 'Colors',
      description:
        'Our color system is designed to create consistent, accessible, and beautiful interfaces',
      colors: [
        {
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
      title: 'Typography',
      description: 'A type system that establishes a clear visual hierarchy',
      fonts: [
        {
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
      id: 'spacing',
      title: 'Spacing',
      description: 'Consistent spacing scales for margin and padding',
      properties: [],
      examples: [],
    },
    shadows: {
      id: 'shadows',
      title: 'Shadows',
      description: 'Elevation system using box shadows',
      properties: [],
      examples: [],
    },
    borderRadius: {
      id: 'border-radius',
      title: 'Border Radius',
      description: 'Rounded corners for various UI elements',
      properties: [],
      examples: [],
    },
  },
};

export default {
  themeContent,
};

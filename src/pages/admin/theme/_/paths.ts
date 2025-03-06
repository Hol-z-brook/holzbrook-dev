export const paths = {
  borderRadius: 'border-radius',
  colors: 'colors',
  typography: 'typography',
  spacing: 'spacing',
  shadows: 'shadows',
  transitions: 'transitions',
} as const;

export type ThemePath = keyof typeof paths;

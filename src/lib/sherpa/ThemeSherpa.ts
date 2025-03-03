import { type SherpaConfig } from './util/SherpaConfig';

export interface ThemeSherpa {
  index: () => string;
  colors: () => string;
  typography: () => string;
  spacing: () => string;
  borderRadius: () => string;
  shadows: () => string;
  transitions: () => string;
}

export function makeThemeSherpa(basePath: string, config: SherpaConfig): ThemeSherpa {
  return {
    index: () => basePath,
    colors: () => `${basePath}/colors`,
    typography: () => `${basePath}/typography`,
    spacing: () => `${basePath}/spacing`,
    borderRadius: () => `${basePath}/border-radius`,
    shadows: () => `${basePath}/shadows`,
    transitions: () => `${basePath}/transitions`,
  };
}

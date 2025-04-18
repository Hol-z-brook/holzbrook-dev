/**
 * Base interface for all icon components in the application.
 * Provides consistent prop types for size, color, and styling.
 */
export interface IconProps {
  /** Additional CSS classes to apply to the icon */
  class?: string;
  /** The size of the icon in Tailwind units (defaults to 5) */
  size?: number;
  /** The color of the icon (defaults to currentColor) */
  color?: string;
  /** Whether the icon should be filled or outlined (defaults to false) */
  filled?: boolean;
}

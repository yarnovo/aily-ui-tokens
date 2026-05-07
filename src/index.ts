/**
 * xhs-ui design tokens (TypeScript 常量版)
 *
 * 平时直接用 CSS variable: var(--xui-bg)
 * JS 里要拿 token 值时用这里的常量
 */

export const colors = {
  gray: {
    1: 'var(--xui-gray-1)',
    2: 'var(--xui-gray-2)',
    3: 'var(--xui-gray-3)',
    4: 'var(--xui-gray-4)',
    5: 'var(--xui-gray-5)',
    6: 'var(--xui-gray-6)',
    7: 'var(--xui-gray-7)',
    8: 'var(--xui-gray-8)',
    9: 'var(--xui-gray-9)',
    10: 'var(--xui-gray-10)',
    11: 'var(--xui-gray-11)',
    12: 'var(--xui-gray-12)',
  },
  accent: {
    1: 'var(--xui-accent-1)',
    3: 'var(--xui-accent-3)',
    6: 'var(--xui-accent-6)',
    9: 'var(--xui-accent-9)',
    10: 'var(--xui-accent-10)',
    11: 'var(--xui-accent-11)',
  },
} as const

export const semantic = {
  bg: 'var(--xui-bg)',
  bgSubtle: 'var(--xui-bg-subtle)',
  bgHover: 'var(--xui-bg-hover)',
  bgActive: 'var(--xui-bg-active)',
  bgElevated: 'var(--xui-bg-elevated)',
  fg: 'var(--xui-fg)',
  fgMuted: 'var(--xui-fg-muted)',
  fgSubtle: 'var(--xui-fg-subtle)',
  fgInverse: 'var(--xui-fg-inverse)',
  border: 'var(--xui-border)',
  borderSubtle: 'var(--xui-border-subtle)',
  borderStrong: 'var(--xui-border-strong)',
  accent: 'var(--xui-accent)',
  accentFg: 'var(--xui-accent-fg)',
} as const

export const space = {
  0: 'var(--xui-space-0)',
  1: 'var(--xui-space-1)',
  2: 'var(--xui-space-2)',
  3: 'var(--xui-space-3)',
  4: 'var(--xui-space-4)',
  5: 'var(--xui-space-5)',
  6: 'var(--xui-space-6)',
  8: 'var(--xui-space-8)',
  10: 'var(--xui-space-10)',
  12: 'var(--xui-space-12)',
  16: 'var(--xui-space-16)',
} as const

export const radius = {
  none: 'var(--xui-radius-none)',
  sm: 'var(--xui-radius-sm)',
  md: 'var(--xui-radius-md)',
  lg: 'var(--xui-radius-lg)',
  xl: 'var(--xui-radius-xl)',
  '2xl': 'var(--xui-radius-2xl)',
  full: 'var(--xui-radius-full)',
} as const

export const text = {
  xs: 'var(--xui-text-xs)',
  sm: 'var(--xui-text-sm)',
  base: 'var(--xui-text-base)',
  md: 'var(--xui-text-md)',
  lg: 'var(--xui-text-lg)',
  xl: 'var(--xui-text-xl)',
  '2xl': 'var(--xui-text-2xl)',
  '3xl': 'var(--xui-text-3xl)',
} as const

export const weight = {
  regular: 'var(--xui-weight-regular)',
  medium: 'var(--xui-weight-medium)',
  semibold: 'var(--xui-weight-semibold)',
  bold: 'var(--xui-weight-bold)',
} as const

export const leading = {
  tight: 'var(--xui-leading-tight)',
  snug: 'var(--xui-leading-snug)',
  normal: 'var(--xui-leading-normal)',
  relaxed: 'var(--xui-leading-relaxed)',
} as const

export const shadow = {
  none: 'var(--xui-shadow-none)',
  sm: 'var(--xui-shadow-sm)',
  md: 'var(--xui-shadow-md)',
  lg: 'var(--xui-shadow-lg)',
} as const

export const transition = {
  easeOut: 'var(--xui-ease-out)',
  easeInOut: 'var(--xui-ease-in-out)',
  durationFast: 'var(--xui-duration-fast)',
  durationBase: 'var(--xui-duration-base)',
  durationSlow: 'var(--xui-duration-slow)',
} as const

export const z = {
  base: 'var(--xui-z-base)',
  sticky: 'var(--xui-z-sticky)',
  overlay: 'var(--xui-z-overlay)',
  modal: 'var(--xui-z-modal)',
  toast: 'var(--xui-z-toast)',
} as const

export const fontFamily = {
  sans: 'var(--xui-font-sans)',
  mono: 'var(--xui-font-mono)',
} as const

export const tokens = {
  colors,
  semantic,
  space,
  radius,
  text,
  weight,
  leading,
  shadow,
  transition,
  z,
  fontFamily,
} as const

export type Tokens = typeof tokens

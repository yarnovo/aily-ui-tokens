/**
 * akong design tokens (跨端 · Web + React Native)
 *
 * 真值 (hex / px) - 跨端通用 · RN 直接用
 *   import { tokens } from '@akong/tokens'
 *   <View style={{ backgroundColor: tokens.light.bg }} />
 *
 * Web 用 CSS variables (CSS 高效 · 暗色自动切)
 *   import '@akong/tokens/style.css'
 *   <div style={{ background: 'var(--ak-bg)' }} />
 *
 * Web 用 cssVars (TS 类型安全的 var() 字符串)
 *   import { cssVars } from '@akong/tokens'
 *   <div style={{ background: cssVars.bg }} />
 */

// === 真值层 (hex · 跨端通吃) ===

const lightPalette = {
  gray1: '#fcfcfc',
  gray2: '#f5f5f5',
  gray3: '#ededed',
  gray4: '#e3e3e3',
  gray5: '#d8d8d8',
  gray6: '#c5c5c5',
  gray7: '#adadad',
  gray8: '#818181',
  gray9: '#636363',
  gray10: '#535353',
  gray11: '#3a3a3a',
  gray12: '#181818',

  accent1: '#fefcfc',
  accent3: '#f8e1e5',
  accent6: '#f4a8b6',
  accent9: '#e8456a',
  accent10: '#d62f5b',
  accent11: '#b91d4d',
} as const

const darkPalette = {
  gray1: '#1c1c1c',
  gray2: '#242424',
  gray3: '#2c2c2c',
  gray4: '#353535',
  gray5: '#3e3e3e',
  gray6: '#4a4a4a',
  gray7: '#5b5b5b',
  gray8: '#757575',
  gray9: '#909090',
  gray10: '#a0a0a0',
  gray11: '#c0c0c0',
  gray12: '#f0f0f0',

  accent1: '#2a1c1e',
  accent3: '#4a2230',
  accent6: '#80344f',
  accent9: '#e8456a',
  accent10: '#ee5e7d',
  accent11: '#f08699',
} as const

function makeSemantic<P extends typeof lightPalette>(p: P) {
  return {
    bg: p.gray1,
    bgSubtle: p.gray2,
    bgHover: p.gray3,
    bgActive: p.gray4,
    bgElevated: p.gray1,
    fg: p.gray12,
    fgMuted: p.gray11,
    fgSubtle: p.gray9,
    fgInverse: p.gray1,
    border: p.gray6,
    borderSubtle: p.gray5,
    borderStrong: p.gray8,
    accent: p.accent9,
    accentFg: p.gray1,

    // 12 阶完整露出 (高级用法)
    gray1: p.gray1, gray2: p.gray2, gray3: p.gray3, gray4: p.gray4,
    gray5: p.gray5, gray6: p.gray6, gray7: p.gray7, gray8: p.gray8,
    gray9: p.gray9, gray10: p.gray10, gray11: p.gray11, gray12: p.gray12,
    accent1: p.accent1, accent3: p.accent3, accent6: p.accent6,
    accent9: p.accent9, accent10: p.accent10, accent11: p.accent11,
  }
}

export const lightTokens = makeSemantic(lightPalette)
export const darkTokens = makeSemantic(darkPalette)

/** 默认导出 light · RN 切主题用 useColorScheme + 在这切 light/dark */
export const tokens = {
  light: lightTokens,
  dark: darkTokens,

  // 平台无关 (无 light/dark 区分)
  space: {
    0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24,
    8: 32, 10: 40, 12: 48, 16: 64,
  },
  radius: {
    none: 0, sm: 4, md: 8, lg: 12, xl: 16, '2xl': 20, full: 9999,
  },
  text: {
    xs: 11, sm: 13, base: 15, md: 16, lg: 18, xl: 22, '2xl': 28, '3xl': 34,
  },
  weight: {
    regular: '400', medium: '500', semibold: '600', bold: '700',
  },
  leading: {
    tight: 1.2, snug: 1.35, normal: 1.5, relaxed: 1.65,
  },
  duration: {
    fast: 120, base: 180, slow: 280,
  },
  z: {
    base: 0, sticky: 20, overlay: 40, modal: 50, toast: 60,
  },
  fontSans: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
  touchMin: 44,
} as const

// === Web 专用 · CSS variables 字符串 (用 var() 而不是 hex · 让暗色 CSS 自动切) ===

export const cssVars = {
  bg: 'var(--ak-bg)',
  bgSubtle: 'var(--ak-bg-subtle)',
  bgHover: 'var(--ak-bg-hover)',
  bgActive: 'var(--ak-bg-active)',
  bgElevated: 'var(--ak-bg-elevated)',
  fg: 'var(--ak-fg)',
  fgMuted: 'var(--ak-fg-muted)',
  fgSubtle: 'var(--ak-fg-subtle)',
  fgInverse: 'var(--ak-fg-inverse)',
  border: 'var(--ak-border)',
  borderSubtle: 'var(--ak-border-subtle)',
  borderStrong: 'var(--ak-border-strong)',
  accent: 'var(--ak-accent)',
  accentFg: 'var(--ak-accent-fg)',

  space: {
    0: 'var(--ak-space-0)', 1: 'var(--ak-space-1)', 2: 'var(--ak-space-2)',
    3: 'var(--ak-space-3)', 4: 'var(--ak-space-4)', 5: 'var(--ak-space-5)',
    6: 'var(--ak-space-6)', 8: 'var(--ak-space-8)', 10: 'var(--ak-space-10)',
    12: 'var(--ak-space-12)', 16: 'var(--ak-space-16)',
  },
  radius: {
    none: 'var(--ak-radius-none)', sm: 'var(--ak-radius-sm)',
    md: 'var(--ak-radius-md)', lg: 'var(--ak-radius-lg)',
    xl: 'var(--ak-radius-xl)', '2xl': 'var(--ak-radius-2xl)',
    full: 'var(--ak-radius-full)',
  },
  text: {
    xs: 'var(--ak-text-xs)', sm: 'var(--ak-text-sm)',
    base: 'var(--ak-text-base)', md: 'var(--ak-text-md)',
    lg: 'var(--ak-text-lg)', xl: 'var(--ak-text-xl)',
    '2xl': 'var(--ak-text-2xl)', '3xl': 'var(--ak-text-3xl)',
  },
  shadow: {
    none: 'var(--ak-shadow-none)', sm: 'var(--ak-shadow-sm)',
    md: 'var(--ak-shadow-md)', lg: 'var(--ak-shadow-lg)',
  },
} as const

export type Tokens = typeof tokens
export type LightTokens = typeof lightTokens
export type DarkTokens = typeof darkTokens

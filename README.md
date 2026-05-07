# @akong/tokens

akong 设计 token 底座 · **跨端**（Web + React Native）· 公司全产品共用一套。

## Demo

[GitHub Pages 演示](https://yarnovo.github.io/akong-tokens/)

## 安装

```bash
npm i github:yarnovo/akong-tokens
```

## Web 用法

```ts
// main.tsx 顶部 import 一次
import '@akong/tokens/style.css'
import '@akong/tokens/style.dark.css'  // 暗色覆盖 (跟系统 + .dark class)
```

```tsx
// CSS 里直接 var()
.my-card {
  background: var(--ak-bg-elevated);
  color: var(--ak-fg);
  padding: var(--ak-space-4);
  border-radius: var(--ak-radius-lg);
}
```

```tsx
// JS 里要 var() 字符串 (类型安全 · 自动跟暗色)
import { cssVars } from '@akong/tokens'

<div style={{ background: cssVars.bg, padding: cssVars.space[4] }} />
```

## React Native 用法

RN 没 CSS · 直接拿 hex 真值：

```tsx
import { useColorScheme } from 'react-native'
import { tokens } from '@akong/tokens'

function MyView() {
  const scheme = useColorScheme()  // 'light' | 'dark' | null
  const t = scheme === 'dark' ? tokens.dark : tokens.light

  return (
    <View
      style={{
        backgroundColor: t.bg,
        padding: tokens.space[4],
        borderRadius: tokens.radius.lg,
      }}
    >
      <Text style={{ color: t.fg, fontSize: tokens.text.base }}>Hello</Text>
    </View>
  )
}
```

## Token 分类

| 维度 | scale | Web | RN |
|---|---|---|---|
| Color · gray | 1-12 | `var(--ak-gray-N)` | `tokens.light.grayN` |
| Color · accent | 1/3/6/9/10/11 | `var(--ak-accent-N)` | `tokens.light.accentN` |
| Semantic | bg/fg/border/accent | `var(--ak-bg)` 等 | `tokens.light.bg` 等 |
| Space | 0/1/2/3/4/5/6/8/10/12/16 | `var(--ak-space-N)` | `tokens.space[N]` (number px) |
| Radius | none/sm/md/lg/xl/2xl/full | `var(--ak-radius-X)` | `tokens.radius.X` |
| Text | xs/sm/base/md/lg/xl/2xl/3xl | `var(--ak-text-X)` | `tokens.text.X` (number px) |
| Weight | regular/medium/semibold/bold | `var(--ak-weight-X)` | `tokens.weight.X` (string) |

## 暗色

**Web · 自动**
- 跟系统：`prefers-color-scheme: dark` 媒体查询自动切
- 强制：`<html class="dark">` 或 `<html data-theme="dark">`

**RN · 手动**
- `useColorScheme()` hook 拿当前主题
- 切 `tokens.light` ↔ `tokens.dark`

## 组件库怎么用 token

每个 akong 组件 (akong-button / akong-note-card 等) 都引这个底座：

```tsx
// akong-button/src/Button.tsx
import { cssVars } from '@akong/tokens'   // Web 用
// or
import { tokens } from '@akong/tokens'    // RN 用

export const buttonStyle = {
  background: cssVars.accent,
  color: cssVars.accentFg,
  padding: `${cssVars.space[2]} ${cssVars.space[4]}`,
}
```

改一处 token · 所有组件自动跟新。

## 命名约定

- CSS variables 前缀 `--ak-*` (短 · 防撞)
- npm scope `@akong/*`
- 仓名 `akong-*` (无 -ui- 中缀 · 跟现有 akong-app / akong-pwa 对齐)

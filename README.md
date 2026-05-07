# @xhs-ui/tokens

xhs-ui 设计 token 底座 · 所有组件用 `var(--xui-*)` 取这里。

## Demo

[GitHub Pages 演示](https://yarnovo.github.io/xhs-ui-tokens/) — 色板 / 字号 / 间距 / 圆角 / 阴影 一目了然。

## 用法

```bash
npm i github:yarnovo/xhs-ui-tokens
```

```ts
// 引一次 css · 全局 CSS variables 就位
import '@xhs-ui/tokens/style.css'
import '@xhs-ui/tokens/style.dark.css'  // 暗色覆盖 (跟系统 + .dark class)
```

```tsx
// JS 里拿 token (类型安全)
import { tokens } from '@xhs-ui/tokens'

const style = {
  background: tokens.semantic.bg,
  color: tokens.semantic.fg,
  padding: tokens.space[4],
  borderRadius: tokens.radius.lg,
}
```

或者 CSS 里直接用：

```css
.my-card {
  background: var(--xui-bg-elevated);
  color: var(--xui-fg);
  padding: var(--xui-space-4);
  border-radius: var(--xui-radius-lg);
  box-shadow: var(--xui-shadow-sm);
  transition: background var(--xui-duration-base) var(--xui-ease-out);
}
```

## Token 分类

| 维度 | scale | 说明 |
|---|---|---|
| Color · gray | 1-12 | Radix 风 12 阶语义化灰 (1=最浅背景 · 12=主文字) |
| Color · accent | 1/3/6/9/10/11 | 红色 (CTA / 价格 / 心) · 9 是主色 |
| Semantic | bg / fg / border / accent | 组件用这层 · 不直接用 scale |
| Space | 0/1/2/3/4/5/6/8/10/12/16 | 4px 基准 |
| Radius | none/sm/md/lg/xl/2xl/full | |
| Text | xs/sm/base/md/lg/xl/2xl/3xl | iOS native 字阶 |
| Weight | regular/medium/semibold/bold | |
| Leading | tight/snug/normal/relaxed | |
| Shadow | none/sm/md/lg | 极克制 |
| Transition | easeOut / easeInOut / fast/base/slow | |
| Z | base/sticky/overlay/modal/toast | |

## 暗色

两种触发：
1. **跟系统** · `prefers-color-scheme: dark` 自动切
2. **手动** · `<html class="dark">` 或 `<html data-theme="dark">` 强制切

引入 `style.dark.css` 后两种都会生效。

## 命名约定

所有 CSS variables 用 `--xui-*` 前缀 · 防跟用方现有 token 撞。

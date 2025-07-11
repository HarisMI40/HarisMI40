import type { BundledShikiTheme } from 'astro-expressive-code'

export type NavLink = {
  name: string
  url: string
  external?: boolean
}

export interface ThemeStyles {
  foreground?: string[],
  background?: string[],
  accent?: string[],
  h1?: string[],
  h2?: string[],
  h3?: string[],
  h4?: string[],
  h5?: string[],
  h6?: string[],
  li?: string[],
  hr?: string[],
  italic?: string[],
  a?: string[],
}

export interface ThemeConfig {
  displayName: string
  identifier: string
  theme: BundledShikiTheme 
  overrides?: ThemeStyles,
}

export interface SiteConfig {
  themeConfigs: ThemeConfig[]
  themeMode: "single" | "light-dark" | "select"
  themeDefault: string
  font: string
  title: string
}

import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  site: 'https://astro-terminal-theme.com',
  title: "Terminal",
  description: "A terminal-inspired Astro theme",
  font: 'JetBrains Mono Variable',
  themeMode: "select",
  themeDefault: "everforest-dark", // Default theme identifier
  // https://expressive-code.com/guides/themes/#using-bundled-themes
  themes: [
    'everforest-dark', 'everforest-light', 'kanagawa-wave', 'catppuccin-frappe', 'synthwave-84', 'rose-pine-dawn', 'github-light-high-contrast', 'tokyo-night', 'nord', 'one-dark-pro'
  ],
}

export default config

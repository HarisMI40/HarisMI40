import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  title: "Terminal",
  font: 'JetBrains Mono Variable',
  themeMode: "select",
  themeDefault: "everforest-dark", // Default theme identifier
  // https://expressive-code.com/guides/themes/#using-bundled-themes
  themes: [
    'everforest-dark', 'everforest-light', 'kanagawa-wave', 'catppuccin-frappe', 'synthwave-84', 'rose-pine-dawn', 'github-light-high-contrast', 'tokyo-night', 'nord', 'one-dark-pro'
  ],
}

// name: 'kanagawa-wave',
// name: 'catppuccin-frappe',
// name: 'synthwave-84',
// name: 'rose-pine-dawn',
// name: 'github-light-high-contrast',
// name: 'tokyo-night',
// name: 'nord',
// name: 'one-dark-pro',

export default config

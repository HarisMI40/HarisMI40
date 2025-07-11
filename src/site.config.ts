import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  title: "Terminal",
  font: 'JetBrains Mono Variable',
  themeMode: "light-dark",
  themeDefault: "auto", // Default theme identifier
  // https://expressive-code.com/guides/themes/#using-bundled-themes
  themeConfigs: [
    {
      displayName: 'Everforest Light',
      identifier: 'everforest-light',
      theme: 'everforest-light',
    },
    {
      displayName: 'Everforest Dark',
      identifier: 'everforest-dark',
      theme: 'everforest-dark',
    }
  ]
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

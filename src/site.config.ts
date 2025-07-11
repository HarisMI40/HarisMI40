import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  title: "Terminal",
  font: 'JetBrains Mono Variable',
  themeConfigs: [
    {
      displayName: 'Everforest Dark',
      identifier: 'everforest-dark',
      theme: 'everforest-dark',
    },
    {
      displayName: 'Kanagawa Wave',
      identifier: 'kanagawa-wave',
      theme: 'kanagawa-wave',
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

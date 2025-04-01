import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  title: "Terminal",
  theme: {
    name: 'github-dark',
    font: 'JetBrains Mono Variable',
    accent: 'terminal.ansiBrightGreen',
    foreground: "editor.foreground",
    background: "editor.background"
  }
}

export default config

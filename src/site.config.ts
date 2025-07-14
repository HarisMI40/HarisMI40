import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  site: 'https://github.io/stelcodes/sweetterm',
  title: "SweetTerm",
  description: "A terminal-inspired Astro theme",
  font: 'JetBrains Mono Variable',
  pageSize: 5,
  themeMode: "select",
  themeDefault: "everforest-dark", // Default theme identifier
  // https://expressive-code.com/guides/themes/#using-bundled-themes
  themes: [
    'everforest-dark', 'everforest-light', 'kanagawa-wave', 'catppuccin-frappe', 'synthwave-84', 'rose-pine-dawn', 'github-light-high-contrast', 'tokyo-night', 'nord', 'one-dark-pro'
  ],
  socialLinks: {
    github: 'https://github.com/stelcodes/sweetterm',
    mastodon: 'https://github.com/stelcodes/sweetterm',
    email: 'https://github.com/stelcodes/sweetterm',
    linkedin: 'https://github.com/stelcodes/sweetterm',
    bluesky: 'https://github.com/stelcodes/sweetterm',
    twitter: 'https://github.com/stelcodes/sweetterm',
  }
}

export default config

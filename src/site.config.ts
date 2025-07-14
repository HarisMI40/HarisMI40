import type { SiteConfig } from '@types'
import '@fontsource-variable/jetbrains-mono'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://github.io/stelcodes/sweetterm',
  // The name of your site, used in the title and for SEO.
  title: "SweetTerm",
  // The description of your site, used for SEO and RSS feed.
  description: "A terminal-inspired Astro theme",
  // Font imported from @fontsource or elsewhere, used for the entire site.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The theming mode. One of "single" | "select" | "light-dark-auto".
  themeMode: "select",
  // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
  // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
  themeDefault: "everforest-dark",
  // Shiki themes to bundle with the site.
  // These will be used to theme the entire site along with syntax highlighting.
  // https://expressive-code.com/guides/themes/#using-bundled-themes
  themes: [
    'andromeeda',
    'aurora-x',
    'ayu-dark',
    'catppuccin-frappe',
    'catppuccin-latte',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'dark-plus',
    'dracula',
    'dracula-soft',
    'everforest-dark',
    'everforest-light',
    'github-dark',
    'github-dark-default',
    'github-dark-dimmed',
    'github-dark-high-contrast',
    'github-light',
    'github-light-default',
    'github-light-high-contrast',
    'gruvbox-dark-hard',
    'gruvbox-dark-medium',
    'gruvbox-dark-soft',
    'gruvbox-light-hard',
    'gruvbox-light-medium',
    'gruvbox-light-soft',
    'houston',
    'kanagawa-dragon',
    'kanagawa-lotus',
    'kanagawa-wave',
    'laserwave',
    'light-plus',
    'material-theme',
    'material-theme-darker',
    'material-theme-lighter',
    'material-theme-ocean',
    'material-theme-palenight',
    'min-dark',
    'min-light',
    'monokai',
    'night-owl',
    'nord',
    'one-dark-pro',
    'one-light',
    'plastic',
    'poimandres',
    'red',
    'rose-pine',
    'rose-pine-dawn',
    'rose-pine-moon',
    'slack-dark',
    'slack-ochin',
    'snazzy-light',
    'solarized-dark',
    'solarized-light',
    'synthwave-84',
    'tokyo-night',
    'vesper',
    'vitesse-black',
    'vitesse-dark',
    'vitesse-light',
  ],
   // Social links to display in the footer.
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

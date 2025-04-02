import type { ExpressiveCodeTheme } from "astro-expressive-code";

export function dateString(date: Date) {
  return date.toISOString().split('T')[0];
}

export function flattenThemeColors(theme: ExpressiveCodeTheme): { [key: string]: string } {
  const scopedThemeSettings = theme.settings.reduce(
    (acc, item) => {
      const { scope, settings } = item
      const { foreground } = settings
      if (scope && foreground) {
        for (const s of scope) {
          acc[`${s}.foreground`] = foreground
        }
      }
      return acc
    },
    {} as { [key: string]: string },
  )
  return { ...theme.colors, ...scopedThemeSettings }
}

export function headingColor(level: number, themeColors: { [key: string]: string }): string | undefined {
  return (
    themeColors[`heading.${level}.markdown entity.name`] ||
    themeColors['markup.heading.foreground'] ||
    undefined
  )
}

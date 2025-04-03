import type { ExpressiveCodeTheme } from "astro-expressive-code";

export function dateString(date: Date) {
  return date.toISOString().split('T')[0];
}

export function headingColor(level: number, themeColors: { [key: string]: string }): string | undefined {
  return (
    themeColors[`heading.${level}.markdown entity.name`] ||
    themeColors['markup.heading.foreground'] ||
    undefined
  )
}

export function resolveElementStyles(
  elementStyles: { [key: string]: string[] },
  theme: ExpressiveCodeTheme,
): { [key: string]: string } {
  let result: { [key: string]: string } = {}
  function flattenThemeColors(theme: ExpressiveCodeTheme): { [key: string]: string } {
    const scopedThemeSettings = theme.settings.reduce(
      (acc, item) => {
        const { scope, settings } = item
        const { foreground } = settings
        if (scope && foreground) {
          for (const s of scope) {
            acc[s] = foreground
          }
        }
        return acc
      },
      {} as { [key: string]: string },
    )
    return { ...theme.colors, ...scopedThemeSettings }
  }
  const t = flattenThemeColors(theme)
  console.log(t)
  Object.entries(elementStyles).forEach(([key, value]) => {
    for (const x of value) {
      if (t[x]) {
        result[key] = t[x]
        break
      }
    }
  });
  return result
}

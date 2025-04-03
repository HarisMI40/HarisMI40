import type { ThemeStyles } from "@types";
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
  theme: ExpressiveCodeTheme,
  overrides?: ThemeStyles,
): { [key: string]: string } {
  const defaultStyles: ThemeStyles = {
    foreground: ['editor.foreground'],
    background: ['editor.background'],
    accent: [
      'heading.1.markdown entity.name',
      'heading.1.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    anchor: [
      // 'punctuation.definition.heading.markdown',
      // 'heading.1.markdown punctuation.definition.heading.markdown',
      'inherit'
    ],
    h1: [
      'heading.1.markdown entity.name',
      'heading.1.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    h2: [
      'heading.2.markdown entity.name',
      'heading.2.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    h3: [
      'heading.3.markdown entity.name',
      'heading.3.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    h4: [
      'heading.4.markdown entity.name',
      'heading.4.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    h5: [
      'heading.5.markdown entity.name',
      'heading.5.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    h6: [
      'heading.6.markdown entity.name',
      'heading.6.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    li: [
      'markup.list.bullet',
      'punctuation.definition.list.begin.markdown',
      'heading.1.markdown entity.name',
      'heading.1.markdown',
      'markup.heading',
      'editor.foreground',
    ],
    hr: ['meta.separator.markdown'],
    italic: ['markup.italic', 'punctuation.definition.italic.markdown'],
    a: ['markup.link', 'string.other.link.title.markdown'],
    // blockquote: ['markup.quote']
  }
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
  const flattenedTheme = flattenThemeColors(theme)
  console.log(flattenedTheme)
  Object.entries(defaultStyles).forEach(([el, groups]) => {
    const overrideGroups = overrides ? overrides[el as keyof ThemeStyles] : []
    for (const group of [...(overrideGroups || []), ...groups]) {
      if (flattenedTheme[group]) {
        result[el] = flattenedTheme[group]
        break
      }
    }
  });
  return result
}

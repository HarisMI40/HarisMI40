import type { BundledShikiTheme } from 'astro-expressive-code'

export type NavLink = {
  name: string
  url: string
  external?: boolean
}

export type VSCodeColor =
  // Base colors
  | 'focusBorder'
  | 'foreground'
  | 'disabledForeground'
  | 'descriptionForeground'
  | 'errorForeground'
  | 'icon.foreground'
  // Contrast colors
  | 'contrastActiveBorder'
  | 'contrastBorder'
  // Colors inside a text document, such as the welcome page
  | 'textBlockQuote.background'
  | 'textBlockQuote.border'
  | 'textCodeBlock.background'
  | 'textLink.activeForeground'
  | 'textLink.foreground'
  | 'textPreformat.foreground'
  | 'textSeparator.foreground'
  // Editor colors
  | 'editor.background'
  | 'editor.foreground'
  | 'editorLineNumber.foreground'
  | 'editorLineNumber.activeForeground'
  | 'editorActiveLineNumber.foreground'
  | 'editor.selectionBackground'
  | 'editor.inactiveSelectionBackground'
  | 'editor.selectionHighlightBackground'
  // Editor status colors & icons
  | 'editorError.foreground'
  | 'editorWarning.foreground'
  | 'editorInfo.foreground'
  | 'editorHint.foreground'
  | 'problemsErrorIcon.foreground'
  | 'problemsWarningIcon.foreground'
  | 'problemsInfoIcon.foreground'
  // Editor find matches
  | 'editor.findMatchBackground'
  | 'editor.findMatchHighlightBackground'
  | 'editor.findRangeHighlightBackground'
  // Editor links
  | 'editorLink.activeForeground'
  // Editor lightbulb icons
  | 'editorLightBulb.foreground'
  | 'editorLightBulbAutoFix.foreground'
  // Editor diffs
  | 'diffEditor.insertedTextBackground'
  | 'diffEditor.insertedTextBorder'
  | 'diffEditor.removedTextBackground'
  | 'diffEditor.removedTextBorder'
  | 'diffEditor.insertedLineBackground'
  | 'diffEditor.removedLineBackground'
  // Editor sticky scroll
  | 'editorStickyScroll.background'
  | 'editorStickyScrollHover.background'
  // Editor inlays (hints displayed inside an editor line)
  | 'editorInlayHint.background'
  | 'editorInlayHint.foreground'
  | 'editorInlayHint.typeForeground'
  | 'editorInlayHint.typeBackground'
  | 'editorInlayHint.parameterForeground'
  | 'editorInlayHint.parameterBackground'
  // Editor groups & panes
  | 'editorPane.background'
  | 'editorGroup.emptyBackground'
  | 'editorGroup.focusedEmptyBorder'
  | 'editorGroupHeader.tabsBackground'
  | 'editorGroupHeader.tabsBorder'
  | 'editorGroupHeader.noTabsBackground'
  | 'editorGroupHeader.border'
  | 'editorGroup.border'
  | 'editorGroup.dropBackground'
  | 'editorGroup.dropIntoPromptForeground'
  | 'editorGroup.dropIntoPromptBackground'
  | 'editorGroup.dropIntoPromptBorder'
  | 'sideBySideEditor.horizontalBorder'
  | 'sideBySideEditor.verticalBorder'
  // Scrollbars
  | 'scrollbar.shadow'
  | 'scrollbarSlider.background'
  | 'scrollbarSlider.hoverBackground'
  | 'scrollbarSlider.activeBackground'
  // Panels
  | 'panel.background'
  | 'panel.border'
  | 'panelTitle.activeBorder'
  | 'panelTitle.activeForeground'
  | 'panelTitle.inactiveForeground'
  | 'panelSectionHeader.background'
  | 'terminal.background'
  // Widgets
  | 'widget.shadow'
  | 'editorWidget.background'
  | 'editorWidget.foreground'
  | 'editorWidget.border'
  | 'quickInput.background'
  | 'quickInput.foreground'
  | 'quickInputTitle.background'
  | 'pickerGroup.foreground'
  | 'pickerGroup.border'
  | 'editor.hoverHighlightBackground'
  | 'editorHoverWidget.background'
  | 'editorHoverWidget.foreground'
  | 'editorHoverWidget.border'
  | 'editorHoverWidget.statusBarBackground'
  // Title bar
  | 'titleBar.activeBackground'
  | 'titleBar.activeForeground'
  | 'titleBar.inactiveBackground'
  | 'titleBar.inactiveForeground'
  | 'titleBar.border'
  // Toolbars
  | 'toolbar.hoverBackground'
  | 'toolbar.activeBackground'
  // Tab background
  | 'tab.activeBackground'
  | 'tab.unfocusedActiveBackground'
  | 'tab.inactiveBackground'
  | 'tab.unfocusedInactiveBackground'
  // Tab foreground
  | 'tab.activeForeground'
  | 'tab.inactiveForeground'
  | 'tab.unfocusedActiveForeground'
  | 'tab.unfocusedInactiveForeground'
  // Tab hover foreground/background
  | 'tab.hoverBackground'
  | 'tab.unfocusedHoverBackground'
  | 'tab.hoverForeground'
  | 'tab.unfocusedHoverForeground'
  // Tab border
  | 'tab.border'
  | 'tab.lastPinnedBorder'
  | 'tab.activeBorder'
  | 'tab.unfocusedActiveBorder'
  | 'tab.activeBorderTop'
  | 'tab.unfocusedActiveBorderTop'
  | 'tab.hoverBorder'
  | 'tab.unfocusedHoverBorder'
  // Tab modified border
  | 'tab.activeModifiedBorder'
  | 'tab.inactiveModifiedBorder'
  | 'tab.unfocusedActiveModifiedBorder'
  | 'tab.unfocusedInactiveModifiedBorder'
  // Badges (small information labels, for example, search results count)
  | 'badge.background'
  | 'badge.foreground'
  // Buttons
  | 'button.background'
  | 'button.foreground'
  | 'button.border'
  | 'button.separator'
  | 'button.hoverBackground'
  | 'button.secondaryBackground'
  | 'button.secondaryForeground'
  | 'button.secondaryHoverBackground'
  // Dropdowns (selects)
  | 'dropdown.background'
  | 'dropdown.foreground'
  | 'dropdown.border'
  // Lists
  | 'list.activeSelectionBackground'
  | 'list.activeSelectionForeground'
  // Trees
  | 'tree.indentGuidesStroke'
  // Input fields
  | 'input.background'
  | 'input.foreground'
  | 'input.placeholderForeground'
  | 'inputOption.activeBorder'
  | 'inputOption.hoverBackground'
  | 'inputOption.activeBackground'
  | 'inputOption.activeForeground'
  | 'inputValidation.infoBackground'
  | 'inputValidation.infoBorder'
  | 'inputValidation.warningBackground'
  | 'inputValidation.warningBorder'
  | 'inputValidation.errorBackground'
  | 'inputValidation.errorBorder'
  // Keybinding labels
  | 'keybindingLabel.background'
  | 'keybindingLabel.foreground'
  | 'keybindingLabel.border'
  | 'keybindingLabel.bottomBorder'
  // Menu colors
  | 'menu.foreground'
  | 'menu.background'
  | 'menu.selectionForeground'
  | 'menu.selectionBackground'
  | 'menu.separatorBackground'
  // Snippet placeholder colors
  | 'editor.snippetTabstopHighlightBackground'
  | 'editor.snippetFinalTabstopHighlightBorder'
  // Terminal colors
  | 'terminal.ansiBlack'
  | 'terminal.ansiRed'
  | 'terminal.ansiGreen'
  | 'terminal.ansiYellow'
  | 'terminal.ansiBlue'
  | 'terminal.ansiMagenta'
  | 'terminal.ansiCyan'
  | 'terminal.ansiWhite'
  | 'terminal.ansiBrightBlack'
  | 'terminal.ansiBrightRed'
  | 'terminal.ansiBrightGreen'
  | 'terminal.ansiBrightYellow'
  | 'terminal.ansiBrightBlue'
  | 'terminal.ansiBrightMagenta'
  | 'terminal.ansiBrightCyan'
  | 'terminal.ansiBrightWhite'

export interface ThemeConfig {
  theme: BundledShikiTheme
  font: string
  accent: VSCodeColor
  foreground: VSCodeColor
  background: VSCodeColor
}

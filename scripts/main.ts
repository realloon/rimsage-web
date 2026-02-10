import { setupLangSwitch } from './i18n'
import { setupTabs } from './tabs'
import { setupCopyButtons } from './copier'
import { setupReveal } from './revealer'

document.addEventListener('DOMContentLoaded', () => {
  setupLangSwitch()
  setupTabs()
  setupCopyButtons()
  setupReveal()
})

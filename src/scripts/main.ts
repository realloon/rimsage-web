import { setupLangSwitch } from './i18n'
import { setupTabs } from './tabs'
import { setupReveal } from './revealer'

document.addEventListener('DOMContentLoaded', () => {
  setupLangSwitch()
  setupTabs()
  setupReveal()
})

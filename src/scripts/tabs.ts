const tabs = document.querySelectorAll<HTMLElement>('[data-tab]')
const panels = document.querySelectorAll<HTMLElement>('[data-panel]')

function activate(id: string) {
  tabs.forEach(tab => {
    const isActive = tab.dataset.tab === id

    tab.classList.toggle('active', isActive)
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false')
  })

  panels.forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panel === id)
  })
}

export function setupTabs() {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab.dataset.tab!))
  })

  activate('claude')
}

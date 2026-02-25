import i18n from '../assets/i18n.json'

type Lang = 'zh' | 'en'

let currentLang: Lang = 'en'

function applyLang(lang: Lang) {
  currentLang = i18n[lang] ? lang : 'en'
  document.documentElement.lang = currentLang

  const dict = i18n[currentLang]

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n as keyof typeof dict

    if (dict[key]) {
      el.textContent = dict[key]
    }
  })

  const select = document.querySelector<HTMLSelectElement>('[data-lang-select]')
  if (select) {
    select.value = currentLang
  }
}

function setLang(lang: Lang) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', lang)
  url.hash = window.location.hash
  history.replaceState(null, '', url)
  applyLang(lang)
}

export function setupLangSwitch() {
  const url = new URL(window.location.href)
  const lang = url.searchParams.get('lang') === 'zh' ? 'zh' : 'en'

  applyLang(lang)

  const select = document.querySelector<HTMLSelectElement>('[data-lang-select]')
  if (select) {
    select.addEventListener('change', () => setLang(select.value as Lang))
  }
}

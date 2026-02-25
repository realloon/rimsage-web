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

  document.querySelectorAll<HTMLElement>('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang)
  })
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

  document.querySelectorAll<HTMLElement>('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang as Lang))
  })
}

import i18n from '../assets/i18n.json'

type Lang = 'zh' | 'en'

export function setupCopyButtons() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach(btn => {
    let resetTimer: number | undefined

    btn.addEventListener('click', async () => {
      const code = btn.closest('.code-block')!.querySelector('code')!.innerText
      await navigator.clipboard.writeText(code)

      const lang = document.documentElement.lang === 'zh' ? 'zh' : 'en'
      const dict = i18n[lang as Lang]
      const copied = dict['common.copied']

      btn.classList.add('copied')
      btn.setAttribute('aria-label', copied)

      if (resetTimer) {
        window.clearTimeout(resetTimer)
      }

      resetTimer = window.setTimeout(() => {
        btn.classList.remove('copied')
        btn.setAttribute('aria-label', dict['common.copy'])
      }, 1500)
    })

    const lang = document.documentElement.lang === 'zh' ? 'zh' : 'en'
    btn.setAttribute('aria-label', i18n[lang as Lang]['common.copy'])
  })
}

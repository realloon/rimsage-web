import i18n from '../assets/i18n.json'

type Lang = 'zh' | 'en'

export function setupCopyButtons() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.closest('.code-block')!.querySelector('code')!.innerText
      await navigator.clipboard.writeText(code)

      const lang = document.documentElement.lang === 'zh' ? 'zh' : 'en'
      const dict = i18n[lang as Lang]
      const original = dict['common.copy']
      const copied = dict['common.copied']
      btn.textContent = copied

      setTimeout(() => {
        btn.textContent = original
      }, 1500)
    })
  })
}

export function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.closest('.code-block')!.querySelector('code')!.innerText
      await navigator.clipboard.writeText(code)

      const original = 'Copy'
      const copied = 'Copied'
      btn.textContent = copied

      setTimeout(() => {
        btn.textContent = original
      }, 1500)
    })
  })
}

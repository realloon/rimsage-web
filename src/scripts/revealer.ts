export function setupReveal() {
  const elements = document.querySelectorAll<HTMLElement>('.reveal')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  elements.forEach(el => observer.observe(el))
}

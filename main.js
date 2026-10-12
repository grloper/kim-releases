const cloth = document.getElementById('cloth')
const count = document.getElementById('count')

function coverLoop() {
  if (!cloth) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    cloth.classList.add('down')
    return
  }
  cloth.classList.remove('down')
  window.setTimeout(() => cloth.classList.add('down'), 1600)
  window.setTimeout(() => cloth.classList.remove('down'), 3200)
  window.setTimeout(coverLoop, 4800)
}

function countUp() {
  if (!count) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const target = 14
  if (reduce) {
    count.textContent = String(target)
    return
  }
  const start = performance.now()
  const tick = (t) => {
    const p = Math.min(1, (t - start) / 700)
    count.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target))
    if (p < 1) requestAnimationFrame(tick)
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        requestAnimationFrame(tick)
        io.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  io.observe(count)
}

coverLoop()
countUp()

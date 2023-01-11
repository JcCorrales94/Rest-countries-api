
const createAlertTailwind = (mensaje, color = 'bg-red-300') => {
  const alertHTML = document.createElement('div')

  alertHTML.className = `alert ${color} text-white rounded-sm p-4 absolute bottom-4 -translate-x-1/2 -translate-y-1/2`

  alertHTML.innerHTML = `<span>${mensaje}</span>`

  // añadir animaciones con javascript
  const animacionInOut = alertHTML.animate([
    { left: '-100%', offset: 0 },
    { left: '50%', offset: 0.1, easing: 'ease-in' },
    { left: '50%', offset: 0.9 },
    { left: '-100%', offset: 1, easing: 'ease-out' }
  ], { duration: 5000, fill: 'forwards' })

  animacionInOut.addEventListener('finish', () => alertHTML.remove())

  document.body.append(alertHTML)
}

export default createAlertTailwind

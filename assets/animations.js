import anime from 'animejs'

export function logoAnimation (element) {
  anime({
    targets: element,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay (el, i) {
      return i * 250
    }
  })
}

import { pause } from "./pause.js"

export { TrackItem }

const ARRIVAL_DURATION = 1_000

class TrackItem {
  insertInto(track) {
    this.track = track
    track.items.push(this)
  }

  render() {
    const ulWrapper = document.createElement('ul')

    this.track.el.append(ulWrapper)
    this.el = ulWrapper
    this.el.classList.add('track-item')
  }

  become(el) {
    this.el.append(el)
    this.hide()
  }

  host(el) {
    const li = document.createElement('li')

    this.el.append(li)
    li.append(el)
    this.hide()
  }

  hide() {
    this.el.style.transform = 'rotateX(90deg)'
  }

  async arrive() {
    const side = this.track.index % 2 ? 'left' : 'right'
    const sign = { left: '-', right: '+' }[side]

    this.el.style.transform = `translateX(${sign}100vw)`
    await pause(20)
    this.el.style.transition = `transform ${ARRIVAL_DURATION}ms`
    await pause(20)
    this.el.style.transform = null

    await new Promise(resolve => this.el.ontransitionend = resolve)
  }
}

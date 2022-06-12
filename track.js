export { Track }

import { TrackItem } from './track-item.js'
import { pause } from './pause.js'

const GROW_DURATION = 1_000

class Track {
  constructor() {
    this.items = []
  }

  takePlaceAt(trackList) {
    this.list = trackList
    trackList.tracks.push(this)
  }

  render() {
    const li = document.createElement('li')

    li.classList.add('track')
    this.el = li
    this.list.el.append(li)
  }

  async receive(el) {
    const item = new TrackItem()

    item.insertInto(this)
    item.render()

    if (el.tagName == 'LI') {
      item.become(el)
    } else {
      item.host(el)
    }

    if (this.index != this.list.tracks.length - 1) {
      await this.growFor(item)
    }

    await item.arrive()
  }

  async growFor(item) {
    const height = item.el.offsetHeight

    this.el.style.height = 0
    this.el.style.transition = `height ${GROW_DURATION}ms`
    await pause()
    this.el.style.height = height + 'px'

    await new Promise(resolve => this.el.ontransitionend = resolve)

    setTimeout(() => this.el.style.height = null, 100)
  }

  get index() {
    return this.list.tracks.indexOf(this)
  }
}

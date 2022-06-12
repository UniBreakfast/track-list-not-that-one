export { TrackList }

import { Track } from './track.js'

class TrackList {
  constructor() {
    this.tracks = []
  }

  settleAt(parent) {
    this.parent = parent
  }

  render() {
    const ul = document.createElement('ul')

    ul.classList.add('track-list')
    this.el = ul

    this.parent.append(ul)
  }

  async add(el) {
    const track = new Track()

    track.takePlaceAt(this)
    track.render()

    await track.receive(el)
  }
}

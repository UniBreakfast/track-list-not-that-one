import { TrackList } from './track-list.js'
import { makeSampleElement } from './make-sample-element.js'
import { clone } from './clone.js'
import { pause } from './pause.js'

const wrapper = document.getElementById('wrapper')
const trackList = new TrackList()
const el = makeSampleElement()


trackList.settleAt(wrapper)
trackList.render()

main()

async function main() {
  for (let i = 0; i < 10; i++) {
    await pause(400)

    trackList.add(clone(el))
  }
}

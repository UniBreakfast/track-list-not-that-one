export { makeSampleElement }

const spaceAfterDot = /(?<=[.?!])\s+/

function makeSampleElement() {
  const li = document.createElement('li')

  li.style.padding = '3px 14px'

  li.innerText = 'That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the drifting shoals of waste. The alarm still oscillated, louder here, the rear wall dulling the roar of the console in faded pinks and yellows. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the car’s floor. Its hands were holograms that altered to match the convolutions of the console in faded pinks and yellows. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a broken mirror bent and elongated as they fell.'.split(spaceAfterDot)[rnd(7)]

  return li
}

function rnd(max) {
  return Math.floor(Math.random() * max)
}

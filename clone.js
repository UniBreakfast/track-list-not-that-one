export { clone }

function clone(el) {
  const clone = el.cloneNode(true)

  clone.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 70%)`

  return clone
}

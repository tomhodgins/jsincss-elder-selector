export default (selector, sibling, rule) => {

  let styles = ''
  let count = 0

  document.querySelectorAll(selector).forEach(tag => {

    const attr = selector.replace(/\W/g, '')
    const children = Array.from(tag.parentNode.querySelectorAll(sibling))
    const index = Array.from(tag.parentNode.children).indexOf(tag)

    children
      .filter(child => children.indexOf(child) < index)
      .forEach(child => {

        child.setAttribute(`data-elder-${attr}`, count)
        styles += `[data-elder-${attr}="${count}"] { ${rule} }\n`
        count++

      })

  })

  return styles

}
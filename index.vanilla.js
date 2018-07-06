export default (selector, sibling, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .reduce((styles, tag, count) => {

      const children = Array.from(tag.parentNode.querySelectorAll(sibling))
      const index = Array.from(tag.parentNode.children).indexOf(tag)

      children

        .filter(tag => children.indexOf(tag) < index)

        .forEach(child => {

          const attr = (selector + sibling).replace(/\W/g, '')

          child.setAttribute(`data-elder-${attr}`, count)
          styles += `[data-elder-${attr}="${count}"] { ${rule} }\n`
          count++

        })

      return styles

    }, '')

}

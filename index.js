module.exports = (selector, sibling, rule) => {
  const attr = (selector + sibling).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .reduce((output, tag, count) => {
      Array.from(tag.parentNode.querySelectorAll(sibling))
        .filter(child => {
          const siblings = Array.from(tag.parentElement.children)
          return siblings.indexOf(child) < siblings.indexOf(tag)
        })
        .forEach(child => {
          output.add.push({tag: child, count: count})
          output.styles.push(`[data-elder-${attr}="${count}"] { ${rule} }`)
        })
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-elder-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-elder-${attr}`, ''))
  return result.styles.join('\n')
}

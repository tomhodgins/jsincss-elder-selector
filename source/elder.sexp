mixin('elder', ['selector', 'sibling', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    plainReduce(
      prelude('      const children = Array.from(tag.parentNode.querySelectorAll(sibling))\n\
      const index = Array.from(tag.parentNode.children).indexOf(tag)\n\n\
      children\n\n',
        '    ' + filterFunc('children.indexOf(tag) < index',
          '    ' + prelude('    .forEach(child => {\n\n',
            '    ' + createAttribute(['selector', 'sibling'],
              '    ' + addAttribute('child', 'elder',
                '    ' + addRule('', '', 'elder', '${rule}',
                  '    ' + count(
                    prelude('\n        })\n\n',
                      returnStyles())))))))))))

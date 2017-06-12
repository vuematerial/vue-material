const path = require('path')
const compiler = require('vue-template-compiler')
const transpile = require('vue-template-es2015-compiler')
const pretty = require('pretty')

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

module.exports = function (source) {
  const filePath = this.resourcePath
  const fileName = camelCaseToDash(path.basename(filePath).replace('.vue', ''))
  const parsedComponent = compiler.parseComponent(source)
  const parsedTags = {}
  let output = ''

  function parseTag (tag, schema) {
    let attributes = ''
    let content = schema.content

    if (schema.attrs) {
      Object.keys(schema.attrs).forEach(attr => {
        attributes += ` ${attr}='${schema.attrs[attr]}'`
      })
    }

    if (tag !== 'style') {
      parsedTags[tag] = pretty(content)
    } else {
      parsedTags[tag] = content
    }

    return `<${tag}${attributes}>${parsedTags[tag]}</${tag}>

    `
  }

  Object.keys(parsedComponent).forEach(b => {
    const schema = parsedComponent[b]
    const tag = b.replace('styles', 'style')

    if (schema && tag !== 'customBlocks') {
      if (Array.isArray(schema)) {
        schema.forEach(config => {
          output += parseTag(tag, config)
        })
      } else {
        output += parseTag(tag, schema)
      }
    }
  })

  let { script, template, style } = parsedTags

  if (script) {
    script = script.replace('export default ', '')
  }

  const code = `
    const Vue = require('vue');

    module.exports = function(c) {
      Vue.default.component('${fileName}', resolve => {
        require(['${filePath}'], resolve)
      })

      c.options.examples = c.options.examples || {};
      c.options.examples['${fileName}'] = {
        name: '${fileName}',
        source: ${JSON.stringify(pretty(output))},
        template: ${JSON.stringify(template)},
        script: ${JSON.stringify(script)},
        style: ${JSON.stringify(style)}
      };
    }`

  this.callback(null, transpile(code))
}

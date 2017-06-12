const path = require('path')
const compiler = require('vue-template-compiler')
const transpile = require('vue-template-es2015-compiler')
const pretty = require('pretty')
const uncomment = require('uncomment')

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

module.exports = function (source) {
  const filePath = this.resourcePath
  const fileName = camelCaseToDash(path.basename(filePath).replace('.vue', ''))
  const parsedComponent = compiler.parseComponent(source, { pad: 'line' })
  const { template, script, styles: style } = parsedComponent
  let output = ''

  function parseTag (tag, schema) {
    let attributes = ''
    let content = schema.content

    if (tag === 'script') {
      content = uncomment(content)
    }

    if (schema.attrs) {
      Object.keys(schema.attrs).forEach(attr => {
        attributes += ` ${attr}="${schema.attrs[attr]}"`
      })
    }

    return `<${tag}${attributes}>${content}</${tag}>

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

  const code = `
    const Vue = require('vue');
    const newComponent = require("${filePath}");

    module.exports = function(c) {
      Vue.default.component("${fileName}", newComponent)

      c.options.docs = c.options.docs || {};
      c.options.docs["${fileName}"] = {
        name: "${fileName}",
        source: ${JSON.stringify(pretty(output))},
        template: ${JSON.stringify(template.content)},
        script: ${JSON.stringify(script.content)},
        style: ${JSON.stringify(style.content)}
      };
    }`

  this.callback(null, transpile(code))
}

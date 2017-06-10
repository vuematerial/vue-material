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

  Object.keys(parsedComponent).forEach(block => {
    block = block.replace('styles', 'style')

    const blockConfig = parsedComponent[block]

    if (blockConfig && block !== 'customBlocks') {
      let attributes = ''
      let content = blockConfig.content

      if (block === 'script') {
        content = uncomment(content)
      }

      if (blockConfig.attrs) {
        Object.keys(blockConfig.attrs).forEach(attr => {
          attributes += `${attr}="${blockConfig.attrs[attr]}"`
        })
      }

      output += `<${blockConfig.type}${attributes}>
        ${content}
      </${blockConfig.type}>

      `
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

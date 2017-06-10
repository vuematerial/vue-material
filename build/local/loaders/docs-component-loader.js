const path = require('path')
const compiler = require('vue-template-compiler')
const transpile = require('vue-template-es2015-compiler')

module.exports = function (source) {
  const filePath = this.resourcePath
  const fileName = path.basename(filePath).replace('.vue', '')
  const parsedComponent = compiler.parseComponent(source, { pad: 'line' })
  const target = parsedComponent.template
  const name = target.attrs.name
  const code = `
    const Vue = require('vue');
    const newComponent = require("${filePath}");

    module.exports = function(c) {
      Vue.default.component("${fileName}", newComponent)

      c.options.docs = c.options.docs || {};
      c.options.docs["${name}"] = {
        name: "${name}",
        encoded: ${JSON.stringify(target.content)}
      };
    }`

  this.callback(null, transpile(code))
}

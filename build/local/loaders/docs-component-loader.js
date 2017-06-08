const compiler = require('vue-template-compiler')
const CircularJSON = require('circular-json')
const ent = require('ent');

module.exports = function (source) {
  const parsedComponent = compiler.parseComponent(source, { pad: 'line' })
  const target = parsedComponent.customBlocks[0]
  const output = {
    name: target.attrs.name,
    ...compiler.compileToFunctions(source)
  }
  const raw = target.content.trim()
  const code = `
    const Vue = require("vue");

    module.exports = function(c) {
      c.options.docs = c.options.docs || {};

      c.options.docs["${target.attrs.name}"] = {
        name: "${target.attrs.name}",
        raw: "${ent.encode(raw)}",
        encoded: ${JSON.stringify(raw)}
      };

      Vue.default.component("${target.attrs.name}", ${CircularJSON.stringify(output)});
    }`

  this.callback(null, code)
}

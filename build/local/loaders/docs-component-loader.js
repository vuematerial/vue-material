const compiler = require('vue-template-compiler')
const CircularJSON = require('circular-json')
const ent = require('ent');

function createFunction (code) {
  try {
    return new Function(code)
  } catch (err) {
    console.log(err)
    return noop
  }
}

module.exports = function (source) {
  const parsedComponent = compiler.parseComponent(source, { pad: 'line' })
  const target = parsedComponent.customBlocks[0]
  const output = {
    name: target.attrs.name,
    ...compiler.compile(source)
  }
  const raw = target.content.trim()

  output.render = createFunction(output.render)

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

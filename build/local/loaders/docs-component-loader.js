const compiler = require('vue-template-compiler')
const CircularJSON = require('circular-json')
const transpile = require('vue-template-es2015-compiler')
const ent = require('ent');

function toFunction (code) {
  return `function () {
    ${code}
  }`
}

module.exports = function (source) {
  const parsedComponent = compiler.parseComponent(source, { pad: 'line' })
  const target = parsedComponent.customBlocks[0]
  const raw = target.content.trim()
  const compiled = compiler.compile(source)
  const code = `
    const Vue = require("vue");

    module.exports = function(c) {
      c.options.docs = c.options.docs || {};

      c.options.docs["${target.attrs.name}"] = {
        name: "${target.attrs.name}",
        raw: "${ent.encode(raw)}",
        encoded: ${JSON.stringify(raw)}
      };

      Vue.default.component("${target.attrs.name}", {
        name: "${target.attrs.name}",
        render: ${toFunction(compiled.render)},
        staticRenderFns: [${compiled.staticRenderFns.map(toFunction).join(',')}]
      });
    }`

  this.callback(null, transpile(code))
}

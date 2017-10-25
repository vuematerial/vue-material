const path = require('path')
const compiler = require('vue-template-compiler')
const transpile = require('vue-template-es2015-compiler')

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

module.exports = function (source) {
  this.cacheable && this.cacheable()

  const filePath = this.resourcePath.replace(/\\/g, '/')
  const fileName = camelCaseToDash(path.basename(filePath).replace('.vue', ''))
  const parsedComponent = compiler.parseComponent(source)
  const parsedTags = {}

  Object.keys(parsedComponent).forEach(b => {
    const schema = parsedComponent[b]
    const tag = b.replace('styles', 'style')

    if (schema && tag !== 'customBlocks') {
      if (Array.isArray(schema)) {
        schema.forEach(config => {
          parsedTags[tag] = config.content
        })
      } else {
        parsedTags[tag] = schema.content
      }
    }
  })

  let { script, template, style } = parsedTags

  if (script) {
    script = script.replace('export default ', '')
  }

  const code = `
    const Vue = require('vue');
    const CodeLoading = require('docs/app/components/CodeLoading');

    module.exports = function(component) {
      const asyncComponent = resolve => ({
        component: require(['${filePath}'], resolve),
        loading: CodeLoading,
        delay: 0
      })

      Vue.default.component('${fileName}', asyncComponent)

      component.options.examples = component.options.examples || {};
      component.options.examples['${fileName}'] = {
        name: '${fileName}',
        source: ${JSON.stringify(source)},
        template: ${JSON.stringify(template)},
        script: ${JSON.stringify(script)},
        style: ${JSON.stringify(style)}
      }
    }`

  this.callback(null, transpile(code))
}

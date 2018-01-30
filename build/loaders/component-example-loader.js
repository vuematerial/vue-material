const sass = require('node-sass')
const pretty = require('pretty')
const prettier = require('prettier')
const path = require('path')
const compiler = require('vue-template-compiler')
const { resolvePath } = require('../config')
const { transform } = require('@babel/core')
const transpile = code => transform(code).code
const { getIndentedSource } = require('../../docs/app/mixins/codeSource')

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function getComponentScript (script) {
  return getIndentedSource(`
    Vue.use(VueMaterial.default)

    ${script}

    const app = new Vue(example)

    app.$mount('#app')
  `)
}

function getComponentTemplate (template) {
  return pretty(`
    <div id="app">
      ${template}
    </div>
  `)
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

  if (style) {
    style = style.replace(/~vue-material/g, '.')

    const { css } = sass.renderSync({
      data: style,
      includePaths: [resolvePath('src')],
      outputStyle: 'expanded'
    })

    style = css.toString('utf8')
  }

  if (template) {
    template = template.replace(/src="\/assets/g, 'src="https://vuematerial.io/assets')
    template = getComponentTemplate(template)
  }

  if (script) {
    let newScript = null

    script = script.replace('export default ', 'const example = ')
    script = getComponentScript(script)

    try {
      newScript = transpile(script)
    } catch (e) {
      newScript = script
    }

    script = prettier.format(newScript, { semi: false })
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

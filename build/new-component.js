import { ShellString, test, mkdir, cd, sed, exit, exec } from 'shelljs'
import { join } from 'path'

function pascalToDash (str) {
  return str.split(/(?=[A-Z])/).join('-').toLowerCase()
}

function toCamelCase (str) {
  return str.charAt(0).toLowerCase() + str.substr(1)
}

function getVueComponent (name) {
  return `<template>
  <div class="${pascalToDash(name)}" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: '${name}'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .${pascalToDash(name)} {
    transition: .3s $md-transition-default-timing;
  }
</style>
`.trim()
}

function getTestFile (name) {
  const compName = pascalToDash(name)
  const singleName = name.replace('Md', '').toLowerCase()

  return `import mountTemplate from 'test/utils/mountTemplate'
import ${name} from './${name}.vue'

test('should render the ${singleName}', async () => {
  const template = '<${compName}>Lorem ipsum</${compName}>'
  const wrapper = await mountTemplate(${name}, template)

  expect(wrapper.hasClass('${compName}')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<${compName} md-theme="alt">Lorem ipsum</${compName}>'
  const wrapper = await mountTemplate(${name}, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
`.trim()
}

function getThemeFile (name) {
  return `.${pascalToDash(name)} {
  @include md-theme-component() {

  }
}
`.trim()
}

function getIndexFile (name) {
  return `import material from 'vue-material/material'
import ${name} from './${name}'

export default Vue => {
  material(Vue)
  Vue.component(${name}.name, ${name})
}
`.trim()
}

function getDocsFile (name) {
  const singleName = name.replace('Md', '')
  const docName = name.replace('Md', 'Doc')

  return `<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.${toCamelCase(singleName)}.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>${singleName}</h2>

      <code-example title="Example" :component="examples['example']" />

      <api-item title="API - ${pascalToDash(name)}">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: '${docName}',
    mixins: [examples]
  }
</script>
`.trim()
}

function getExampleFile (name) {
  const compName = pascalToDash(name)

  return `<template>
  <div>
    <${compName}>Lorem ipsum</${compName}>
  </div>
</template>

<script>
  export default {
    name: 'Example'
  }
</script>

<style lang="scss" scoped>
  .${compName} {

  }
</style>
`.trim()
}

const writeToFile = (contents, file) => {
  new ShellString(contents).to(file)
}

const writeToEndOfFile = (contents, file) => {
  new ShellString(contents).toEnd(file)
}

const [name] = process.argv.slice(2)

if (!name) {
  exit('Please provide the file name. Example: npm new-component \'MdComponent\'')
}

const singleName = name.replace('Md', '')
const camelCasedName = toCamelCase(singleName.replace('Md', ''))
const rootDir = join(__dirname, '..')
const componentsPath = 'src/components/' + name
const componentIndex = 'src/components/index.js'
const themePath = 'src/theme/all.scss'
const docsPath = 'docs/app/pages/Components/' + singleName
const docsRoutePath = 'docs/app/routes.js'
const navPath = 'docs/app/template/MainNavContent.vue'

if (!test('-e', componentsPath)) {
  mkdir('-p', componentsPath)
  cd(componentsPath)
  writeToFile(getVueComponent(name), name + '.vue')
  writeToFile(getTestFile(name), name + '.test.js')
  writeToFile(getThemeFile(name), 'theme.scss')
  writeToFile(getIndexFile(name), 'index.js')

  cd(rootDir)
  sed('-i', 'MdApp,', `${name},\n  MdApp,`, componentIndex)
  sed('-i', `import MdApp from './MdApp'`, `import MdApp from './MdApp'\nimport ${name} from './${name}'`, componentIndex)

  cd(rootDir)
  writeToEndOfFile(`@import "../components/${name}/theme";`, themePath)
  cd(rootDir)
} else {
  exit(`echo 'This component already exists'`)
}

if (!test('-e', docsPath)) {
  const compName = pascalToDash(name.replace('Md', ''))

  mkdir('-p', docsPath + '/examples')
  cd(docsPath)
  writeToFile(getDocsFile(name), singleName + '.vue')
  cd('examples')
  writeToFile(getExampleFile(name), 'Example.vue')

  cd(rootDir)
  sed('-i', 'export const routes = \\[', `export const routes = [
  {
    path: '/components/${compName}',
    name: 'components/${compName}',
    page: 'Components/${singleName}/${singleName}.vue'
  },`, docsRoutePath)

  sed('-i', '<router-link to="/components/app">', `<router-link to="/components/${compName}">{{ $t('pages.${camelCasedName}.title') }}</router-link>\n      <router-link to="/components/app">`, navPath)
} else {
  exit(`echo 'This component already exists'`)
}

exec('yarn lint --fix')

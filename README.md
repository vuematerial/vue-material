<p align="center">
  <a href="https://marcosmoura.github.io/vue-material/" target="_blank">
    <img width="150" src="https://marcosmoura.github.io/vue-material/assets/logo-vue-material-blue.png">
  </a>
</p>

<p align="center">Material Design for Vue.js</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-material"><img src="https://img.shields.io/npm/dt/vue-material.svg" alt="Downloads"></a>

  <a href="https://www.npmjs.com/package/vue-material"><img src="https://img.shields.io/npm/v/vue-material.svg" alt="Version"></a>

  <a href="https://www.npmjs.com/package/vue-material"><img src="https://img.shields.io/npm/l/vue-material.svg" alt="License"></a> <br>
</p>

Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank">Material Design</a> specs. 

It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to <a href="https://saucelabs.com/u/vuejs" target="_blank">modern Web Browsers</a> through Vue 2.0. 

Build powerful and well-designed web apps that can can fit on every screen. You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API.

## Demo and Documentation
<a href="https://marcosmoura.github.io/vue-material/" target="_blank">Demo</a>

## Installation

Import Roboto and Material Icons from Google CDN:

``` html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

Install Vue Material through npm or yarn
``` bash
npm install --save vue-material
yarn add vue-material
```
<small>* Others package managers like JSPM and Bower are not supported yet.</small>

Import or require Vue and Vue Material in your code:
``` javascript
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// OR

var Vue = require('vue')
var VueMaterial = require('vue-material')
require('vue-material/dist/vue-material.css')
```

Alternativelly you can <a href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/vue-material.css">
<script src="path/to/vue-material.js"></script>
```

## Usage

Enable Vue Material in your application using ```Vue.use()```. You can always enable individual components:
``` javascript
Vue.use(VueMaterial)

// OR

Vue.use(VueMaterial.mdCore) //Required to boot vue material
Vue.use(VueMaterial.mdButton)
Vue.use(VueMaterial.mdIcon)
Vue.use(VueMaterial.mdSidenav)
Vue.use(VueMaterial.mdToolbar)
```

To get Vue Material working properly, you'll need to configure and apply a default theme.

``` javascript
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})
```

Or you can register multiple themes at once.

``` javascript
Vue.material.theme.registerAll({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  phone: {
    primary: 'indigo',
    accent: 'pink'
  }
})
```

Apply your theme using <code>v-md-theme</code> directive:

``` html
<div v-md-theme="'default'"></div>
<div v-md-theme="'phone'"></div>
```

## Changelog
<a href="https://marcosmoura.github.io/vue-material/#/changelog" target="_blank">Changelog</a>

## Contributing

Please make sure to read the [Contributing Guide](https://github.com/marcosmoura/vue-material/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## Credits and Thanks
* This library aims to delivery components using almost the same API of <a href="https://material.angularjs.org/latest/" target="_blank">Angular Material</a>
* Thanks a lot to <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!
* Thanks to <a href="https://github.com/yyx990803" target="_blank">Evan You</a> for allowing me to use Vue.js Logo.

## Internal Dependencies 
You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependence, but aiming to deliver the best experience without break the compatibility with the Vue.js core.
* <a href="http://www.jacklmoore.com/autosize/" target="_blank">autosize</a>
* <a href="https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill" target="_blank">element.scrollintoviewifneeded-polyfill</a>
* <a href="https://github.com/lazd/scopedQuerySelectorShim" target="_blank">scopedQuerySelectorShim</a>

## License 
MIT

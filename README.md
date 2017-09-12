<p align="center">
  <a href="https://vuematerial.github.io/" target="_blank">
    <img width="150" src="https://vuematerial.github.io/assets/logo-vue-material-default.png">
  </a>
</p>

<p align="center">Material Design for Vue.js</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/dt/vue-material.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/v/vue-material.svg" alt="Version">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/l/vue-material.svg" alt="License">
  </a>
</p>

Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank">Material Design</a> specs. 

It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to all modern Web Browsers through Vue 2. 

Build powerful and well-designed web apps that can fit on every screen. You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API.

## Demo and Documentation
<a href="https://vuematerial.github.io/" target="_blank">Demo</a>

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

Vue.use(VueMaterial.MdCore) //Required to boot vue material
Vue.use(VueMaterial.MdButton)
Vue.use(VueMaterial.MdIcon)
Vue.use(VueMaterial.MdSidenav)
Vue.use(VueMaterial.MdToolbar)
```

## Changelog
<a href="https://vuematerial.github.io/#/changelog" target="_blank">Changelog</a>

## Questions
The issue list is exclusively for reports, bugs and feature requests. Use the [Slack](https://join.slack.com/t/vuematerial/shared_invite/MTgzMzU2NDQ5ODkwLTE0OTQ4MDI3MDAtNWYyZjhkNzEzMA) instead.

## Contributing

Please make sure to read the [Contributing Guide](https://github.com/marcosmoura/vue-material/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## Browser Support
Vue Material supports the latest version of all Browsers. This means:
* Google Chrome 52+
* Firefox 48+
* Safari 9+
* Opera 38+
* Edge 12+
* IE 11

<small>May work in other browsers but it's untested.</small>

## Credits and Thanks
* This library aims to delivery components using almost the same API of <a href="https://material.angularjs.org/latest/" target="_blank">Angular Material</a>
* Thanks a lot to <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!
* Thanks to <a href="https://github.com/yyx990803" target="_blank">Evan You</a> for allowing me to use Vue.js Logo.

## Internal Dependencies 
You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependence, but aiming to deliver the best experience without break the compatibility with the Vue.js core.
* <a href="http://vuejs.org" target="_blank">vue</a>
* <a href="http://www.jacklmoore.com/autosize/" target="_blank">autosize</a>
* <a href="https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill" target="_blank">element.scrollintoviewifneeded-polyfill</a>

## I want to pay you a Coffee
I don't drink coffee, but I can easily turn this into a strong and bold IPA beer or a burger! If you think that this project helped you in some way, and you have extra pennies to give, just access this [Patreon](https://www.patreon.com/marcosmoura) page. You name you be at the backers page inside the project website.

## License 
MIT

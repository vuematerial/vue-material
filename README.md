<p align="center">
  <a href="https://vuematerial.io/" target="_blank">
    <img width="150" src="https://raw.githubusercontent.com/vuematerial/vue-material-experiments/master/docs/assets/logo-color.png">
  </a>
</p>

<p align="center">Material Design for Vue.js</p>

<p align="center">
  <a href="https://travis-ci.org/vuematerial/vue-material-experiments">
    <img src="https://travis-ci.org/vuematerial/vue-material-experiments.svg?branch=master" alt="Build Status">
  </a>

  <a href="https://codeclimate.com/github/vuematerial/vue-material-experiments/coverage">
    <img src="https://codeclimate.com/github/vuematerial/vue-material-experiments/badges/coverage.svg">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/dt/vue-material.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/l/vue-material.svg" alt="License">
  </a>
</p>

Vue Material is Simple, lightweight and built exactly according to the Google <a href="http://material.google.com" target="_blank">Material Design</a> specs

Build well-designed apps that can fit on every screen with support to all modern Web Browsers with dynamic themes, components on demand and all with an ease-to-use API

## Demo and Documentation

<a href="https://vuematerial.io/" target="_blank">Demo</a>

## Installation and Usage

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

Vue.use(VueMaterial)
```

Or use individual components:

``` javascript
import { MdButton, MdIcon, MdSidenav, MdToolbar } from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdSidenav)
Vue.use(MdToolbar)
```

Alternativelly you can <a href="https://github.com/vuematerial/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/vue-material.css">
<script src="path/to/vue-material.js"></script>
```

Optionally import Roboto font from Google CDN:

``` html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
```

## Changelog

<a href="https://vuematerial.io/#/changelog" target="_blank">Changelog</a>

## Questions

The issue list is exclusively for bugs and feature requests. Use the [Slack Channel](https://vue-material.slack.com) instead.

## Contributing

Please make sure to read the [Contributing Guide](https://github.com/vuematerial/vue-material/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Vue Material supports all [modern browsers](http://browserl.ist/?q=%3E%3D+1%25).

<small>May work in other browsers but it's untested.</small>

## Credits and Thanks

* <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!
* <a href="https://github.com/brunocastro" target="_blank">Bruno Castro</a> for the awesome Vue Material Logo.

## License

MIT

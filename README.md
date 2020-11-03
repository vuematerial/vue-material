<p align="center">
  <a href="https://vuematerial.io/" target="_blank">
    <img width="150" src="https://vuematerial.io/assets/logo-color.png">
  </a>
</p>

<p align="center">Material Design for Vue.js</p>

<p align="center">
  <a href="https://travis-ci.org/vuematerial/vue-material">
    <img src="https://travis-ci.org/vuematerial/vue-material.svg?branch=master" alt="Build Status">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/dt/vue-material.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/vue-material">
    <img src="https://img.shields.io/npm/l/vue-material.svg" alt="License">
  </a>

  <a href="https://discord.gg/vuematerial">
    <img src="https://img.shields.io/discord/379653048798281729.svg?logo=discord&colorB=7289DA" alt="Chat">
  </a>
</p>

Vue Material is Simple, lightweight and built exactly according to the Google <a href="http://material.google.com" target="_blank">Material Design</a> specs

Build well-designed apps that can fit on every screen with support to all modern Web Browsers with dynamic themes, components on demand and all with an ease-to-use API

## Demo and Documentation

<a href="https://vuematerial.io/" target="_blank">Documentation & demos</a>

<a href="https://github.com/vuematerial/examples" target="_blank">Examples</a>

If you are trying to find the documentation for previous versions, please go to <a href="https://vue-material-old.netlify.com">old website</a>.

## Installation and Usage

Install Vue Material through npm or yarn

``` bash
npm install vue-material --save
yarn add vue-material
```

<small>* Others package managers like JSPM and Bower are not supported yet.</small>

Import or require Vue and Vue Material in your code:

``` javascript
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
```

Or use individual components:

``` javascript
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
```

Alternatively you can <a href="https://github.com/vuematerial/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/vue-material.css">
<script src="path/to/vue-material.js"></script>
```

Optionally import Roboto font & Material Icons from Google CDN:

``` html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
```

## Changelog

<a href="https://github.com/vuematerial/vue-material/releases">Changelog</a>

## Questions

If you have any questions, ideas or you want to discuss with Vue Material community, use [Discord](https://discord.gg/vuematerial) to join us.

## Contributing

Please make sure to read the [Contributing Guide](https://github.com/vuematerial/vue-material/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Vue Material supports all [modern browsers](http://browserl.ist/?q=%3E%3D+1%25).

<small>May work in other browsers but it's untested.</small>

## Become a part of the Vue Material community

####  This project exists thanks to all the people who contribute
<a class="contributors-image" href="https://github.com/vuematerial/vue-material/contributors"><img src="https://opencollective.com/vue-material/contributors.svg?width=1500&button=false" /></a>

#### Sponsors & Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/vue-material)]

<a href="https://opencollective.com/vue-material#backers" target="_blank"><img src="https://opencollective.com/vue-material/tiers/backer.svg?avatarHeight=90" /></a>

## Credits and Thanks

Vue Material does not run under the umbrella of any company or anything like that. It is an independent project created by <a data-v-9248b2ee="" href="https://www.github.com/marcosmoura" target="_blank">Marcos Moura</a> in his spare time, which has become one of the most used UI Libraries for Vue.js. The development is active and we are working hard to release great things for you.

* <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!
* <a href="https://github.com/brunocastro" target="_blank">Bruno Castro</a> for the awesome Vue Material Logo.
* Supported by <a href="https://www.creative-tim.com/?ref=vuematerial.io" target="_blank">Creative Tim</a>

## License

MIT

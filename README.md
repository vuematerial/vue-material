# Vue.js Material

> Material Design for Vue.js

Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank">Material Design</a> specs. It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to <a href="https://saucelabs.com/u/vuejs" target="_blank">modern Web Browsers</a> through Vue 2.0. Build powerful and well-designed web apps that can can fit on every screen. You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API.

## Installation

Install Vue Material through npm or yarn
``` bash
npm install --save vue-material
yarn add vue-material
```

Or <a href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/vue-material.css">
<script src="path/to/vue-material.js"></script>
```

Enable Vue Material in your application using ```Vue.use()```. You can always enable individual components:
``` javascript
Vue.use(VueMaterial);

// OR

Vue.use(VueMaterial.MdCore); //Required to boot vue material
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdToolbar);
```

To get Vue Material working properly, you'll need to configure and apply a default theme.

``` javascript
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
});
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
});
```

## Build Setup

``` bash
### Install dependencies
npm install
yarn

### Start dev server with hot reload
npm run dev

### Build everything
npm run build

### Build docs only
npm run build:docs

### Build lib only
npm run build:lib
```

## Credits and Thanks
* This library aims to delivery components using almost the same API of <a href="https://material.angularjs.org/latest/" target="_blank">Angular Material</a>
* Thanks a lot to <a href="https://github.com/elviskang" target="_blank">elviskang</a> who provided me the **vue-material** name on npm.
* Thanks to <a href="https://github.com/yyx990803" target="_blank">Evan You</a> for allowing me to use Vue.js Logo.

## Internal Dependencies 
You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependence, but aiming to deliver the best experience without break the compatibility with the Vue.js core.
* <a href="http://www.jacklmoore.com/autosize/" target="_blank">autosize</a>
* <a href="https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill" target="_blank">element.scrollintoviewifneeded-polyfill</a>
* <a href="https://github.com/lazd/scopedQuerySelectorShim" target="_blank">scopedQuerySelectorShim</a>

## License 
MIT

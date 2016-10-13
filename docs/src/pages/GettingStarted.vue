<template>
  <single-page class="single-page-home" label="Getting Started">
    <single-page-banner label="Getting Started"></single-page-banner>

    <single-page-section label="Installation">
      <p>
        - Install Vue Material through npm or bower: <br>
        <code>npm install vue-material</code> <br>
        <code>bower install vue-material</code>
      </p>
      <p>- Import or require Vue and Vue Material in your code:</p>
      <code-block lang="javascript">
import Vue from &#039;vue&#039;;
import VueMaterial from &#039;../vue-material&#039;;

// OR

var Vue = require(&#039;vue&#039;);
var VueMaterial = require(&#039;../vue-material&#039;);
      </code-block>
      <small>* Others package managers like JSPM are not supported yet.</small>

      <p>Or <a href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> from Github and reference the script and the stylesheet in yout HTML:</p>
      <code-block lang="xml">
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material.css&quot;&gt;
&lt;script src=&quot;path/to/vue-material.js&quot;&gt;&lt;/script&gt;
      </code-block>
    </single-page-section>

    <single-page-section label="Usage">
      <p>Enable Vue Material in your application using enableAll method. If you want to enable only some components you can enable them using <code>Vue.use()</code>:</p>
      <code-block lang="javascript">
Vue.use(VueMaterial);

// OR

Vue.use(VueMaterial.MdCore); //This is required to boot Vue Material
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdToolbar);
      </code-block>

      <h3 class="md-subheading">Caveats</h3>

      <p>Right now, to get Vue Material working properly, you'll need to use MdTheme and MdInkRipple. The MdTheme will apply the default colors (or the specified ones) and the MdInkRipple will enable ripple effect to Buttons and some other elements.</p>
    </single-page-section>
  </single-page>
</template>

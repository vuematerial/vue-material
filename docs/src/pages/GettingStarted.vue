<template>
  <single-page class="single-page-home" label="Getting Started">
    <single-page-banner label="Getting Started"></single-page-banner>

    <single-page-section label="Installation">
      <p>
        - Install Vue Material through npm or yarn: <br>
        <code>npm install vue-material</code><br>
        <code>yarn add vue-material</code>
      </p>
      <p>- Import or require Vue and Vue Material in your code:</p>
      <code-block lang="javascript">
import Vue from &#039;vue&#039;;
import VueMaterial from &#039;vue-material&#039;;

// OR

var Vue = require(&#039;vue&#039;);
var VueMaterial = require(&#039;vue-material&#039;);
      </code-block>
      <small>* Others package managers like JSPM and Bower are not supported yet.</small>

      <p>Or <a href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> from Github and reference the script and the stylesheet in your HTML:</p>
      <code-block lang="xml">
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material.css&quot;&gt;
&lt;script src=&quot;path/to/vue-material.js&quot;&gt;&lt;/script&gt;
      </code-block>
    </single-page-section>

    <single-page-section label="Usage">
      <p>Enable Vue Material in your application using <code>Vue.use()</code>. You can always enable individual components:</p>
      <code-block lang="javascript">
Vue.use(VueMaterial);

// OR

Vue.use(VueMaterial.MdCore); //Required to boot vue material
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdToolbar);
      </code-block>
    </single-page-section>

    <single-page-section label="Apply theme">
      <p>To get Vue Material working properly, you'll need to configure and apply a default theme.</p>
      <code-block lang="javascript">
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
});
      </code-block>

      <p>Or you can register multiple themes at once.</p>

      <code-block lang="javascript">
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
      </code-block>

      <p>Apply your theme using <code>v-md-theme</code> directive:</p>

      <code-block lang="xml">
&lt;div v-md-theme=&quot;&#039;default&#039;&quot;&gt;&lt;/div&gt;
&lt;div v-md-theme=&quot;&#039;phone&#039;&quot;&gt;&lt;/div&gt;
      </code-block>
    </single-page-section>
  </single-page>
</template>

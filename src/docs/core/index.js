import Vue from 'vue';
import CodeExample from './components/code-example';
import DocsPage from './components/docs-page';
import Navigation from './partials/navigation.html';

Vue.component('code-example', CodeExample);
Vue.component('docs-page', DocsPage);
Vue.partial('navigation', Navigation);

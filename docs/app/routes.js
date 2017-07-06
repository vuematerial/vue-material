import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home/Home.vue')
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import('./pages/GettingStarted.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('./pages/Components.vue')
  },
  {
    path: '/components/button',
    name: 'components/button',
    component: () => import('./pages/Components/Button/Button.vue')
  },
  {
    path: '/components/checkbox',
    name: 'components/checkbox',
    component: () => import('./pages/Components/Checkbox/Checkbox.vue')
  },
  {
    path: '/components/content',
    name: 'components/content',
    component: () => import('./pages/Components/Content/Content.vue')
  },
  {
    path: '/components/divider',
    name: 'components/divider',
    component: () => import('./pages/Components/Divider/Divider.vue')
  },
  {
    path: '/components/drawer',
    name: 'components/drawer',
    component: () => import('./pages/Components/Drawer/Drawer.vue')
  },
  {
    path: '/components/form',
    name: 'form',
    redirect: '/components/input'
  },
  {
    path: '/components/icon',
    name: 'components/icon',
    component: () => import('./pages/Components/Icon/Icon.vue')
  },
  {
    path: '/components/input',
    name: 'components/input',
    component: () => import('./pages/Components/Input/Input.vue')
  },
  {
    path: '/components/list',
    name: 'components/list',
    component: () => import('./pages/Components/List/List.vue')
  },
  {
    path: '/components/radio',
    name: 'components/radio',
    component: () => import('./pages/Components/Radio/Radio.vue')
  },
  {
    path: '/components/subheader',
    name: 'components/subheader',
    component: () => import('./pages/Components/Subheader/Subheader.vue')
  },
  {
    path: '/components/switch',
    name: 'components/switch',
    component: () => import('./pages/Components/Switch/Switch.vue')
  },
  {
    path: '/components/toolbar',
    name: 'components/toolbar',
    component: () => import('./pages/Components/Toolbar/Toolbar.vue')
  },
  {
    path: '/ui-elements',
    name: 'ui-elements',
    component: () => import('./pages/UiElements.vue')
  },
  {
    path: '/ui-elements/layout',
    name: 'ui-elements/layout',
    component: () => import('./pages/UiElements/Layout/Layout.vue')
  },
  {
    path: '/ui-elements/scrollbar',
    name: 'ui-elements/scrollbar',
    component: () => import('./pages/UiElements/Scrollbar/Scrollbar.vue')
  },
  {
    path: '/ui-elements/text-selection',
    name: 'ui-elements/text-selection',
    component: () => import('./pages/UiElements/TextSelection/TextSelection.vue')
  },
  {
    path: '/ui-elements/typography',
    name: 'ui-elements/typography',
    component: () => import('./pages/UiElements/Typography/Typography.vue')
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import('./pages/Temp.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('./pages/Error.vue')
  }
]

const debug = process.env.NODE_ENV !== 'production'

export default new VueRouter({
  mode: debug ? 'hash' : 'history',
  routes
})

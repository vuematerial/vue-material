import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/components/tabs/:test?',
    name: 'components/tabs',
    component: () => import(/* webpackChunkName: "tabs" */ './pages/Components/Tabs/Tabs.vue')
  },
  {
    path: '/components/chips',
    name: 'components/chips',
    component: () => import(/* webpackChunkName: "chips" */ './pages/Components/Chips/Chips.vue')
  },
  {
    path: '/components/avatar',
    name: 'components/avatar',
    component: () => import(/* webpackChunkName: "avatar" */ './pages/Components/Avatar/Avatar.vue')
  },
  {
    path: '/components/speed-dial',
    name: 'components/speed-dial',
    component: () => import(/* webpackChunkName: "speed-dial" */ './pages/Components/SpeedDial/SpeedDial.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './pages/Home/Home.vue')
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import(/* webpackChunkName: "getting-started" */ './pages/GettingStarted.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ './pages/Components.vue')
  },
  {
    path: '/components/button',
    name: 'components/button',
    component: () => import(/* webpackChunkName: "button" */ './pages/Components/Button/Button.vue')
  },
  {
    path: '/components/app',
    name: 'components/app',
    component: () => import(/* webpackChunkName: "app" */ './pages/Components/App/App.vue')
  },
  {
    path: '/components/checkbox',
    name: 'components/checkbox',
    component: () => import(/* webpackChunkName: "checkbox" */ './pages/Components/Checkbox/Checkbox.vue')
  },
  {
    path: '/components/content',
    name: 'components/content',
    component: () => import(/* webpackChunkName: "content" */ './pages/Components/Content/Content.vue')
  },
  {
    path: '/components/divider',
    name: 'components/divider',
    component: () => import(/* webpackChunkName: "divider" */ './pages/Components/Divider/Divider.vue')
  },
  {
    path: '/components/drawer',
    name: 'components/drawer',
    component: () => import(/* webpackChunkName: "drawer" */ './pages/Components/Drawer/Drawer.vue')
  },
  {
    path: '/components/card',
    name: 'components/card',
    component: () => import(/* webpackChunkName: "card" */ './pages/Components/Card/Card.vue')
  },
  {
    path: '/components/form',
    name: 'form',
    redirect: '/components/input'
  },
  {
    path: '/components/icon',
    name: 'components/icon',
    component: () => import(/* webpackChunkName: "icon" */ './pages/Components/Icon/Icon.vue')
  },
  {
    path: '/components/input',
    name: 'components/input',
    component: () => import(/* webpackChunkName: "input" */ './pages/Components/Input/Input.vue')
  },
  {
    path: '/components/list',
    name: 'components/list',
    component: () => import(/* webpackChunkName: "list" */ './pages/Components/List/List.vue')
  },
  {
    path: '/components/radio',
    name: 'components/radio',
    component: () => import(/* webpackChunkName: "radio" */ './pages/Components/Radio/Radio.vue')
  },
  {
    path: '/components/subheader',
    name: 'components/subheader',
    component: () => import(/* webpackChunkName: "subheader" */ './pages/Components/Subheader/Subheader.vue')
  },
  {
    path: '/components/switch',
    name: 'components/switch',
    component: () => import(/* webpackChunkName: "switch" */ './pages/Components/Switch/Switch.vue')
  },
  {
    path: '/components/toolbar',
    name: 'components/toolbar',
    component: () => import(/* webpackChunkName: "toolbar" */ './pages/Components/Toolbar/Toolbar.vue')
  },
  {
    path: '/ui-elements',
    name: 'ui-elements',
    component: () => import(/* webpackChunkName: "ui-elements" */ './pages/UiElements.vue')
  },
  {
    path: '/ui-elements/layout',
    name: 'ui-elements/layout',
    component: () => import(/* webpackChunkName: "layout" */ './pages/UiElements/Layout/Layout.vue')
  },
  {
    path: '/ui-elements/scrollbar',
    name: 'ui-elements/scrollbar',
    component: () => import(/* webpackChunkName: "scrollbar" */ './pages/UiElements/Scrollbar/Scrollbar.vue')
  },
  {
    path: '/ui-elements/text-selection',
    name: 'ui-elements/text-selection',
    component: () => import(/* webpackChunkName: "text-selection" */ './pages/UiElements/TextSelection/TextSelection.vue')
  },
  {
    path: '/ui-elements/typography',
    name: 'ui-elements/typography',
    component: () => import(/* webpackChunkName: "typography" */ './pages/UiElements/Typography/Typography.vue')
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import(/* webpackChunkName: "temp" */ './pages/Temp.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ './pages/Error.vue')
  }
]

const debug = process.env.NODE_ENV !== 'production'

export default new VueRouter({
  mode: debug ? 'hash' : 'history',
  routes
})

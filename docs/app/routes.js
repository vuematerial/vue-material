export const routes = [
  {
    path: '/components/badge',
    name: 'components/badge',
    page: 'Components/Badge/Badge.vue'
  },
  {
    path: '/components/autocomplete',
    name: 'components/autocomplete',
    page: 'Components/Autocomplete/Autocomplete.vue'
  },
  {
    path: '/components/progress',
    name: 'components/progress',
    redirect: '/components/progress-bar'
  },
  {
    path: '/components/progress-bar',
    name: 'components/progress-bar',
    page: 'Components/ProgressBar/ProgressBar.vue'
  },
  {
    path: '/components/progress-spinner',
    name: 'components/progress-spinner',
    page: 'Components/ProgressSpinner/ProgressSpinner.vue'
  },
  {
    path: '/components/table',
    name: 'components/table',
    page: 'Components/Table/Table.vue'
  },
  {
    path: '/components/empty-state',
    name: 'components/empty-state',
    page: 'Components/EmptyState/EmptyState.vue'
  },
  {
    path: '/components/select',
    name: 'components/select',
    page: 'Components/Select/Select.vue'
  },
  {
    path: '/components/datepicker',
    name: 'components/datepicker',
    page: 'Components/Datepicker/Datepicker.vue'
  },
  {
    path: '/components/steppers/:optional?/:sub?',
    name: 'components/steppers',
    page: 'Components/Steppers/Steppers.vue'
  },
  {
    path: '/components/menu',
    name: 'components/menu',
    page: 'Components/Menu/Menu.vue'
  },
  {
    path: '/components/tooltip',
    name: 'components/tooltip',
    page: 'Components/Tooltip/Tooltip.vue'
  },
  {
    path: '/components/dialog',
    name: 'components/dialog',
    page: 'Components/Dialog/Dialog.vue'
  },
  {
    path: '/components/snackbar',
    name: 'components/snackbar',
    page: 'Components/Snackbar/Snackbar.vue'
  },
  {
    path: '/components/tabs/:optional?/:sub?',
    name: 'components/tabs',
    page: 'Components/Tabs/Tabs.vue'
  },
  {
    path: '/components/bottom-bar/:optional?/:sub?',
    name: 'components/bottom-bar',
    page: 'Components/BottomBar/BottomBar.vue'
  },
  {
    path: '/components/chips',
    name: 'components/chips',
    page: 'Components/Chips/Chips.vue'
  },
  {
    path: '/components/avatar',
    name: 'components/avatar',
    page: 'Components/Avatar/Avatar.vue'
  },
  {
    path: '/components/speed-dial',
    name: 'components/speed-dial',
    page: 'Components/SpeedDial/SpeedDial.vue'
  },
  {
    path: '/about',
    name: 'about',
    page: 'About.vue'
  },
  {
    path: '/license',
    name: 'license',
    page: 'License.vue'
  },
  {
    path: '/',
    name: 'home',
    page: 'Home/Home.vue'
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    page: 'GettingStarted.vue'
  },
  {
    path: '/configuration',
    name: 'configuration',
    page: 'Configuration.vue'
  },
  {
    path: '/themes',
    name: 'themes',
    redirect: '/themes/concepts'
    // page: 'Themes/Themes.vue'
  },
  {
    path: '/themes/concepts',
    name: 'themes/concepts',
    page: 'Themes/Concepts.vue'
  },
  {
    path: '/themes/prebuilt',
    name: 'themes/prebuilt',
    page: 'Themes/Prebuilt.vue'
  },
  {
    path: '/themes/configuration',
    name: 'themes/configuration',
    page: 'Themes/Configuration.vue'
  },
  {
    path: '/themes/advanced',
    name: 'themes/advanced',
    page: 'Themes/Advanced.vue'
  },
  {
    path: '/components',
    name: 'components',
    redirect: '/components/app'
    // page: 'Components.vue'
  },
  {
    path: '/components/button',
    name: 'components/button',
    page: 'Components/Button/Button.vue'
  },
  {
    path: '/components/app',
    name: 'components/app',
    page: 'Components/App/App.vue'
  },
  {
    path: '/components/checkbox',
    name: 'components/checkbox',
    page: 'Components/Checkbox/Checkbox.vue'
  },
  {
    path: '/components/content',
    name: 'components/content',
    page: 'Components/Content/Content.vue'
  },
  {
    path: '/components/divider',
    name: 'components/divider',
    page: 'Components/Divider/Divider.vue'
  },
  {
    path: '/components/drawer',
    name: 'components/drawer',
    page: 'Components/Drawer/Drawer.vue'
  },
  {
    path: '/components/card',
    name: 'components/card',
    page: 'Components/Card/Card.vue'
  },
  {
    path: '/components/form',
    name: 'form',
    page: 'Components/Form/Form.vue'
  },
  {
    path: '/components/icon',
    name: 'components/icon',
    page: 'Components/Icon/Icon.vue'
  },
  {
    path: '/components/input',
    name: 'components/input',
    page: 'Components/Input/Input.vue'
  },
  {
    path: '/components/file',
    name: 'components/file',
    page: 'Components/File/File.vue'
  },
  {
    path: '/components/list/:optional?/:sub?',
    name: 'components/list',
    page: 'Components/List/List.vue'
  },
  {
    path: '/components/radio',
    name: 'components/radio',
    page: 'Components/Radio/Radio.vue'
  },
  {
    path: '/components/subheader',
    name: 'components/subheader',
    page: 'Components/Subheader/Subheader.vue'
  },
  {
    path: '/components/switch',
    name: 'components/switch',
    page: 'Components/Switch/Switch.vue'
  },
  {
    path: '/components/toolbar',
    name: 'components/toolbar',
    page: 'Components/Toolbar/Toolbar.vue'
  },
  {
    path: '/ui-elements',
    name: 'ui-elements',
    redirect: '/ui-elements/elevation'
    // page: 'UiElements.vue'
  },
  {
    path: '/ui-elements/elevation',
    name: 'ui-elements/elevation',
    page: 'UiElements/Elevation/Elevation.vue'
  },
  {
    path: '/ui-elements/layout',
    name: 'ui-elements/layout',
    page: 'UiElements/Layout/Layout.vue'
  },
  {
    path: '/ui-elements/scrollbar',
    name: 'ui-elements/scrollbar',
    page: 'UiElements/Scrollbar/Scrollbar.vue'
  },
  {
    path: '/ui-elements/text-selection',
    name: 'ui-elements/text-selection',
    page: 'UiElements/TextSelection/TextSelection.vue'
  },
  {
    path: '/ui-elements/typography',
    name: 'ui-elements/typography',
    page: 'UiElements/Typography/Typography.vue'
  },
  {
    path: '/with-router',
    name: 'with-router',
    page: 'WithRouter.vue'
  },
  {
    path: '*',
    name: 'error',
    page: 'Error.vue'
  }
]

export const mapRoutes = () => {
  const mappedRoutes = []

  routes.forEach(route => {
    if (!route.redirect && route.path !== '*') {
      mappedRoutes.push(route.path.replace('/:optional?/:sub?', ''))
    }
  })

  return mappedRoutes
}

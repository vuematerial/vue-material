/* Root */
const Introduction = (r) => require.ensure([], () => r(require('./pages/Introduction')), 'base');
const GettingStarted = (r) => require.ensure([], () => r(require('./pages/GettingStarted')), 'base');
const About = (r) => require.ensure([], () => r(require('./pages/About')), 'base');
const Changelog = (r) => require.ensure([], () => r(require('./pages/Changelog')), 'base');
const Error404 = (r) => require.ensure([], () => r(require('./pages/Error')), 'base');

/* Components */
const Avatar = (r) => require.ensure([], () => r(require('./pages/components/Avatar')), 'components');
const BottomBar = (r) => require.ensure([], () => r(require('./pages/components/BottomBar')), 'components');
const Buttons = (r) => require.ensure([], () => r(require('./pages/components/Buttons')), 'components');
const ButtonToggle = (r) => require.ensure([], () => r(require('./pages/components/ButtonToggle')), 'components');
const Card = (r) => require.ensure([], () => r(require('./pages/components/Card')), 'components');
const Checkbox = (r) => require.ensure([], () => r(require('./pages/components/Checkbox')), 'components');
const Chips = (r) => require.ensure([], () => r(require('./pages/components/Chips')), 'components');
const Dialog = (r) => require.ensure([], () => r(require('./pages/components/Dialog')), 'components');
const FileComponent = (r) => require.ensure([], () => r(require('./pages/components/File')), 'components');
const Icon = (r) => require.ensure([], () => r(require('./pages/components/Icon')), 'components');
const ImageLoader = (r) => require.ensure([], () => r(require('./pages/components/ImageLoader')), 'components');
const InkRipple = (r) => require.ensure([], () => r(require('./pages/components/InkRipple')), 'components');
const Input = (r) => require.ensure([], () => r(require('./pages/components/Input')), 'components');
const List = (r) => require.ensure([], () => r(require('./pages/components/List')), 'components');
const Menu = (r) => require.ensure([], () => r(require('./pages/components/Menu')), 'components');
const Progress = (r) => require.ensure([], () => r(require('./pages/components/Progress')), 'components');
const Radio = (r) => require.ensure([], () => r(require('./pages/components/Radio')), 'components');
const Select = (r) => require.ensure([], () => r(require('./pages/components/Select')), 'components');
const Sidenav = (r) => require.ensure([], () => r(require('./pages/components/Sidenav')), 'components');
const Snackbar = (r) => require.ensure([], () => r(require('./pages/components/Snackbar')), 'components');
const SpeedDial = (r) => require.ensure([], () => r(require('./pages/components/SpeedDial')), 'components');
const Spinner = (r) => require.ensure([], () => r(require('./pages/components/Spinner')), 'components');
const Subheader = (r) => require.ensure([], () => r(require('./pages/components/Subheader')), 'components');
const Switch = (r) => require.ensure([], () => r(require('./pages/components/Switch')), 'components');
const Table = (r) => require.ensure([], () => r(require('./pages/components/Table')), 'components');
const Tabs = (r) => require.ensure([], () => r(require('./pages/components/Tabs')), 'components');
const Toolbar = (r) => require.ensure([], () => r(require('./pages/components/Toolbar')), 'components');
const Tooltip = (r) => require.ensure([], () => r(require('./pages/components/Tooltip')), 'components');
const Whiteframe = (r) => require.ensure([], () => r(require('./pages/components/Whiteframe')), 'components');

/* UI Elements */
const Typography = (r) => require.ensure([], () => r(require('./pages/ui-elements/Typography')), 'ui-elements');
const Layout = (r) => require.ensure([], () => r(require('./pages/ui-elements/Layout')), 'ui-elements');

/* Themes */
const Configuration = (r) => require.ensure([], () => r(require('./pages/themes/Configuration')), 'themes');
const DynamicThemes = (r) => require.ensure([], () => r(require('./pages/themes/DynamicThemes')), 'themes');

const main = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: GettingStarted
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: Changelog
  }
];

const components = [
  {
    path: '/components',
    name: 'components',
    redirect: '/components/avatar'
  },
  {
    path: '/components/avatar',
    name: 'components:avatar',
    component: Avatar
  },
  {
    path: '/components/bottom-bar',
    name: 'components:bottom-bar',
    component: BottomBar
  },
  {
    path: '/components/button',
    name: 'components:button',
    component: Buttons
  },
  {
    path: '/components/button-toggle',
    name: 'components:button-toggle',
    component: ButtonToggle
  },
  {
    path: '/components/card',
    name: 'components:card',
    component: Card
  },
  {
    path: '/components/checkbox',
    name: 'components:checkbox',
    component: Checkbox
  },
  {
    path: '/components/chips',
    name: 'components:chips',
    component: Chips
  },
  {
    path: '/components/dialog',
    name: 'components:dialog',
    component: Dialog
  },
  {
    path: '/components/file',
    name: 'components:file',
    component: FileComponent
  },
  {
    path: '/components/icon',
    name: 'components:icon',
    component: Icon
  },
  {
    path: '/components/image-loader',
    name: 'components:image-loader',
    component: ImageLoader
  },
  {
    path: '/components/ink-ripple',
    name: 'components:ink-ripple',
    component: InkRipple
  },
  {
    path: '/components/input',
    name: 'components:input',
    component: Input
  },
  {
    path: '/components/list',
    name: 'components:list',
    component: List
  },
  {
    path: '/components/menu',
    name: 'components:menu',
    component: Menu
  },
  {
    path: '/components/progress',
    name: 'components:progress',
    component: Progress
  },
  {
    path: '/components/radio',
    name: 'components:radio',
    component: Radio
  },
  {
    path: '/components/select',
    name: 'components:select',
    component: Select
  },
  {
    path: '/components/sidenav',
    name: 'components:sidenav',
    component: Sidenav
  },
  {
    path: '/components/snackbar',
    name: 'components:snackbar',
    component: Snackbar
  },
  {
    path: '/components/speed-dial',
    name: 'components:speed-dial',
    component: SpeedDial
  },
  {
    path: '/components/spinner',
    name: 'components:spinner',
    component: Spinner
  },
  {
    path: '/components/subheader',
    name: 'components:subheader',
    component: Subheader
  },
  {
    path: '/components/switch',
    name: 'components:switch',
    component: Switch
  },
  {
    path: '/components/table',
    name: 'components:table',
    component: Table
  },
  {
    path: '/components/tabs',
    name: 'components:tabs',
    component: Tabs
  },
  {
    path: '/components/toolbar',
    name: 'components:toolbar',
    component: Toolbar
  },
  {
    path: '/components/tooltip',
    name: 'components:tooltip',
    component: Tooltip
  },
  {
    path: '/components/whiteframe',
    name: 'components:whiteframe',
    component: Whiteframe
  }
];

const theme = [
  {
    path: '/themes',
    name: 'themes',
    redirect: '/themes/configuration'
  },
  {
    path: '/themes/configuration',
    name: 'themes:configuration',
    component: Configuration
  },
  {
    path: '/themes/dynamic-themes',
    name: 'themes:dynamic-themes',
    component: DynamicThemes
  }
];

const uiElements = [
  {
    path: '/ui-elements',
    name: 'ui-elements',
    redirect: '/ui-elements/typography'
  },
  {
    path: '/ui-elements/typography',
    name: 'ui-elements:typography',
    component: Typography
  },
  {
    path: '/ui-elements/layout',
    name: 'ui-elements:layout',
    component: Layout
  }
];

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
];

export default [].concat(main, components, theme, uiElements, error);

/* Root */
const Introduction = (r) => require.ensure([], () => r(require('./pages/Introduction')), 'base');
const GettingStarted = (r) => require.ensure([], () => r(require('./pages/GettingStarted')), 'base');
const About = (r) => require.ensure([], () => r(require('./pages/About')), 'base');
const Changelog = (r) => require.ensure([], () => r(require('./pages/Changelog')), 'base');
const Error404 = (r) => require.ensure([], () => r(require('./pages/Error')), 'base');

/* Components */
const Avatar = (r) => require.ensure([], () => r(require('./pages/components/Avatar')), 'avatar');
const BottomBar = (r) => require.ensure([], () => r(require('./pages/components/BottomBar')), 'bottom-bar');
const Buttons = (r) => require.ensure([], () => r(require('./pages/components/Buttons')), 'buttons');
const ButtonToggle = (r) => require.ensure([], () => r(require('./pages/components/ButtonToggle')), 'button-toggle');
const Card = (r) => require.ensure([], () => r(require('./pages/components/Card')), 'card');
const Checkbox = (r) => require.ensure([], () => r(require('./pages/components/Checkbox')), 'checkbox');
const Chips = (r) => require.ensure([], () => r(require('./pages/components/Chips')), 'chips');
const Dialog = (r) => require.ensure([], () => r(require('./pages/components/Dialog')), 'dialog');
const FileComponent = (r) => require.ensure([], () => r(require('./pages/components/File')), 'file');
const Icon = (r) => require.ensure([], () => r(require('./pages/components/Icon')), 'icon');
const ImageLoader = (r) => require.ensure([], () => r(require('./pages/components/ImageLoader')), 'image-loader');
const InkRipple = (r) => require.ensure([], () => r(require('./pages/components/InkRipple')), 'ink-ripple');
const Input = (r) => require.ensure([], () => r(require('./pages/components/Input')), 'input');
const List = (r) => require.ensure([], () => r(require('./pages/components/List')), 'list');
const Menu = (r) => require.ensure([], () => r(require('./pages/components/Menu')), 'menu');
const Progress = (r) => require.ensure([], () => r(require('./pages/components/Progress')), 'progress');
const Radio = (r) => require.ensure([], () => r(require('./pages/components/Radio')), 'radio');
const RatingBar = (r) => require.ensure([], () => r(require('./pages/components/RatingBar')), 'rating-bar');
const Select = (r) => require.ensure([], () => r(require('./pages/components/Select')), 'select');
const Sidenav = (r) => require.ensure([], () => r(require('./pages/components/Sidenav')), 'sidenav');
const Snackbar = (r) => require.ensure([], () => r(require('./pages/components/Snackbar')), 'snackbar');
const SpeedDial = (r) => require.ensure([], () => r(require('./pages/components/SpeedDial')), 'speed-dial');
const Spinner = (r) => require.ensure([], () => r(require('./pages/components/Spinner')), 'spinner');
const Subheader = (r) => require.ensure([], () => r(require('./pages/components/Subheader')), 'subheader');
const Switch = (r) => require.ensure([], () => r(require('./pages/components/Switch')), 'switch');
const Table = (r) => require.ensure([], () => r(require('./pages/components/Table')), 'table');
const Tabs = (r) => require.ensure([], () => r(require('./pages/components/Tabs')), 'tabs');
const Toolbar = (r) => require.ensure([], () => r(require('./pages/components/Toolbar')), 'toolbar');
const Tooltip = (r) => require.ensure([], () => r(require('./pages/components/Tooltip')), 'tooltip');
const Whiteframe = (r) => require.ensure([], () => r(require('./pages/components/Whiteframe')), 'whiteframe');

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
    path: '/components/rating-bar',
    name: 'components:rating-bar',
    component: RatingBar
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

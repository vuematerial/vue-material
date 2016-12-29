/* Root */
const Introduction = require('./pages/Introduction');
const GettingStarted = require('./pages/GettingStarted');
const About = require('./pages/About');
const Changelog = require('./pages/Changelog');
const Error404 = require('./pages/Error');

/* Components */
const Avatar = (resolve) => require(['./pages/components/Avatar'], resolve);
const BottomBar = (resolve) => require(['./pages/components/BottomBar'], resolve);
const Buttons = (resolve) => require(['./pages/components/Buttons'], resolve);
const ButtonToggle = (resolve) => require(['./pages/components/ButtonToggle'], resolve);
const Card = (resolve) => require(['./pages/components/Card'], resolve);
const Checkbox = (resolve) => require(['./pages/components/Checkbox'], resolve);
const Chips = (resolve) => require(['./pages/components/Chips'], resolve);
const Dialog = (resolve) => require(['./pages/components/Dialog'], resolve);
const File = (resolve) => require(['./pages/components/File'], resolve);
const Icon = (resolve) => require(['./pages/components/Icon'], resolve);
const ImageLoader = (resolve) => require(['./pages/components/ImageLoader'], resolve);
const InkRipple = (resolve) => require(['./pages/components/InkRipple'], resolve);
const Input = (resolve) => require(['./pages/components/Input'], resolve);
const List = (resolve) => require(['./pages/components/List'], resolve);
const Menu = (resolve) => require(['./pages/components/Menu'], resolve);
const Progress = (resolve) => require(['./pages/components/Progress'], resolve);
const Radio = (resolve) => require(['./pages/components/Radio'], resolve);
const Select = (resolve) => require(['./pages/components/Select'], resolve);
const Sidenav = (resolve) => require(['./pages/components/Sidenav'], resolve);
const Snackbar = (resolve) => require(['./pages/components/Snackbar'], resolve);
const Spinner = (resolve) => require(['./pages/components/Spinner'], resolve);
const Subheader = (resolve) => require(['./pages/components/Subheader'], resolve);
const Switch = (resolve) => require(['./pages/components/Switch'], resolve);
const Table = (resolve) => require(['./pages/components/Table'], resolve);
const Tabs = (resolve) => require(['./pages/components/Tabs'], resolve);
const Toolbar = (resolve) => require(['./pages/components/Toolbar'], resolve);
const Tooltip = (resolve) => require(['./pages/components/Tooltip'], resolve);
const Whiteframe = (resolve) => require(['./pages/components/Whiteframe'], resolve);

/* UI Elements */
const Typography = (resolve) => require(['./pages/ui-elements/Typography'], resolve);
const Layout = (resolve) => require(['./pages/ui-elements/Layout'], resolve);

/* Themes */
const Configuration = (resolve) => require(['./pages/themes/Configuration'], resolve);
const DynamicThemes = (resolve) => require(['./pages/themes/DynamicThemes'], resolve);

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
    component: File
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

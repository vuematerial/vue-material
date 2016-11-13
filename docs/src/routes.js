/* main */
import Introduction from './pages/Introduction';
import GettingStarted from './pages/GettingStarted';
import About from './pages/About';
import Changelog from './pages/Changelog';
import Error404 from './pages/Error';

/* Components */
import Avatar from './pages/components/Avatar';
import BottomBar from './pages/components/BottomBar';
import Buttons from './pages/components/Buttons';
import ButtonToggle from './pages/components/ButtonToggle';
import Card from './pages/components/Card';
import Checkbox from './pages/components/Checkbox';
import Icon from './pages/components/Icon';
import Input from './pages/components/Input';
import List from './pages/components/List';
import Menu from './pages/components/Menu';
import Radio from './pages/components/Radio';
import Ripple from './pages/components/Ripple';
import Select from './pages/components/Select';
import Sidenav from './pages/components/Sidenav';
import Subheader from './pages/components/Subheader';
import Switch from './pages/components/Switch';
import Table from './pages/components/Table';
import Tabs from './pages/components/Tabs';
import Toolbar from './pages/components/Toolbar';
import Tooltip from './pages/components/Tooltip';
import Whiteframe from './pages/components/Whiteframe';

/* UI Elements */
import Typography from './pages/ui-elements/Typography';
import GridSystem from './pages/ui-elements/GridSystem';

/* Themes */
import Configuration from './pages/themes/Configuration';
import DynamicThemes from './pages/themes/DynamicThemes';

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
    path: '/components/icon',
    name: 'components:icon',
    component: Icon
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
    path: '/components/radio',
    name: 'components:radio',
    component: Radio
  },
  {
    path: '/components/ripple',
    name: 'components:ripple',
    component: Ripple
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
    path: '/components/switch',
    name: 'components:switch',
    component: Switch
  },
  {
    path: '/components/subheader',
    name: 'components:subheader',
    component: Subheader
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
    path: '/ui-elements/grid-system',
    name: 'ui-elements:grid-system',
    component: GridSystem
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

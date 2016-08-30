import Home from './pages/Home';
import Avatar from './pages/Avatar';
import BottomBar from './pages/BottomBar';
import Buttons from './pages/Buttons';
import ButtonToggle from './pages/ButtonToggle';
import Checkbox from './pages/Checkbox';
import Divider from './pages/Divider';
import Icon from './pages/Icon';
import Input from './pages/Input';
import List from './pages/List';
import Radio from './pages/Radio';
import Ripple from './pages/Ripple';
import Select from './pages/Select';
import Sidenav from './pages/Sidenav';
import Subheader from './pages/Subheader';
import Switch from './pages/Switch';
import Theme from './pages/Theme';
import Toolbar from './pages/Toolbar';
import Tooltip from './pages/Tooltip';
import Whiteframe from './pages/Whiteframe';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: Avatar
  },
  {
    path: '/bottom-bar',
    name: 'bottomBar',
    component: BottomBar
  },
  {
    path: '/button',
    name: 'button',
    component: Buttons
  },
  {
    path: '/button-toggle',
    name: 'buttonToggle',
    component: ButtonToggle
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio
  },
  {
    path: '/switch',
    name: 'switch',
    component: Switch
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox
  },
  {
    path: '/divider',
    name: 'divider',
    component: Divider
  },
  {
    path: '/icon',
    name: 'icon',
    component: Icon
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: Ripple
  },
  {
    path: '/sidenav',
    name: 'sidenav',
    component: Sidenav
  },
  {
    path: '/select',
    name: 'select',
    component: Select
  },
  {
    path: '/subheader',
    name: 'subheader',
    component: Subheader
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: Toolbar
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: Tooltip
  },
  {
    path: '/whiteframe',
    name: 'whiteframe',
    component: Whiteframe
  }
];

export default routes;

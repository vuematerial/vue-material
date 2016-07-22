import './core/core';
import MdTheme from './components/mdTheme';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';
import MdToolbar from './components/mdToolbar';
import MdSidenav from './components/mdSidenav';
import MdAvatar from './components/mdAvatar';
import MdList from './components/mdList';
import MdWhiteframe from './components/mdWhiteframe';

let options = {
  MdAvatar,
  MdBottomBar,
  MdButton,
  MdButtonToggle,
  MdIcon,
  MdInkRipple,
  MdList,
  MdSidenav,
  MdToolbar,
  MdWhiteframe,
  MdTheme
};

options.enableAll = (Vue) => {
  for (let component in options) {
    if (component !== 'MdTheme' && component !== 'enableAll') {
      Vue.use(options[component]);
    }
  }
};

export default options;

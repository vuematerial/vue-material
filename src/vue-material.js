import './core/core';
import MdTheme from './components/mdTheme';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdCheckbox from './components/mdCheckbox';
import mdRadio from './components/mdRadio';
import mdSwitch from './components/mdSwitch';
import MdDivider from './components/mdDivider';
import MdIcon from './components/mdIcon';
import MdInputContainer from './components/mdInputContainer';
import MdBottomBar from './components/mdBottomBar';
import MdToolbar from './components/mdToolbar';
import MdTooltip from './components/mdTooltip';
import MdSidenav from './components/mdSidenav';
import MdAvatar from './components/mdAvatar';
import MdList from './components/mdList';
import MdWhiteframe from './components/mdWhiteframe';

let options = {
  MdAvatar,
  MdBottomBar,
  MdButton,
  MdButtonToggle,
  MdCheckbox,
  mdRadio,
  mdSwitch,
  MdDivider,
  MdIcon,
  MdInputContainer,
  MdInkRipple,
  MdList,
  MdSidenav,
  MdToolbar,
  MdTooltip,
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

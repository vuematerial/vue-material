import './core/core';
import MdAvatar from './components/mdAvatar';
import MdBottomBar from './components/mdBottomBar';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdCheckbox from './components/mdCheckbox';
import MdDivider from './components/mdDivider';
import MdIcon from './components/mdIcon';
import MdInkRipple from './components/mdInkRipple';
import MdInputContainer from './components/mdInputContainer';
import MdList from './components/mdList';
import mdRadio from './components/mdRadio';
import MdSelect from './components/mdSelect';
import MdSidenav from './components/mdSidenav';
import MdSubheader from './components/mdSubheader';
import mdSwitch from './components/mdSwitch';
import mdTabs from './components/mdTabs';
import MdToolbar from './components/mdToolbar';
import MdTooltip from './components/mdTooltip';
import MdWhiteframe from './components/mdWhiteframe';
import MdTheme from './components/mdTheme';

let options = {
  MdAvatar,
  MdBottomBar,
  MdButton,
  MdButtonToggle,
  MdCheckbox,
  MdDivider,
  MdIcon,
  MdInkRipple,
  MdInputContainer,
  MdList,
  mdRadio,
  MdSelect,
  MdSidenav,
  MdSubheader,
  mdSwitch,
  mdTabs,
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

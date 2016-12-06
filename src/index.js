import MdCore from './core';
import MdAvatar from './components/mdAvatar';
import MdBackdrop from './components/mdBackdrop';
import MdBottomBar from './components/mdBottomBar';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdCard from './components/mdCard';
import MdChips from './components/mdChips';
import MdCheckbox from './components/mdCheckbox';
import MdDialog from './components/mdDialog';
import MdDivider from './components/mdDivider';
import MdIcon from './components/mdIcon';
import MdInputContainer from './components/mdInputContainer';
import MdList from './components/mdList';
import MdMenu from './components/mdMenu';
import MdRadio from './components/mdRadio';
import MdSelect from './components/mdSelect';
import MdSidenav from './components/mdSidenav';
import MdSubheader from './components/mdSubheader';
import MdSwitch from './components/mdSwitch';
import MdTable from './components/mdTable';
import MdTabs from './components/mdTabs';
import MdToolbar from './components/mdToolbar';
import MdTooltip from './components/mdTooltip';
import MdWhiteframe from './components/mdWhiteframe';

const options = {
  MdCore,
  MdAvatar,
  MdBackdrop,
  MdBottomBar,
  MdButton,
  MdButtonToggle,
  MdCard,
  MdChips,
  MdCheckbox,
  MdDialog,
  MdDivider,
  MdIcon,
  MdInputContainer,
  MdList,
  MdMenu,
  MdRadio,
  MdSelect,
  MdSidenav,
  MdSubheader,
  MdSwitch,
  MdTable,
  MdTabs,
  MdToolbar,
  MdTooltip,
  MdWhiteframe
};

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

window.VueMaterial = options;

export default options;

import MdCore from './core';
import MdAvatar from './components/mdAvatar';
import MdBackdrop from './components/mdBackdrop';
import MdBottomBar from './components/mdBottomBar';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdCard from './components/mdCard';
import MdCheckbox from './components/mdCheckbox';
import MdDialog from './components/mdDialog';
import MdDivider from './components/mdDivider';
import MdIcon from './components/mdIcon';
import MdInputContainer from './components/mdInputContainer';
import MdLayout from './components/mdLayout';
import MdList from './components/mdList';
import MdMenu from './components/mdMenu';
import MdRadio from './components/mdRadio';
import MdSelect from './components/mdSelect';
import MdSidenav from './components/mdSidenav';
/*import MdSnackbar from './components/mdSnackbar';*/
import MdSpinner from './components/mdSpinner';
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
  MdCheckbox,
  MdDialog,
  MdDivider,
  MdIcon,
  MdInputContainer,
  MdLayout,
  MdList,
  MdMenu,
  MdRadio,
  MdSelect,
  MdSidenav,
  /*MdSnackbar,*/
  MdSpinner,
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

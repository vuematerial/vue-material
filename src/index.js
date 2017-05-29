import MdCore from './core';
import MdAvatar from './components/mdAvatar';
import MdBackdrop from './components/mdBackdrop';
import MdBottomBar from './components/mdBottomBar';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdCard from './components/mdCard';
import MdCheckbox from './components/mdCheckbox';
import MdChips from './components/mdChips';
import MdDialog from './components/mdDialog';
import MdDivider from './components/mdDivider';
import MdFile from './components/mdFile';
import MdIcon from './components/mdIcon';
import MdImage from './components/mdImage';
import MdInputContainer from './components/mdInputContainer';
import MdLayout from './components/mdLayout';
import MdList from './components/mdList';
import MdMenu from './components/mdMenu';
import MdOnboarding from './components/mdOnboarding';
import MdProgress from './components/mdProgress';
import MdRadio from './components/mdRadio';
import MdRatingBar from './components/mdRatingBar';
import MdSelect from './components/mdSelect';
import MdSidenav from './components/mdSidenav';
import MdSnackbar from './components/mdSnackbar';
import MdSpeedDial from './components/mdSpeedDial';
import MdSpinner from './components/mdSpinner';
import MdStepper from './components/mdStepper';
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
  MdChips,
  MdDialog,
  MdDivider,
  MdFile,
  MdIcon,
  MdImage,
  MdInputContainer,
  MdLayout,
  MdList,
  MdMenu,
  MdOnboarding,
  MdProgress,
  MdRadio,
  MdRatingBar,
  MdSelect,
  MdSidenav,
  MdSnackbar,
  MdSpeedDial,
  MdSpinner,
  MdStepper,
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

export default options;

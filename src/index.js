import mdCore from './core';
import mdAvatar from './components/mdAvatar';
import mdBottomBar from './components/mdBottomBar';
import mdButton from './components/mdButton';
import mdButtonToggle from './components/mdButtonToggle';
import mdCheckbox from './components/mdCheckbox';
import mdCard from './components/mdCard';
import mdDivider from './components/mdDivider';
import mdIcon from './components/mdIcon';
import mdInputContainer from './components/mdInputContainer';
import mdList from './components/mdList';
import mdMenu from './components/mdMenu';
import mdRadio from './components/mdRadio';
import mdSelect from './components/mdSelect';
import mdSidenav from './components/mdSidenav';
import mdSubheader from './components/mdSubheader';
import mdSwitch from './components/mdSwitch';
import mdTable from './components/mdTable';
import mdTabs from './components/mdTabs';
import mdToolbar from './components/mdToolbar';
import mdTooltip from './components/mdTooltip';
import mdWhiteframe from './components/mdWhiteframe';

const options = {
  mdCore,
  mdAvatar,
  mdBottomBar,
  mdButton,
  mdButtonToggle,
  mdCheckbox,
  mdCard,
  mdDivider,
  mdIcon,
  mdInputContainer,
  mdList,
  mdMenu,
  mdRadio,
  mdSelect,
  mdSidenav,
  mdSubheader,
  mdSwitch,
  mdTable,
  mdTabs,
  mdToolbar,
  mdTooltip,
  mdWhiteframe
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

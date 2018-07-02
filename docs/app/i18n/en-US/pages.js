export default {
  home: {
    title: 'Home',
    slogan: 'Build beautiful apps with Material Design and Vue.js',
    material: 'Material Design',
    materialContent: 'Simple, lightweight and built exactly according to the Google Material Design specs.',
    compatible: 'Compatible',
    compatibleContent: 'Build well-designed apps that can fit on every screen with support for all modern Web Browsers.',
    featured: 'Full-featured',
    featuredContent: 'Complete with dynamic themes, on-demand components and all with an easy-to-use API.',
    ecosystem: 'Ecosystem',
    viewProject: 'View project',
    sponsors: 'Sponsors',
    backers: 'Backers',
    sponsorsDescription: 'Vue Material does not run under the umbrella of any company or anything like that. It is an independent project created by {0} in his spare time, which has become one of the most used UI Libraries for Vue.js. The development is active and we are working hard to release great things for you.',
    beAPatron: 'If you think that this project helped you or your company in any way, you can consider becoming a backer/sponsor on Patreon'
  },
  about: {
    title: 'About'
  },
  license: {
    title: 'License'
  },
  gettingStarted: {
    title: 'Getting Started',
    introduction: 'Vue Material is the best integration between Vue.js and Material Design specs! You can easily configure it to suit all your needs. All you have to do is choose an installation method that suits your environment and follow it\'s instructions. Let\'s start!',
    installation: 'Installation',
    npmOrYarn: 'NPM or Yarn'
  },
  configuration: {
    title: 'Configuration',
    viaVueGlobalObject: 'Via Vue global object',
    inVueComponents: 'In Vue components',
    options: 'Options',
  },
  themes: {
    title: 'Themes'
  },
  themeConcepts: {
    title: 'Themes - Concepts',
    nav: 'Concepts'
  },
  themePrebuilt: {
    title: 'Themes - Prebuilt',
    nav: 'Prebuilt'
  },
  themeConfiguration: {
    title: 'Themes - Configuration',
    nav: 'Configuration'
  },
  themeAdvanced: {
    title: 'Themes - Advanced',
    nav: 'Advanced'
  },
  withRouter: {
    title: 'Work with Vue Router'
  },
  components: {
    title: 'Components',
  },
  uiElements: {
    title: 'UI Elements',
  },
  elevation: {
    title: 'Elevation',
    description: 'Measured from the front of one surface to the front of another, an element’s elevation indicates the distance between surfaces and the depth of its shadow.'
  },
  button: {
    title: 'Button',
    description: 'Buttons communicate the action that will occur when the user touches them.'
  },
  app: {
    title: 'App',
    intro: {
      desc1: 'The following patterns apply the elevations in which content should scroll, how to size flexible space, and when to anchor specific elements.',
      desc2: 'When building applications there are some repeated behaviours regarding the structure of the app. Responsive drawers, flexible toolbars, scrolling... Any of these could repeat across complex applications. This documentation website, for example, needs some of them; and maybe you\'ll need them too. To solve those problems the {0} was created.',
      desc3: 'It contains all the behaviours you need to build complex application shells, that will be simple, responsive and it will integrate seamlessly with drawers, toolbars and content.',
      desc4: 'The {0} component supports {1}, {2} and {3}, which are aliases for {4}, {5} and {6} respectively. Look at the examples:'
    },
    regular: {
      title: 'Regular Toolbars',
      default: 'Default',
      desc1: 'This pattern can be used when you need a toolbar, a responsive drawer and content to be displayed following the Material Guidelines. This is the default behaviour.',
      desc2: 'The order of {0} children is irrelevant. The component will take care of this based on the props that you pass.'
    },
    fixed: {
      title: 'Fixed Toolbars',
      desc: 'Sometimes you may need a fixed toolbar, to make all options always available. You can also combine this with the "waterfall" effect.',
      fixedWaterfall: 'Fixed + Waterfall'
    },
    reveal: {
      title: 'Reveal after scroll',
      desc: 'When you have a large amount of content to be displayed, and you want to focus on the reading part, you can hide the toolbar temporarily and reveal it when scrolling.',
      reveal: 'Reveal'
    },
    flexible: {
      title: 'Flexible height and text size',
      desc: 'Maybe the focus of your page is the title, followed by the content itself. A page that shows the details of a single contact is a great example of this scenario. So you can use flexible behaviour to give higher piority to your content after scrolling.',
      flexible: 'Flexible'
    },
    lastRow: {
      title: 'The last toolbar row fixed',
      desc: 'When your page has some primary navigation buttons, such as tabs and others, you may want them to always be available. You can make the second row of your toolbar always visible, hiding the first one when it\'s not needed. As an example, the WhatsApp main page has this behaviour.',
      fixed: 'Navigation fixed'
    },
    overlap: {
      title: 'Flexible space with overlapping content',
      desc: 'If you want to give focus to the content cards, you may want to use the overlap. It\'s just an awesome effect!',
      content: 'Overlapping content'
    },
    apiApp: {
      desc: 'In these examples we have 3 distinct areas: Toolbar, Drawer and Content. You should create them using the following tags:',
      toolbar: 'Creates the toolbar accepting any options from the md-toolbar',
      drawer: 'Places the drawer panel, that also accepts any options from the md-drawer. You can have a left or right placed drawer. Placing multiple drawers is currently not supported.',
      content: 'Here you will add any content for your page.',
      alert: 'Any other tag passed as a direct child of the md-app tag will be ignored. The component will only look for these three tags and choose the right placement for them.',
      propsDesc: 'The following properties can be applied'
    },
    apiToolbar: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Toolbar page'
    },
    apiDrawer: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Drawer page'
    },
    apiContent: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Content page'
    },
    props: {
      mdMode: 'Sets the toolbar mode. See below the detailed description of each mode.',
      mdModeFixed: 'Makes the toolbar fixed without any scrolling effect.',
      mdModeFixedLast: 'Keeps the second row of the toolbar fixed and always visible. This NEEDS two md-toolbar-row inside the Toolbar.',
      mdModeReveal: 'Hides the toolbar temporarily and shows it after the scroll. This is a good approach for mobile.',
      mdModeFlexible: 'Makes the height and the title size flexible to give the content a higher priority.',
      mdModeOverlap: 'Enables the overlapping content.',
      mdWaterfall: 'Enables the waterfall effect, that can be combined with any md-mode.',
      mdScrollbar: 'Enables the md-scrollbar class to the scrollable content. Read more about the Scrollbar documentation.'
    }
  },
  avatar: {
    title: 'Avatar',
    description: 'Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent a brand.'
  },
  badge: {
    title: 'Badge',
    description: 'Small status descriptors for UI elements.'
  },
  bottomBar: {
    title: 'Bottom Bar',
    description: 'Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.'
  },
  card: {
    title: 'Card',
    description: 'Cards may contain a photo, text, and a link about a single subject.'
  },
  chips: {
    title: 'Chips',
    description: 'Chips represent complex entities in small blocks, such as a contact.'
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Checkboxes allow the user to select multiple options from a set.'
  },
  content: {
    title: 'Content',
    description: 'The Content surfaces that comprise applications are referred to in this spec as material, or sheets of material.'
  },
  emptyState: {
    title: 'Empty State',
    description: 'A list that doesn’t contain any items, or a search that doesn’t display any results, are examples of empty states.'
  },
  pickers: {
    title: 'Pickers',
  },
  progress: {
    title: 'Progress',
    description: 'Progress indicators are visual indications of an app loading content.'
  },
  progressBar: {
    title: 'Progress Bar',
    nav: 'Bar'
  },
  progressSpinner: {
    title: 'Progress Spinner',
    nav: 'Spinner'
  },
  autocomplete: {
    title: 'Autocomplete',
    description: 'Input text can be used with autocomplete to help users who have limited literacy or who write in a foreign language.'
  },
  datepicker: {
    title: 'Datepicker',
    nav: 'Date'
  },
  dialog: {
    title: 'Dialog'
  },
  divider: {
    title: 'Divider'
  },
  drawer: {
    title: 'Drawer'
  },
  form: {
    title: 'Forms'
  },
  icon: {
    title: 'Icon'
  },
  input: {
    title: 'Input & Textarea'
  },
  list: {
    title: 'List'
  },
  radio: {
    title: 'Radio'
  },
  select: {
    title: 'Select'
  },
  file: {
    title: 'File'
  },
  table: {
    title: 'Table'
  },
  menu: {
    title: 'Menu'
  },
  steppers: {
    title: 'Steppers'
  },
  switch: {
    title: 'Switch'
  },
  speedDial: {
    title: 'Speed Dial'
  },
  snackbar: {
    title: 'Snackbar'
  },
  subheader: {
    title: 'Subheader'
  },
  toolbar: {
    title: 'Toolbar'
  },
  tooltip: {
    title: 'Tooltip'
  },
  layout: {
    title: 'Layout'
  },
  scrollbar: {
    title: 'Scrollbar'
  },
  textSelection: {
    title: 'Text Selection'
  },
  typography: {
    title: 'Typography'
  },
  tabs: {
    title: 'Tabs'
  },
  error: {
    title: 'Not Found'
  }
}

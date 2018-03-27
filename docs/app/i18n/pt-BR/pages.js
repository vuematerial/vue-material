export default {
    home: {
      title: 'Home',
      slogan: 'Faça aplicações visualmente ricas com Material Design e Vue.js',
      material: 'Material Design',
      materialContent: 'Simples, leve e feito exatamente de acordo com as especificações do Material Design da Google.',
      compatible: 'Compatível',
      compatibleContent: 'Build well-designed apps that can fit on every screen with support to all modern Web Browsers.',
      featured: 'Cheio de recursos',
      featuredContent: 'Completo, com temas dinâmicos, componentes sob demanda e muito mais através de uma API fácil de usar.',
      ecosystem: 'Ecossistema',
      viewProject: 'Visualizar projeto',
      sponsors: 'Patrocinadores',
      backers: 'Apoiadores',
      sponsorsDescription: 'Vue Material não é financiadi pela umbrella ou outra empresa nem algo do tipo. É um projeto independente criado por {0} em seu tempo livre, e que se tornou uma das bibliotecas de interface de usuário mais utilizadas para Vue.js. O desenvolvimento está ativo e estamos trabalhando duro para entregar coisas incríveis para você.',
      beAPatron: 'Se você acha que esse projeto ajudou você ou sua companhia de alguma forma, considere se tornar um apoiador/patrocinador no Patreon'
    },
    about: {
      title: 'Sobre'
    },
    license: {
      title: 'Licença'
    },
    gettingStarted: {
      title: 'Primeiros passos',
      introduction: 'Vue Material é a melhor integração entre Vue.js e especificações Material Design! Você pode facilmente configurá-lo para se encaixar ás suas necessidades. Tudo o que precisa fazer é escolher um método de instalação que te antenda melhor e seguir suas instruções. Vamos começar!',
      installation: 'Instalação',
      npmOrYarn: 'NPM ou Yarn'
    },
    themes: {
      title: 'Temas'
    },
    themeConcepts: {
      title: 'Temas - Conceitos',
      nav: 'Conceitos'
    },
    themePrebuilt: {
      title: 'Temas - Incluídos',
      nav: 'Incluídos'
    },
    themeConfiguration: {
      title: 'Temas - Configurações',
      nav: 'Configurações'
    },
    themeAdvanced: {
      title: 'Temas - Avançado',
      nav: 'Avançado'
    },
    components: {
      title: 'Componentes',
    },
    uiElements: {
      title: 'Elementos',
    },
    elevation: {
      title: 'Elevação',
      description: 'Medida através da frente de uma das superfícies até a frente de outra, a elevação de um elemento indica a distância entre superfícies e a profundidade de suas sombras'
    },
    button: {
      title: 'Botões',
      description: 'Botões comunicam a ação que ocorrerá quando o usuário tocar neles.'
    },
    app: {
      title: 'App',
      intro: {
        desc1: 'The following patterns applies the elevations in which content should scroll, how to size flexible space, and when to anchor specific elements.',
        desc2: 'When building applications there is some repeated behaviours regarding the structure of the app. Responsive drawers, flexible toolbars, scrolling... Either scenario could repeat across all complex applications. This documentation website, for example, needs some of them, and maybe you\'ll need them too. To solve those problems the {0} was created.',
        desc3: 'It has all behaviour to build complex application shells, that will be simple, responsive and it will integrate seamlessly with the drawers, toolbars and content.',
        desc4: 'The {0} component supports {1}, {2} and {3}, which are aliases for {4}, {5} and {6} respectively. Look at the examples:'
      },
      regular: {
        title: 'Regular Toolbars',
        default: 'Default',
        desc1: 'When you need a toolbar, a responsive drawer and a content to be displayed following the Material Guidelines. This is the default behaviour.',
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
        desc: 'Maybe the focus of your page is the title, following by the content itself. The page that shows details of a single contact is a great example of this scenario. So you can use flexible behaviour to give higher piority to your content after scrolling.',
        flexible: 'Flexible'
      },
      lastRow: {
        title: 'The last toolbar row fixed',
        desc: 'When your page have some primary navigation buttons, such as tabs and others, you may want them to be always available. You can make the second row of your toolbar always visible, hiding the first one when it\'s not needed. As an example, the WhatsApp main page have this behaviour.',
        fixed: 'Navigation fixed'
      },
      overlap: {
        title: 'Flexible space with overlapping content',
        desc: 'If you want to give focus on the content cards you may want to use the overlap. It\'s just an awesome effect!',
        content: 'Overlapping content'
      },
      apiApp: {
        desc: 'In both examples we have 3 distinct areas: Toolbar, Drawer and Content. You should create them using the following tags:',
        toolbar: 'Creates the toolbar accepting any options from the md-toolbar',
        drawer: 'Places the drawer panel, that also accepts any options from the md-drawer. You can have a left or right placed drawers. Or both.',
        content: 'Here you will add any content for your page.',
        alert: 'Any other tag passed as a direct child of the md-app tag will be ignored. The component will only look for those three tags and choose the right placement for them.',
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
        mdModeFixed: 'Makes the toolbar fixed without any scrolling effect',
        mdModeFixedLast: 'Keeps the second row of the toolbar fixed and always visible. This NEEDS two md-toolbar-row inside the Toolbar.',
        mdModeReveal: 'Hides the toolbar temporarily and show it after the scroll. This is a good approach for mobile.',
        mdModeFlexible: 'Makes the height and the title size flexible to give the content a higher priority',
        mdModeOverlap: 'Enables the overlapping content',
        mdWaterfall: 'Enables the waterfall effect, that can be combined with any md-mode',
        mdScrollbar: 'Enables the md-scrollbar class to the scrollable content. Read more about the Scrollbar documentation.'
      }
    },
    avatar: {
      title: 'Avatar',
      description: 'Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent a brand.'
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
      title: 'Barra de feramentas'
    },
    tooltip: {
      title: 'Tooltip'
    },
    layout: {
      title: 'Layout'
    },
    scrollbar: {
      title: 'Barra de rolagem'
    },
    textSelection: {
      title: 'Seleção de texto'
    },
    typography: {
      title: 'Tipografia'
    },
    tabs: {
      title: 'Abas'
    },
    error: {
      title: 'Não encontrado'
    }
  }
  
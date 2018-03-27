export default {
  home: {
    title: 'Home',
    slogan: 'Maak beeldschone applicaties met Material Design en Vue.js',
    material: 'Material Design',
    materialContent: 'Simpel, licht en gemaakt volgens het standaard gespecifieerd door Google Material Design.',
    compatible: 'Compatibel',
    compatibleContent: 'Maak mooi gedesignde applicaties dat past op elk schermformaat en wordt ondersteund op alle moderne browsers.',
    featured: '',
    featuredContent: 'Compleet met dinamische themas, herbruikbare componenten met een gebruiksvriendelijke API.',
    ecosystem: 'Ecosysteem',
    viewProject: 'Zie project',
    sponsors: 'Sponsors',
    backers: 'Backers',
    sponsorsDescription: 'Vue Material hangt niet af van een bedrijf. Het is een vrij project gecreeërd door {0} in zijn vrije tijd. Het werd een van de meest gebruikte bibliotheken van Vue.JS. De productie is actief en we werken hard aan perfectie voor u.',
    beAPatron: 'Als je denkt dat dit project jij of je bedrijf helpt in enige weg mogelijk, dan kan je overwegen het project te sponseren op Patreon.'
  },
  about: {
    title: 'Over'
  },
  license: {
    title: 'Licentie'
  },
  gettingStarted: {
    title: 'Eerste stappen',
    introduction: 'Vue Material is de beste integratie tussen Vue.JS en Material Design! Je kan het makkelijk configureren voor alle jouw doeleinden. Je hoeft alleen te kiezen naar een installatie methode dat voor jou past en volg de instructies. Laten we eraan beginnen.',
    installation: 'Installatie',
    npmOrYarn: 'NPM of Yarn'
  },
  themes: {
    title: 'Thema\'s'
  },
  themeConcepts: {
    title: 'Thema\'s - Concepten',
    nav: 'Concepten'
  },
  themePrebuilt: {
    title: 'Thema\'s - Voorgemaakt',
    nav: 'Voorgemaakt'
  },
  themeConfiguration: {
    title: 'Thema\'s - Configuratie',
    nav: 'Configuratie'
  },
  themeAdvanced: {
    title: 'Thema\'s - Geavanceerd',
    nav: 'Geavanceerd'
  },
  components: {
    title: 'Componenten',
  },
  uiElements: {
    title: 'UI Elementen',
  },
  elevation: {
    title: 'Verhoging',
    description: 'Gemeten van de voorkant van een oppervlakte naar de voorkant van een ander, een verhoogd element indiceert de afstand tussen oppervlakten en de diepte van zijn schaduw.'
  },
  button: {
    title: 'Knop',
    description: 'Knop communiceert de actie dat gaat gebeuren wanneer de gebruiker het aanklikt.'
  },
  app: {
    title: 'Applicatie',
    intro: {
      // Needs refining
      desc1: 'Het volgende patroon wordt gebruikt voor de verhoging wanneer de inhoud zou scrollen, hoe flexibel de moet vergroten, en wanneer te specifieke elementen te ankeren.',
      desc2: 'Wanneer men applicaties maakt is het .',
      desc3: 'It has all behaviour to build complex application shells, that will be simple, responsive and it will integrate seamlessly with the drawers, toolbars and content.',
      desc4: 'The {0} component supports {1}, {2} and {3}, which are aliases for {4}, {5} and {6} respectively. Look at the examples:'
    },
    regular: {
      title: 'Normale taakbalken',
      default: 'Standaard',
      desc1: 'Wanneer je een taakbalk nodig hebt, een lade met inhoud zal getoond worden die definieërd is door de specificaties van Material Design. Dit is het standaard.',
      desc2: 'De ordering van {0} children is irrelevant. Het component zal het nodige doen gebaseerd op de eigenschappen die jij geeft.'
    },
    fixed: {
      title: 'Vaste taakbalken',
      desc: 'Soms heb je een vaste taakbalk nodig, om alle opties weer te geven. Je kan dit combineren met het "waterval" effect.',
      fixedWaterfall: 'Vaste + Waterval'
    },
    reveal: {
      title: 'Toon achter scroll',
      desc: 'Wanneer je een grote inhoud hebt die visueel zichtbaar moet zijn, en je wilt vooral de inhoud zichtbaar maken, dan kan je de taakbalk tijdelijk verbergen en vertonen bij een scroll.',
      reveal: 'Reveal'
    },
    flexible: {
      title: 'Flexibele hoogte en text grote',
      desc: 'Misschien wil je de nadruk leggen op de titel, gevolgd door de inhoud. Deze pagina dat details weergeeft over enig contact is een goed voorbeeld van dit scenario. Hierdoor kan je de nadruk leggen op je titel en bij heft scrollen ligt de nadruk op de inhoud.',
      flexible: 'Flexibel'
    },
    lastRow: {
      title: 'De laatste rij vastgezet',
      desc: 'Wanneer je pagina sommige primaire knoppen heeft, die tabs en andere, wil je misschien dat ze altijd zichtbaar zijn. Je kan de tweede rij van je taakbalk altijd zichtbaar maken, het verbergen van de eerste is niet nodig. Bijvoorbeeld de home pagina van WhatsApp heeft deze structuur.',
      fixed: 'Vaste navigatie'
    },
    overlap: {
      title: 'Flexibele plaats met overlappende inhoud',
      desc: 'Als je focus wilt geven aan inhoud kaarten, dan zul je waarschijnlijk overlappend te werk willen gaan. Het effect is formidabel!',
      content: 'Overlappende inhoud'
    },
    apiApp: {
      desc: 'In beide voorbeelden hebben we drie duidelijke gebieden: Taakbalk, Lade (Navigatie) en Inhoud. Je zou ze moeten maken in de volgende tags:',
      toolbar: 'Maakt een taakbal met alle opties van de md-toolbar',
      drawer: 'Maakt een lade paneel, dat alsook opties neemt van de md-drawer. Je kan ze rechts of links plaatsen. Of beide.',
      content: 'Hier kan gelijk welke inhoud plaatsen voor je pagina.',
      alert: 'Elke andere tag verbonden aan een child van de md-app zal genegeerd worden. Het component zal alleen kijken naar die drie tags en het de juiste vervanging zoeken.',
      propsDesc: 'De volgende opties zullen worden toegepast'
    },
    apiToolbar: {
      desc: 'Alle instellingen worden ondersteunt {0}. Gelieve te naar {1} te wijzen voor de API.',
      page: 'Taakbalk pagina'
    },
    apiDrawer: {
      desc: 'Alle instellingen worden ondersteunt {0}. Gelieve te naar {1} te wijzen voor de API.',
      page: 'Navigatie (Lade) page'
    },
    apiContent: {
      desc: 'Alle instellingen worden ondersteunt {0}. Gelieve te naar {1} te wijzen voor de API.',
      page: 'Inhoud pagina'
    },
    props: {
      mdMode: 'Zet een taakbalk mode. Zie hieronder een gedetaileerde beschrijving van elke mode.',
      mdModeFixed: 'Maak de taakbalk vast zonder een effect bij het scrollen.',
      mdModeFixedLast: 'Zet de tweede rij van de taakbalk vast. Het is NODIG dat er twee md-toolbar-row zitten binnen in de taakbalk.',
      mdModeReveal: 'De taakbalk verdwijnt tijdelijk, maar komt terug bij het scrollen. Dit is een goede manier voor mobiele applicaties.',
      mdModeFlexible: 'Maakt de hoogte en de grote van de titel flexibel om de inhoud prioriteit te geven.',
      mdModeOverlap: 'Geeft de gelegenheid om inhoud te overlappen',
      mdWaterfall: 'Geeft een watervak effect, dat gecombineerd kan worden met md-mode',
      mdScrollbar: 'Dit zet de md-scrollbar klasse aan voor scrollbare inhoud. Lees hier meer over in de Scrollbar documentatie.'
    }
  },
  avatar: {
    title: 'Avatar',
    description: 'Avatar wordt gebruikt om profielfoto\'s, foto\'s of initialen van een persoon of bedrijf weer te geven. Het kan ook gebruikt worden voor een logo of merk.'
  },
  bottomBar: {
    title: 'Bodem navigatie',
    description: 'Bodem navigatie is gemakkelijk om de applicatie te voorzien van tabs waar de gebruiker een nieuwe pagina krijgt met informatie.'
  },
  card: {
    title: 'Kaarten',
    description: 'Kaarten kunnen een foto, text en zelfs een link hebben, het wordt vooral gebruikt om een object voor te stellen.'
  },
  chips: {
    title: 'Chips',
    description: 'Chips wordt gebruikt om tags in een input te definiëren.'
  },
  checkbox: {
    title: 'Selectievak',
    description: 'Selectievakken laten gebruikers meerdere opties kiezen.'
  },
  content: {
    title: 'Inhoud',
    // Needs refining
    description: 'De inhoud geeft weer dat applicaties die genoemd worden in deze specificatie als materiaal, of werkbladen van materiaal.'
  },
  emptyState: {
    title: 'Lege staat',
    description: 'Een lijst dat geen items bevat, of een zoekbalk dat geen resultaten heeft, dit zijn voorbeelden van elementen met een lege staat.'
  },
  pickers: {
    title: 'Plukkers',
  },
  progress: {
    title: 'Progressie',
    description: 'Progressie indicators zijn visuele helpers voor een applicatie dat aan het laden is.'
  },
  progressBar: {
    title: 'Progressie Bar',
    nav: 'Bar'
  },
  progressSpinner: {
    title: 'Progressie spinner',
    nav: 'Spinner'
  },
  autocomplete: {
    title: 'Automatische invoer',
    description: 'Ingevoerde text kan gebruikt worden door automatische invoer om gebruikers te helpen dat gelimiteerde info heeft of voor het schrijven van talen.'
  },
  datepicker: {
    title: 'Datumkiezer',
    nav: 'Datum'
  },
  dialog: {
    title: 'Dialoog'
  },
  divider: {
    title: 'Verdeler'
  },
  drawer: {
    title: 'Lade (Navigatie)'
  },
  form: {
    title: 'Formulieren'
  },
  icon: {
    title: 'Icoon'
  },
  input: {
    title: 'Invoer & textveld'
  },
  list: {
    title: 'Lijst'
  },
  radio: {
    title: 'Radio knoppen'
  },
  select: {
    title: 'Selectie knoppen'
  },
  file: {
    title: 'Bestand'
  },
  table: {
    title: 'Tabel'
  },
  menu: {
    title: 'Menu'
  },
  steppers: {
    title: 'Stappen selectie'
  },
  switch: {
    title: 'Schakelaar'
  },
  speedDial: {
    title: 'Sneltoets'
  },
  snackbar: {
    title: 'Snackbar'
  },
  subheader: {
    title: 'Subhoofd'
  },
  toolbar: {
    title: 'Werkbalk'
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
    title: 'Textselectie'
  },
  typography: {
    title: 'Typografie'
  },
  tabs: {
    title: 'Tabs'
  },
  error: {
    title: 'Niet Gevonden'
  }
}

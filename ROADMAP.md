# Roadmap for Vue Material beta!

As I told [couple months ago](https://github.com/vuematerial/vue-material/issues/921), I am developing a new Vue Material from scratch, with better support, an easy way to integrate and way more reliable. And this new version is just around the corner.
I received a lot of issues and complains regarding support for SSR, validation, integration with 3rd party libs and many others. So I after ~6 months on this bad boy, more than 500 files, ~28k loc and ~800 commits I now announce that the beta is coming!

The release strategy will be like this:

- The first beta will be released at the beginning of November, with all goodies and a closed API. At this moment the documentation will be pretty much done, but with some components delayed to next version.
- After that, a migration guide will be developed to make the transition between the old version.
- A cycle of beta versions will happen to solve the issues and small improvements until a stable arrives.
- The current repository will be replaced with new one. I will give a small support for the 0.7.5 version to solve important issues only.
- The stable version will be released with 1.0.0 number.
- I will solve the issues after the stable release while I focus on the next 1.1.0 version, with the components the didn't entered on 1.0
- Boilerplates, Nuxt template and further guides will be created

## Key Features
- Automatic constrast ratio - YES! The theme factory will calculate the contrast between the background and text to give the correct black or white color.
- On demand themes! Create themes only for the components that you're really using
- Pre made theme colors
- Dynamic themes
- Easy to toggle features, like ripple, theming, locale values and more
- Better support for Vue Router, with autosync on navigation components
- Highly extensible and easy to create 3rd-party components
- Namespaced attributes
- ~30% lighter than 0.7.5
- New and Awesome on-demand components
- SSR Support
- Well-tested - WIP 100% coverage
- Easy i18n
- Minimalist and performant docs

## 1.0.0 roadmap

### Core Stuff
- [X] Themes - `NEW API`
  - [X] Deprecated theme component
  - [X] Sass Based themes
  - [X] Multiple themes
  - [x] CSS Variables
  - [ ] CSS-only themes
- [X] SSR Support - `NEW`
  - [X] Basic Support

### Components
- [X] MdAutocomplete - `NEW API`
- [X] MdApp - `NEW`
  - [X] Documentation
  - [X] Reusable App Shell component
  - [X] Integration with Toolbar, Drawer and Content
- [X] MdAvatar
- [X] MdBottomBar
  - [X] Router integration - `NEW`
  - [X] Router Sync - `NEW`
  - [X] Symple way to trigger active item
- [X] MdButton
  - [X] Router integration - `NEW`
- [x] MdCard
  - [x] Documentation
  - [X] Better image handle
  - [X] Expand action
- [X] MdCheckbox
  - [X] Array - `NEW`
  - [X] Boolean
  - [X] String
- [X] MdChips
  - [X] Editable
  - [X] Detelable
- [X] MdContent - `NEW`
- [x] MdDatepicker - `NEW`
  - [x] Documentation
  - [X] FINALLY!
  - [X] Month Selector
  - [X] Year Selector
  - [x] Disable Dates
  - [ ] Locale aware
- [X] MdDialog
  - [X] Alert
  - [X] Confirm
  - [X] Prompt
  - [X] Custom
- [X] MdDivider
- [X] MdDrawer - `NEW API`
  - [X] Documentation
  - [x] Deprecate md-sidenav
  - [X] Persistent - `NEW`
  - [X] Permanent  - `NEW`
  - [X] Mini - `NEW`
  - [X] Card - `NEW`
  - [X] Clipped - `NEW`
  - [X] Left/Right
- [X] MdElevation - `NEW API`
  - [X] Deprecate whiteframe component
  - [X] Elevation classes
- [X] MdEmptyState - `NEW`
- [X] MdField - `NEW API`
  - [X] Documentation
  - [X] Change md-input-container to md-field
  - [X] Input/Textarea
  - [X] Checkbox
  - [X] Radio
  - [X] Switch
  - [X] File - `NEW API`
  - [x] Select
- [X] MdIcon
- [X] MdLayout - `NEW API`
  - [X] Documentation
  - [X] Deprecate layout component
  - [X] New flexbox/responsive/class-based grid
- [X] MdList - `NEW API`
  - [X] Documentation
  - [X] Router integration
  - [X] Expansion
  - [X] Input Controls
- [X] MdMenu - `NEW API`
- [X] MdProgress - `NEW API`
  - [X] Documentation
  - [X] Spinner
  - [X] Bar
  - [X] 0%/100% progress
  - [X] Indeterminate state
- [X] MdRadio
- [ ] MdRipple - `NEW API`
  - [ ] Documentation
  - [X] New ripple
  - [ ] Abstract component
  - [ ] Performance improvements
- [X] MdSnackbar
  - [X] Documentation
  - [X] Themed Snackbar
- [X] MdSpeedDial - `NEW API`
  - [X] Click Action
  - [X] Multiple Effects
- [X] MdSteppers - `NEW API`
  - [X] Documentation
  - [X] Horizontal
  - [X] Vertical
- [X] MdSubheader
- [X] MdSwitch
- [ ] MdTable - `NEW API`
  - [ ] Documentation
  - [X] Basic table
  - [X] Sort
  - [X] Fixed Header
  - [ ] Inline Edit
  - [ ] Dialog Edit
  - [x] Selection
  - [ ] Pagination
  - [x] Alternate Header
- [X] MdTabs
  - [X] Documentation
  - [X] Router integration - `NEW`
  - [X] Router Sync - `NEW`
  - [X] Symple way to trigger active tab
- [X] MdToolbar - `NEW API`
- [X] MdTooltip

### Docs pages

- [ ] Advanced
  - [ ] Guide
  - [ ] Extending Vue Material
  - [ ] Third Party Components
- [X] About
- [X] Changelog
- [ ] Components summary
- [ ] Contribute
- [X] Getting Started
- [ ] Migration Guide
- [X] Static docs
- [X] Themes
  - [X] Configuration
  - [ ] Dynamic Themes
- [ ] UI Elements summary

** Components/Features marked with a `NEW` label do not exists on the current version
** Components/Features marked with a `NEW API` can introduce major breaking changes.
** Mostly of unchecked components are only demanding a new docs page.

I will point out those changes inside the migration guide.

## Post 1.0.0

### Projects
- Official Boilerplate
  - SSR
  - Nuxt
  - PWA
  - Simple
  - Third Party Component
- Sample Apps

### Core Stuff
- SSR
  - Feature toggle
  - SSR Only logic
- A11y
- RTL
- Better Keyboard Navigation
- Android vs iOS vs Web
- Touch Events
- Scrolling
- Optimized theme colors
- Vuelidate and Vee Validate integration

### Components
- Content Discovery
- Content Slider
- Timepicker
- Range picker
- Expansion Panels
- Grid
- Image
  - Lazy Loading based on IntersectionObserver
  - Loader
- Onboarding
- Rating Bar
- Search Bar
- Slider Input
- Split Screen
- ...

<small>Vue Material 2 will be released with the new Material Design guidelines landed on Google I/O 2018. Stay tuned!<small>

## But man! I need the ___________
Have something in mind? Need a new components? Created something meaningful and think that this can fit inside the lib? Let's discuss? We have a [Discord Channel](https://discord.gg/vuematerial) and I'm online there almost everyday. Send me a message!

## I want to help. What do you need?
Well. All kind of help are welcome. If you want to contribute with the project, just send me a message and I will tell what you can do. We recently created a Discord Channel to share ideas and to keep all the communication in one place.

## Awesome! I want to pay you a coffee!
Vue Material do not run under the umbrella of any company or something like that, and is an independent project created by me on spare time. It became one of the most used UI Libraries for Vue.js.

If you think that this project helped you or your company in some way, you can consider become a backer/sponsor on Patreon:
<p>
  <a href="https://www.patreon.com/marcosmoura" target="_blank">
    <img width="150" src="https://c5.patreon.com/external/logo/become_a_patron_button.png">
  </a>
</p>

Cheers!

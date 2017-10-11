# Roadmap for Vue Material beta!

As I told a [couple months ago](https://github.com/vuematerial/vue-material/issues/921), I am developing a new Vue Material from scratch, with better support, an easy way to integrate and way more reliable. And this new version is just around the corner.
I received a lot of issues and complains regarding support for SSR, validation, integration with 3rd party libs and many others. So I worked for more than 6 months on this bad boy!

The release strategy will be like this:

- The first beta will be released at the beginning of November, with all goodies and a closed API. At this moment the documentation will be pretty much done, but with some components delayed to next version.
- After that, a migration guide will be developed to make the transition between the old version.
- A cycle of beta versions will happen to solve the issues and small improvements until a stable arrives.
- The current repository will be replaced with new one. I will give a small support for the 0.7.5 version to solve important issues only.
- The stable version will be released with 1.0.0 number.
- I will solve the issues after the stable release while I focus on the next 1.1.0 version, with the components the didn't entered on 1.0
- Boilerplates, Nuxt template and further guides will be created

## 1.0.0 roadmap

### Core Stuff
- [X] Themes
  - [X] Deprecated theme component
  - [X] Sass Based themes
  - [X] Multiple themes
  - [ ] CSS Variables
  - [ ] CSS-only themes
- [ ] SSR Support
  - [X] Basic Support

### Components
- [ ] MdAutocomplete
- [X] MdApp
  - [X] Documentation
  - [X] Reusable App Shell component
  - [X] Integration with Toolbar, Drawer and Content
- [X] MdAvatar
- [X] MdBottomBar
  - [X] Router integration
  - [X] Symple way to trigger active item
- [X] MdButton
  - [X] Router integration
- [ ] MdCard
  - [ ] Documentation
  - [X] Better image handle
  - [X] Expand action
- [X] MdCheckbox
  - [X] Array
  - [X] Boolean
  - [X] String
- [X] MdChips
  - [X] Editable
  - [X] Detelable
- [X] MdContent - `New`
- [ ] MdDatepicker - `New`
  - [ ] Documentation
  - [X] FINALLY!
  - [X] Month Selector
  - [X] Year Selector
  - [ ] Disable Dates
  - [ ] Locale aware
- [X] MdDialog
  - [X] Alert
  - [X] Confirm
  - [X] Prompt
  - [X] Custom
- [X] MdDivider
- [ ] MdDrawer - `New`
  - [ ] Documentation
  - [X] Persistent - `New`
  - [X] Permanent - `New`
  - [X] Mini - `New`
  - [X] Card - `New`
  - [X] Clipped - `New`
  - [X] Left/Right
- [X] MdElevation - `New API`
  - [X] Deprecate whiteframe component
  - [X] Elevation classes
- [ ] MdField - `New`
  - [ ] Documentation
  - [X] Change md-input-container to md-field
  - [X] Input/Textarea
  - [X] Checkbox
  - [X] Radio
  - [X] Switch
  - [X] File
  - [ ] Select
- [X] MdIcon
- [ ] MdLayout - `New API`
  - [ ] Documentation
  - [X] Deprecate layout component
  - [X] New flexbox/responsive/class-based grid
- [ ] MdList
  - [ ] Documentation
  - [X] Router integration
  - [X] Expansion
  - [X] Input Controls
- [X] MdMenu
- [ ] MdProgress
  - [ ] Documentation
  - [ ] Spinner
  - [ ] Bar
  - [ ] 0%/100% progress
  - [ ] Indeterminate state
- [X] MdRadio
- [ ] MdRipple - `New API`
  - [ ] Documentation
  - [X] New ripple
  - [ ] Abstract component
  - [ ] Performance improvements
- [ ] MdSnackbar
  - [ ] Documentation
  - [X] Themed Snackbar
- [X] MdSpeedDial
  - [X] Click Action
  - [X] Multiple Effects
- [ ] MdSteppers - `New API`
  - [ ] Documentation
  - [X] Horizontal
  - [X] Vertical
- [X] MdSubheader
- [X] MdSwitch
- [ ] MdTable - `New API`
  - [ ] Documentation
  - [X] Basic table
  - [X] Sort
  - [X] Fixed Header
  - [ ] Inline Edit
  - [ ] Dialog Edit
  - [ ] Selection
  - [ ] Pagination
  - [ ] Alternate Header
- [ ] MdTabs
  - [ ] Documentation
  - [X] Router integration
  - [X] Symple way to trigger active tab
- [X] MdToolbar
- [X] MdTooltip

### Docs pages

- [ ] Advanced
  - [ ] Guide
  - [ ] Extending Vue Material
  - [ ] Third Party Components
- [ ] About
- [ ] Changelog
- [ ] Components summary
- [ ] Contribute
- [ ] Getting Started
- [ ] Migration Guide
- [ ] Static docs
- [ ] Themes
  - [ ] Configuration
  - [ ] Dynamic Themes
- [ ] UI Elements summary

## Post 1.1.0

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
- Theme Colors

### Components
- Content Discovery
- Content Slider
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

## But man! I need the ___________
Have something in mind? Need a new components? Created something meaningful and think that this can fit inside the lib? Let's discuss? We have a [Slack Channel](https://join.slack.com/t/vuematerial/shared_invite/MTgzMzU2NDQ5ODkwLTE0OTQ4MDI3MDAtNWYyZjhkNzEzMA) and I'm online there almost everyday. Send me a message!

## I want to help. What do you need?
Well. All kind of help are welcome. If you want to contribute with the project, just send me a message and I will tell what you can do. We recently created a Slack Channel to share ideas and to keep all the comunication in one place.

## Awesome! I want to pay you a coffee!
Vue Material do not run under the umbrella of any company or something like that, and is an independent project created by me on spare time. It became one of the most used UI Libraries for Vue.js.

If you think that this project helped you or your company in some way, you can consider become a backer/sponsor on Patreon:
<p>
  <a href="https://www.patreon.com/marcosmoura" target="_blank">
    <img width="150" src="https://c5.patreon.com/external/logo/become_a_patron_button.png">
  </a>
</p>

Cheers!

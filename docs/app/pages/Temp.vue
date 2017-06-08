<template>
  <div class="main-content">
    <div>
      <div>Menu</div>
      <div class="parent">
        <div class="md-menu">

        </div>
      </div>

      <md-button class="trigger" @click="create">Create</md-button>
      <md-button class="trigger" @click="remove">Remove</md-button>
    </div>

    <div>
      <div>Default</div>
      <md-button :md-ripple="false">Button</md-button>
      <md-button class="md-primary">Button</md-button>
      <md-button class="md-accent">Button</md-button>
    </div>

    <div>
      <div>Raised</div>
      <md-button md-theme="secondary" class="md-raised">Button</md-button>
      <md-button md-theme="secondary" class="md-raised md-primary">Button</md-button>
      <md-button md-theme="secondary" class="md-raised md-accent">Button</md-button>
    </div>

    <div>
      <div>Dense</div>
      <md-button md-theme="tertiary" class="md-dense md-raised">Button</md-button>
      <md-button md-theme="tertiary" class="md-dense md-raised md-primary">Button</md-button>
      <md-button md-theme="tertiary" class="md-dense md-raised md-accent">Button</md-button>
    </div>

    <div>
      <div>Disabled</div>
      <md-button disabled>Button</md-button>
      <md-button disabled class="md-raised md-primary">Button</md-button>
      <md-button disabled class="md-raised md-accent">Button</md-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~vue-material/theme/factory';

  @include md-register-theme('secondary', $md-theme-green-orange);
  @include md-register-theme('tertiary', $md-theme-black-green);

  @import '~vue-material/theme/all';

  .main-content {
    font-family: 'Roboto', sans-serif;
  }

  .parent {
    z-index: 1;
    overflow: hidden;
    height: 100px;
    position: relative;
  }

  .md-menu {
    width: 150px;
    height: 200px;
    background-color: rgba(#000, .2);
    z-index: 99;
  }
</style>

<script>
  import MdPopover from 'vue-material/core/MdPopover'

  let positionManager = null

  export default {
    name: 'Temp',
    methods: {
      create () {
        positionManager.createElement()
      },
      remove () {
        positionManager.removeElement()
      }
    },
    mounted () {
      positionManager = new MdPopover('.trigger', '.md-menu')
    }
  }
</script>

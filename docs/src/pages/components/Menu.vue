<template>
  <demo-page label="Components - Menu">
    <div slot="examples">
      <demo-example label="Directions">
        <md-menu>
          <md-button md-menu-trigger>Bottom Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left">
          <md-button md-menu-trigger>Bottom Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item disabled>My Item 3</md-menu-item>
            <md-menu-item>My Item 4</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top left">
          <md-button md-menu-trigger>Top Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top right">
          <md-button md-menu-trigger>Top Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>

      <demo-example label="Sizes">
        <md-menu>
          <md-button md-menu-trigger>Default</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="1">
          <md-button md-menu-trigger>Size 1</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="2">
          <md-button md-menu-trigger>Size 2</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button md-menu-trigger>Size 4</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="5">
          <md-button md-menu-trigger>Size 5</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="7">
          <md-button md-menu-trigger>Size 7</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>

      <demo-example label="List Icons">
        <md-menu>
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>phone</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 1</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 2</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 3</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left" md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>near_me</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <span>Find on map</span>
              <md-icon>near_me</md-icon>
            </md-menu-item>

            <md-menu-item>
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>
    </div>

    <div slot="code">

    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-menu {
    margin-right: 36px;
  }
</style>

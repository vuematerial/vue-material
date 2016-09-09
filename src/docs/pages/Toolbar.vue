<template>
  <section>
    <h2 class="title">Toolbar</h2>

    <md-toolbar class="md-extended">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1;"></span>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <h2 class="md-title">Vue Material</h2>
      </div>
    </md-toolbar>

    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Vue Material</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Vue Material</h2>

      <md-button>Add</md-button>
      <md-button>Remove</md-button>
    </md-toolbar>

    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Vue Material</h2>

      <md-button class="md-raised">Add</md-button>
      <md-button class="md-raised md-warn">Remove</md-button>
    </md-toolbar>

    <md-toolbar class="md-extended">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1;"></span>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <h2 class="md-title">Vue Material</h2>

        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </section>
</template>

<style lang="scss" scoped>
  .md-toolbar {
    margin-bottom: 24px;
  }

  .md-button.md-fab {
    margin: 0;
    right: 56px;
    bottom: -26px;
  }
</style>

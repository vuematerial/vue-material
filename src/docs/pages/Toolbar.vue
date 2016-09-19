<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="Default">
        <md-toolbar>
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Dense">
        <md-toolbar class="md-dense">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Medium">
        <md-toolbar class="md-medium">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title" style="flex: 1;">Vue Material</h2>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </demo-example>

      <demo-example label="Large">
        <md-toolbar class="md-large">
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
      </demo-example>

      <demo-example label="Accent, Warn and Transparent Colors">
        <md-toolbar class="md-accent">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>

        <md-toolbar class="md-warn">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button>Add</md-button>
          <md-button>Remove</md-button>
        </md-toolbar>

        <md-toolbar class="md-transparent">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-raised">Add</md-button>
          <md-button class="md-raised md-warn">Remove</md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Themed">
        <md-toolbar v-md-theme="'green'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>

        <md-toolbar class="md-large" v-md-theme="'brown'">
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

        <md-toolbar v-md-theme="'orange'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button>Add</md-button>
          <md-button>Remove</md-button>
        </md-toolbar>

        <md-toolbar v-md-theme="'blue'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-raised">Add</md-button>
          <md-button class="md-raised md-warn">Remove</md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Complete Example" class="example">
        <md-toolbar class="md-large" v-md-theme="'green'">
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
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .md-button.md-fab {
    margin: 0;
    right: 56px;
    bottom: -26px;
  }

  .example {
    .md-toolbar {
      margin-bottom: 50px;
    }
  }
</style>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Toolbar';
    }
  };
</script>

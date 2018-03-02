<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field class="search" md-nested md-clearable>
          <md-icon>search</md-icon>
          <label>Search...</label>
          <md-input v-model="normal"></md-input>
        </md-field>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field class="search" md-variant="box" md-nested md-clearable>
          <md-icon>search</md-icon>
          <label>Search...</label>
          <md-input v-model="box"></md-input>
        </md-field>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field class="search" md-variant="raised" md-nested md-clearable>
          <md-icon>search</md-icon>
          <label>Search...</label>
          <md-input v-model="raised"></md-input>
        </md-field>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'AppBsrNested',
    data: () => ({
      normal: null,
      box: null,
      raised: null
    })
  }
</script>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 24px;
  }

  .search {
    max-width: 500px;
  }
</style>

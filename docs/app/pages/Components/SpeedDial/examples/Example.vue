<template>
  <div class="example">
    <md-speed-dial>
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button md-raised">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised">
          <md-icon>menu</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'Example'
}
</script>

<style lang="scss" scoped>
  .example {
    min-height: 250px;
  }

  .md-speed-dial {
    position: absolute;
    bottom: 20px;
  }
</style>

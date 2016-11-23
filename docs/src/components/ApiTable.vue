<template>
  <div class="api-table">
    <h3 class="md-title">{{ name }}</h3>

    <md-tabs :md-dynamic-height="false" class="md-transparent">
      <md-tab class="api-tab" md-label="Properties" v-if="$slots.properties">
        <slot name="properties"></slot>
      </md-tab>

      <md-tab class="api-tab" md-label="Classes" v-if="$slots.classes">
        <slot name="classes"></slot>
      </md-tab>

      <md-tab class="api-tab" md-label="Events" v-if="$slots.events">
        <slot name="events"></slot>
      </md-tab>

      <md-tab class="api-tab" md-label="Methods" v-if="$slots.methods">
        <slot name="methods"></slot>
      </md-tab>
    </md-tabs>
  </div>
</template>

<style lang="scss" scoped>
  .api-tab {
    padding: 0;
  }

  .md-title {
    margin-bottom: 12px;
  }
</style>

<script>
  export default {
    props: {
      name: String
    }
  };
</script>

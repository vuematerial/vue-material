<template>
  <div class="api-item">
    <h3>{{ title }}</h3>

    <slot />

    <div class="api-item-navigation">
      <md-button v-for="slot in slots" :key="slot" :class="{ 'md-primary': currentSlot === slot }" @click="currentSlot = slot">{{ slot | capitalize }}</md-button>
    </div>

    <div class="api-item-content">
      <slot v-for="slot in slots" :name="slot" v-if="currentSlot === slot" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  .md-button {
    min-width: 56px;
    margin: 4px 0;

    + .md-button {
      margin-left: 4px;
    }
  }
</style>

<script>
  export default {
    name: 'ApiItem',
    props: {
      title: String
    },
    filters: {
      capitalize (input) {
        return input.replace(/(?:^|\s)\S/g, transformed => transformed.toUpperCase())
      }
    },
    data: () => ({
      currentSlot: null
    }),
    computed: {
      slots () {
        return Object.keys(this.$slots).filter(slot => slot !== 'default')
      }
    },
    created () {
      this.currentSlot = this.slots[0]
    }
  }
</script>

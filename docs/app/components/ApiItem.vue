<template>
  <div class="api-item">
    <h3>{{ title }}</h3>

    <slot />

    <div class="api-item-navigation">
      <md-button
        v-for="slot in slots"
        :key="slot"
        :class="{ 'md-primary': currentSlot === slot }"
        @click="currentSlot = slot">
        {{ slot | capitalize | dashToSpace }}
      </md-button>
    </div>

    <div class="api-item-content" v-for="slot in slots" :key="slot" v-if="currentSlot === slot">
      <slot :name="slot" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiItem',
    props: {
      title: String
    },
    filters: {
      capitalize (input) {
        return input.replace(/(?:^|\s)\S/g, transformed => transformed.toUpperCase())
      },
      dashToSpace (input) {
        return input.replace(/-/g, ' ')
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

<style lang="scss" scoped>
  .md-button {
    min-width: 56px;
    margin: 4px 0;

    + .md-button {
      margin-left: 4px;
    }
  }
</style>

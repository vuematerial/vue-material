<template>
  <router-link :to="href" :title="title" class="grid-layout-item">
    <component class="grid-layout-item-icon" :is="icon" />

    <div class="grid-layout-item-info">
      <h2 class="grid-layout-item-title">{{ title }}</h2>
      <div class="grid-layout-item-description">
        <slot />
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
  .grid-layout-item {
    display: flex;
    color: inherit !important;
    text-decoration: none !important;
  }

  .grid-layout-item-icon {
    width: 64px;
    min-width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  .grid-layout-item-title {
    margin-top: 0;
  }

  .grid-layout-item-info {
    flex: 1;
  }
</style>

<script>
import IconButton from './icons/IconButton'

export default {
  name: 'GridLayoutItem',
  components: {
    IconButton
  },
  props: {
    href: String,
    title: String,
    icon: String
  }
}
</script>

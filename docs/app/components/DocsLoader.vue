<template>
  <div class="docs-loader">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DocsLoader',
  props: {
    name: String
  }
}
</script>

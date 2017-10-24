<template>
  <splash-container splash centered :title="$t('pages.components.title')">
    <grid-layout>
      <grid-layout-item
        v-for="{ key, name } in components"
        :key="key"
        :icon="`icon-${key}`"
        :title="$t(`pages.${name}.title`)"
        :href="`/components/${key}`">
        {{ $t(`pages.${name}.description`) }}
      </grid-layout-item>
    </grid-layout>
  </splash-container>
</template>

<script>
export default {
  name: 'Components',
  data: () => ({
    components: [
      {
        name: 'button',
        key: 'button'
      }
    ]
  })
}
</script>

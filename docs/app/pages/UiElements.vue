<template>
  <splash-container splash centered :title="$t('pages.uiElements.title')">
    <grid-layout>
      <grid-layout-item
        v-for="{ key, name } in elements"
        :key="key"
        :icon="`icon-${key}`"
        :title="$t(`pages.${name}.title`)"
        :link="`/ui-elements/${key}`">
        {{ $t(`pages.${name}.description`) }}
      </grid-layout-item>
    </grid-layout>
  </splash-container>
</template>

<script>
  export default {
    name: 'UiElements',
    data: () => ({
      elements: [

      ]
    })
  }
</script>

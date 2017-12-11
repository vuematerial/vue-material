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
        name: 'avatar',
        key: 'avatar'
      },
      {
        name: 'bottomBar',
        key: 'bottomBar'
      },
      {
        name: 'button',
        key: 'button'
      },

      {
        name: 'card',
        key: 'card'
      },
      {
        name: 'content',
        key: 'content'
      },
      {
        name: 'datepicker',
        key: 'datepicker'
      },

      {
        name: 'dialog',
        key: 'dialog'
      },
      {
        name: 'divider',
        key: 'divider'
      },
      {
        name: 'drawer',
        key: 'drawer'
      },

      {
        name: 'emptyState',
        key: 'emptyState'
      },
      {
        name: 'autocomplete',
        key: 'autocomplete'
      },
      {
        name: 'checkbox',
        key: 'checkbox'
      },

      {
        name: 'chips',
        key: 'chips'
      },
      {
        name: 'file',
        key: 'file'
      },
      {
        name: 'input',
        key: 'input'
      },

      {
        name: 'radio',
        key: 'radio'
      },
      {
        name: 'select',
        key: 'select'
      },
      {
        name: 'switch',
        key: 'switch'
      },

      {
        name: 'icon',
        key: 'icon'
      },
      {
        name: 'list',
        key: 'list'
      },
      {
        name: 'menu',
        key: 'menu'
      },

      {
        name: 'progress',
        key: 'progress'
      },
      {
        name: 'snackbar',
        key: 'snackbar'
      },
      {
        name: 'speedDial',
        key: 'speedDial'
      },

      {
        name: 'steppers',
        key: 'steppers'
      },
      {
        name: 'subheader',
        key: 'subheader'
      },
      {
        name: 'table',
        key: 'table'
      },

      {
        name: 'tabs',
        key: 'tabs'
      },
      {
        name: 'toolbar',
        key: 'toolbar'
      },
      {
        name: 'tooltip',
        key: 'tooltip'
      }
    ]
  })
}
</script>

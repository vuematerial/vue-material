<template>
  <md-button
    class="md-bottom-bar-item"
    :class="itemClasses"
    :id="id"
    :disabled="mdDisabled"
    :md-ripple="MdBottomBar.type === 'fixed'"
    v-bind="attrs"
    v-on="$listeners"
    @click="setActiveItem">
    <slot v-if="$slots.default"></slot>

    <template v-else>
      <md-icon class="md-bottom-bar-icon" v-if="isAssetIcon(mdIcon)" :md-src="mdIcon"></md-icon>
      <md-icon class="md-bottom-bar-icon" v-else>{{ mdIcon }}</md-icon>
      <span class="md-bottom-bar-label">{{ mdLabel }}</span>
    </template>
  </md-button>
</template>

<script>
  import MdAssetIcon from 'core/mixins/MdAssetIcon/MdAssetIcon'
  import MdUuid from 'core/utils/MdUuid'
  import MdRouterLinkProps from 'core/utils/MdRouterLinkProps'

  const ignoredProps = ['id', 'mdLabel', 'mdIcon', 'mdDisabled']

  export default {
    name: 'MdBottomBarItem',
    mixins: [MdAssetIcon],
    props: {
      id: {
        type: String,
        default: () => 'md-bottom-bar-item-' + MdUuid()
      },
      to: null,
      mdLabel: String,
      mdIcon: String,
      mdDisabled: Boolean
    },
    inject: ['MdBottomBar'],
    watch: {
      $props: {
        deep: true,
        handler () {
          this.setItemData()
        }
      },
      $attrs: {
        deep: true,
        handler () {
          this.setItemData()
        }
      }
    },
    computed: {
      itemClasses () {
        return {
          'md-active': this.id === this.MdBottomBar.activeItem
        }
      },
      attrs () {
        let attrs = {...this.$attrs}

        const propNames = Object.keys(this.$options.propsData)
        propNames.forEach(prop => {
          if (!ignoredProps.includes(prop)) {
            attrs[prop] = this[prop]
          }
        })

        return attrs
      }
    },
    methods: {
      getPropValues () {
        const propNames = Object.keys(this.$options.props)
        let values = {}

        propNames.forEach(prop => {
          if (!ignoredProps.includes(prop)) {
            if (this[prop]) {
              values[prop] = this[prop]
            } else if (this.$attrs && this.$attrs.hasOwnProperty(prop)) {
              if (prop) {
                values[prop] = this.$attrs[prop]
              } else {
                values[prop] = true
              }
            }
          }
        })

        return values
      },
      setItemData () {
        this.$set(this.MdBottomBar.items, this.id, {
          disabled: this.mdDisabled,
          options: this.mdTemplateOptions,
          props: this.getPropValues()
        })
      },
      setActiveItem ($event) {
        this.MdBottomBar.activeItem = this.id

        if (this.MdBottomBar.type === 'shift') {
          this.MdBottomBar.mouseEvent = $event
        }
      }
    },
    beforeCreate () {
      if (this.$router && this.$options.propsData.to) {
        const componentProps = MdRouterLinkProps(this, this.$options.props)
        this.$options.props = componentProps
      }
    },
    created () {
      this.setItemData()
    },
    beforeDestroy () {
      this.$delete(this.MdBottomBar.items, this.id)
    }
  }
</script>

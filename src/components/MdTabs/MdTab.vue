<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdRouterLink from 'core/mixins/MdRouterLink/MdRouterLink'
  import MdObserveElement from 'core/utils/MdObserveElement'
  import MdRouterLinkProps from 'core/utils/MdRouterLinkProps'

  export default {
    name: 'MdTab',
    mixins: [MdRouterLink],
    props: {
      id: {
        type: [String, Number],
        default: () => 'md-tab-' + MdUuid()
      },
      href: [String, Number],
      mdDisabled: Boolean,
      mdLabel: [String, Number],
      mdIcon: String,
      mdTemplateData: {
        type: Object,
        default: () => ({})
      }
    },
    inject: ['MdTabs'],
    data: () => ({
      observer: null
    }),
    watch: {
      $props: {
        deep: true,
        handler () {
          this.setTabData()
        }
      },
      $attrs: {
        deep: true,
        handler () {
          this.setTabData()
        }
      }
    },
    methods: {
      setTabContent () {
        this.$set(this.MdTabs.items.get(this.id), 'hasContent', !!this.$slots.default)
      },
      setupObserver () {
        this.observer = MdObserveElement(this.$el, {
          childList: true
        }, this.setTabContent)
      },
      setTabData () {
        // MdTabs does not know the order of tabs, as tabs are in a slot: store IDs in the DOM: DOM elements are ordered
        this.$el.mdTabIdAsObject = this.id

        // new Map() because Map is not reactive in VueJs 2
        this.MdTabs.items = new Map(this.MdTabs.items.set(this.id, {
          id: this.id,
          hasContent: !!this.$slots.default,
          label: this.mdLabel,
          icon: this.mdIcon,
          disabled: this.mdDisabled,
          data: this.mdTemplateData,
          props: this.getPropValues(),
          events: this.$listeners
        }))
      },
      getPropValues () {
        const propNames = Object.keys(this.$options.props)
        const ignoredProps = ['id', 'mdLabel', 'mdDisabled', 'mdTemplateData']
        let values = {}

        propNames.forEach(prop => {
          if (!ignoredProps.includes(prop)) {
            if (this[prop]) {
              values[prop] = this[prop]
            } else if (this.$attrs.hasOwnProperty(prop)) {
              if (prop) {
                values[prop] = this.$attrs[prop]
              } else {
                values[prop] = true
              }
            }
          }
        })

        return values
      }
    },
    mounted () {
      this.setupObserver()
      this.setTabData()
    },
    beforeDestroy () {
      if (this.observer) {
        this.observer.disconnect()
      }

      this.MdTabs.items.delete(this.id)
      this.MdTabs.items = new Map(this.MdTabs.items) // new Map() because Map is not reactive in VueJs 2
    },
    render (createElement) {
      let tabAttrs = {
        staticClass: 'md-tab',
        attrs: {
          ...this.$attrs,
          id: this.id
        },
        on: this.$listeners
      }

      if (this.$router && this.to) {
        this.$options.props = MdRouterLinkProps(this, this.$options.props)

        tabAttrs.props = this.$props
      }

      return createElement('div', tabAttrs, this.$slots.default)
    }
  }
</script>

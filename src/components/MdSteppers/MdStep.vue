<template>
  <div class="md-stepper">
    <md-step-header v-if="MdSteppers.isVertical" :index="id" />

    <div class="md-stepper-content" :class="{ 'md-active': id === MdSteppers.activeStep }">
      <slot />
    </div>
  </div>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdStepHeader from './MdStepHeader'

  export default {
    name: 'MdStep',
    components: {
      MdStepHeader
    },
    props: {
      id: {
        type: String,
        default: () => 'md-stepper-' + MdUuid()
      },
      href: [String, Number],
      to: null,
      mdLabel: String,
      mdDescription: String,
      mdError: String,
      mdDone: Boolean,
      mdEditable: {
        type: Boolean,
        default: true
      }
    },
    inject: ['MdSteppers'],
    watch: {
      $props: {
        deep: true,
        handler () {
          this.setStepperData()
        }
      }
    },
    methods: {
      getPropValues () {
        const propNames = Object.keys(this.$options.props)
        const ignoredProps = ['id', 'mdLabel', 'mdDescription', 'mdError', 'mdEditable']
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
      },
      setStepperData () {
        this.$set(this.MdSteppers.items, this.id, {
          label: this.mdLabel,
          description: this.mdDescription,
          error: this.mdError,
          done: this.mdDone,
          editable: this.mdEditable,
          props: this.getPropValues(),
          events: this.$listeners
        })
      },
      setupWatchers () {
        const getProp = prop => {
          if (this.MdSteppers.items[this.id]) {
            return this.MdSteppers.items[this.id][prop]
          }
        }

        this.$watch(
          () => getProp('error'),
          () => this.$emit('update:mdError', getProp('error'))
        )

        this.$watch(
          () => getProp('done'),
          () => this.$emit('update:mdDone', getProp('done'))
        )
      }
    },
    created () {
      this.setStepperData()
      this.setupWatchers()
    },
    beforeDestroy () {
      this.$delete(this.MdSteppers.items, this.id)
    },
    render (createElement) {
      let stepperAttrs = {
        staticClass: 'md-stepper',
        attrs: {
          ...this.$attrs,
          id: this.id
        },
        on: this.$listeners
      }

      if (this.href) {
        this.buttonProps = this.$options.props
      } else if (this.$router && this.to) {
        this.$options.props = MdRouterLinkProps(this, this.$options.props)

        stepperAttrs.props = this.$props
      }

      return createElement('div', stepperAttrs, this.$slots.default)
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-steppers.md-vertical .md-stepper-content {
    padding: 0 24px 0 60px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translate3D(0, -20px, 0);
    transition: .35s $md-transition-stand-timing;
    transition-property: opacity, transform, height, padding-bottom;
    will-change: opacity, transform, height, padding-bottom;

    &.md-active {
      height: auto;
      padding-bottom: 40px;
      opacity: 1;
      transform: translate3D(0, 0, 0);
    }
  }
</style>

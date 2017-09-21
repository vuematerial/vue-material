<template>
  <transition :name="mdTransitionName" :appear="mdTransitionAppear">
    <div :class="shouldRender" :style="shouldRender" v-if="shouldRender" v-on="$listeners">
      <slot />
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue'

  const validator = (prop, context, expression, message) => {
    if (expression) {
      return true
    }

    Vue.util.warn(`The ${prop} prop is invalid. ${message}.`, context)

    return false
  }

  export default {
    name: 'MdPortal',
    props: {
      mdIf: {
        type: null,
        validator: (value) => {
          return validator('md-if', this, value === null || typeof value === 'boolean', 'You should pass a Boolean value')
        }
      },
      mdTransitionName: String,
      mdTransitionAppear: Boolean,
      mdFollowEl: HTMLElement,
      mdTargetEl: {
        type: HTMLElement,
        validator: (value) => {
          return validator('md-target-el', this, value && value instanceof HTMLElement, 'You should pass a valid HTMLElement')
        }
      }
    },
    data: () => ({
      leaveTimeout: null,
      targetEl: null
    }),
    computed: {
      shouldRender () {
        return typeof this.mdIf === 'boolean' ? this.mdIf : true
      },
      leaveClass () {
        return this.mdTransitionName + '-leave'
      },
      leaveActiveClass () {
        return this.mdTransitionName + '-leave-active'
      },
      leaveToClass () {
        return this.mdTransitionName + '-leave-to'
      }
    },
    watch: {
      mdTargetEl (newTarget, oldTarget) {
        if (oldTarget) {
          this.changeParentEl()
          newTarget.appendChild(this.$el)
          this.$forceUpdate()
        }
      }
    },
    methods: {
      prepareSlotRender ($slots) {
        const slotNames = Object.keys($slots)

        slotNames.forEach(slot => {
          $slots[slot]._rendered = false
        })
      },
      changeParentEl () {
        this.$options._parentElm = this.mdTargetEl
      },
      killGhostElement () {
        if (this.mdTargetEl.contains(this.$el)) {
          this.mdTargetEl.removeChild(this.$el)
        }
      },
      destroyElement () {
        window.requestAnimationFrame(() => {
          this.$el.classList.remove(this.leaveClass)
          this.$el.classList.remove(this.leaveActiveClass)
          this.$el.classList.remove(this.leaveToClass)
          this.killGhostElement()
        })
      }
    },
    created () {
      this.changeParentEl()
    },
    async beforeDestroy () {
      if (this.$el.classList) {
        this.$el.classList.add(this.leaveClass)
        this.$el.classList.add(this.leaveActiveClass)
        await this.$nextTick()
        this.$el.classList.add(this.leaveToClass)

        window.clearTimeout(this.leaveTimeout)
        this.leaveTimeout = window.setTimeout(this.destroyElement, 400)
      } else {
        this.killGhostElement()
      }
    }
  }
</script>

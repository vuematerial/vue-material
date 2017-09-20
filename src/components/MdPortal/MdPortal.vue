<template>
  <transition :name="mdTransitionName" :appear="mdTransitionAppear">
    <div :class="mdIf" :style="mdIf" v-if="mdIf" v-on="$listeners">
      <slot />
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MdPortal',
    props: {
      mdIf: Boolean,
      mdTransitionName: String,
      mdTransitionAppear: Boolean,
      mdFollowEl: HTMLElement,
      mdTargetEl: {
        type: HTMLElement,
        default: () => document.body
      }
    },
    data: () => ({
      leaveTimeout: null,
      targetEl: null
    }),
    computed: {
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
    methods: {
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
      this.$options._parentElm = this.mdTargetEl || document.body
    },
    beforeDestroy () {
      if (this.$el.classList) {
        this.$el.classList.add(this.leaveClass)
        this.$el.classList.add(this.leaveActiveClass)
        this.$el.classList.add(this.leaveToClass)

        window.clearTimeout(this.leaveTimeout)
        this.leaveTimeout = window.setTimeout(this.destroyElement, 400)
      } else {
        this.killGhostElement()
      }
    }
  }
</script>

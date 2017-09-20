<template>
  <transition :name="mdTransitionName" :appear="mdTransitionAppear">
    <div :class="mdIf" v-if="mdIf">
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
    methods: {
      killGhostElement () {
        if (this.mdTargetEl.contains(this.$el)) {
          this.mdTargetEl.removeChild(this.$el)
        }
      }
    },
    created () {
      this.$options._parentElm = this.mdTargetEl
    },
    beforeDestroy () {
      this.killGhostElement()
    }
  }
</script>

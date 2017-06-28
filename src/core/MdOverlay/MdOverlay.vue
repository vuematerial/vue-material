<template>
  <transition name="md-overlay" @before-enter="setActive" @after-leave="detachFromBody">
    <div class="md-overlay" :class="overlayClasses" v-if="isVisible" @click="$emit('click', $event)"></div>
  </transition>
</template>

<script>
  export default {
    name: 'MdOverlay',
    props: {
      mdVisible: Boolean,
      mdBodyAttach: Boolean
    },
    data: () => ({
      noop: null,
      overlayElement: null,
      isVisible: false,
      isActive: false
    }),
    computed: {
      overlayClasses () {
        return {
          'md-active': this.isActive,
          'md-fixed': this.mdBodyAttach
        }
      }
    },
    watch: {
      mdVisible (visible) {
        this.controlVisibility(visible)
      }
    },
    methods: {
      controlVisibility (visible) {
        window.requestAnimationFrame(() => {
          if (visible) {
            this.attachToBody()
          }

          this.isVisible = visible
        })
      },
      async setActive () {
        await this.$nextTick()
        this.isActive = true
      },
      removeNode (content) {
        const { parentNode } = content

        if (parentNode.contains(content)) {
          parentNode.removeChild(content)
        }
      },
      detachFromBody () {
        const { body } = document
        const { overlayElement } = this
        let container = this.mdBodyAttach ? body : this.parentElement

        if (container.contains(overlayElement)) {
          container.removeChild(overlayElement)
        }

        this.isActive = false
      },
      attachToBody () {
        const { body } = document
        const { overlayElement } = this
        let container = this.mdBodyAttach ? body : this.parentElement

        if (!container.contains(overlayElement)) {
          container.appendChild(overlayElement)
        }
      }
    },
    mounted () {
      this.overlayElement = this.$el
      this.parentElement = this.$el.parentNode.parentNode
      this.removeNode(this.$el)

      if (this.mdVisible) {
        this.controlVisibility(this.mdVisible)
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: rgba(#000, .6);
    opacity: 0;
    transition: .4s $md-transition-stand-timing;
    transition-property: opacity;
    will-change: opacity;

    &.md-fixed {
      position: fixed;
    }

    &.md-active {
      opacity: 1;
    }

    &.md-overlay-enter-active {
      transition: .4s $md-transition-stand-timing;
    }

    &.md-overlay-leave-active {
      opacity: 0;
    }
  }
</style>

<template>
  <transition name="code-loading" appear>
    <div class="code-loading">
      <md-progress-spinner md-mode="indeterminate" />
      <div class="code-loading-label" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CodeLoading'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

  .code-loading {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: opacity .3s $md-transition-default-timing;
    will-change: opacity;
    font-size: 15px;
  }

  .code-loading-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }

  .code-loading-label {
    margin-top: 16px;
  }
</style>

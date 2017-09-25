<template>
  <div class="md-card" :class="[$mdActiveTheme, cardClasses]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdCard',
    props: {
      mdWithHover: Boolean
    },
    data: () => ({
      MdCard: {
        expand: false
      }
    }),
    provide () {
      return {
        MdCard: this.MdCard
      }
    },
    computed: {
      cardClasses () {
        return {
          'md-with-hover': this.mdWithHover,
          'md-expand-active': this.MdCard.expand
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "./base";

  $md-card-radius: 2px;

  .md-card {
    @include md-card;

    &.md-with-hover {
      cursor: pointer;
      transition: background-color .3s $md-transition-default-timing,
                  box-shadow .4s $md-transition-stand-timing;
      will-change: background-color, box-shadow;

      &:hover {
        z-index: 2;
        @include md-elevation(8);
      }
    }

    &.md-expand-active {
      .md-card-expand-trigger.md-icon-button {
        transform: rotate(180deg);
      }
    }

    .md-subhead,
    .md-title,
    .md-subheading {
      margin: 0;
      font-weight: 400;
    }

    .md-subhead {
      opacity: .54;
      font-size: 14px;
      letter-spacing: .01em;
      line-height: 20px;

      + .md-title {
        margin-top: 4px;
      }
    }

    .md-title {
      font-size: 24px;
      letter-spacing: 0;
      line-height: 32px;
    }
  }
</style>

<template>
  <div class="md-card-media" :class="mediaClasses">
    <slot />
  </div>
</template>

<script>
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default {
    name: 'MdCardMedia',
    props: {
      mdRatio: {
        type: String,
        ...MdPropValidator('md-ratio', [
          '16-9',
          '16/9',
          '16:9',
          '4-3',
          '4/3',
          '4:3',
          '1-1',
          '1/1',
          '1:1'
        ])
      },
      mdMedium: Boolean,
      mdBig: Boolean
    },
    computed: {
      mediaClasses () {
        let classes = {}

        if (this.mdRatio) {
          const ratio = this.getAspectRatio()

          if (ratio) {
            const [horiz, vert] = ratio

            classes[`md-ratio-${horiz}-${vert}`] = true
          }
        }

        if (this.mdMedium || this.mdBig) {
          classes = {
            'md-medium': this.mdMedium,
            'md-big': this.mdBig
          }
        }

        return classes
      }
    },
    methods: {
      getAspectRatio () {
        let ratio = []

        if (this.mdRatio.indexOf(':') !== -1) {
          ratio = this.mdRatio.split(':')
        } else if (this.mdRatio.indexOf('/') !== -1) {
          ratio = this.mdRatio.split('/')
        } else if (this.mdRatio.indexOf('-') !== -1) {
          ratio = this.mdRatio.split('-')
        }

        return ratio.length === 2 ? ratio : null
      }
    }
  }
</script>

<style lang="scss">
  @mixin md-image-aspect-ratio($width, $height) {
    overflow: hidden;

    &:before{
      width: 100%;
      padding-top: ($height / $width) * 100%;
      display: block;
      content: " ";
    }

    img {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      transform: translateY(-50%);
    }
  }

  .md-card-media {
    position: relative;

    &.md-ratio-16-9 {
      @include md-image-aspect-ratio(16, 9);
    }

    &.md-ratio-4-3 {
      @include md-image-aspect-ratio(4, 3);
    }

    &.md-ratio-1-1 {
      @include md-image-aspect-ratio(1, 1);
    }

    + .md-card-header {
      padding-top: 24px;
    }

    + .md-card-content:last-child {
      padding-bottom: 16px;
    }

    img {
      width: 100%;
    }
  }
</style>

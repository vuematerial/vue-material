<template>
  <div class="md-card-media-cover" :class="classes">
    <slot></slot>
    <div class="md-card-backdrop" :style="styles" v-if="mdTextScrim" ref="backdrop"></div>
  </div>
</template>

<script>
  import getImageLightness from '../../core/utils/getImageLightness';

  export default {
    name: 'md-card-media-cover',
    props: {
      mdTextScrim: Boolean,
      mdSolid: Boolean
    },
    data() {
      return {
        backdropBg: {}
      };
    },
    computed: {
      classes() {
        return {
          'md-text-scrim': this.mdTextScrim,
          'md-solid': this.mdSolid
        };
      },
      styles() {
        return {
          background: this.backdropBg
        };
      }
    },
    methods: {
      applyScrimColor(darkness) {
        if (this.$refs.backdrop) {
          this.backdropBg = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`;
        }
      },
      applySolidColor(darkness) {
        let area = this.$el.querySelector('.md-card-area');

        if (area) {
          area.style.background = `rgba(0, 0, 0, ${darkness})`;
        }
      }
    },
    mounted() {
      const applyBackground = (darkness = 0.6) => {
        if (this.mdTextScrim) {
          this.applyScrimColor(darkness);
        } else if (this.mdSolid) {
          this.applySolidColor(darkness);
        }
      };
      let image = this.$el.querySelector('img');

      if (image && (this.mdTextScrim || this.mdSolid)) {
        getImageLightness(image, (lightness) => {
          let limit = 256;
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

          if (darkness >= 0.7) {
            darkness = 0.7;
          }

          applyBackground(darkness);
        }, applyBackground);
      }
    }
  };
</script>

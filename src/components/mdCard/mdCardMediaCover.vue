<template>
  <div class="md-card-media-cover" :class="classes">
    <slot></slot>
    <div class="md-backdrop" :style="styles" v-if="mdTextScrim" ref="backdrop"></div>
  </div>
</template>

<script>
  const getImageAlpha = (image, onLoad) => {
    let canvas = document.createElement('canvas');

    image.onload = function() {
      let colorSum = 0;
      let ctx;
      let imageData;
      let imageMetadata;
      let r;
      let g;
      let b;
      let average;

      canvas.width = this.width;
      canvas.height = this.height;
      ctx = canvas.getContext('2d');

      ctx.drawImage(this, 0, 0);

      imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      imageMetadata = imageData.data;

      for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
        r = imageMetadata[x];
        g = imageMetadata[x + 1];
        b = imageMetadata[x + 2];

        average = Math.floor((r + g + b) / 3);
        colorSum += average;
      }

      onLoad(Math.floor(colorSum / (this.width * this.height)));
    };
  };

  export default {
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
      let image = this.$el.querySelector('img');

      if (image && (this.mdTextScrim || this.mdSolid)) {
        getImageAlpha(image, (lightness) => {
          let limit = 256;
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

          if (darkness >= 0.7) {
            darkness = 0.7;
          }

          if (this.mdTextScrim) {
            this.applyScrimColor(darkness);
          } else if (this.mdSolid) {
            this.applySolidColor(darkness);
          }
        });
      }
    }
  };
</script>

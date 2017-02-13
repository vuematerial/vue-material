<template>
  <img :src="mdSrc" class="md-image" :class="classes">
</template>

<style lang="scss" src="./mdImage.scss"></style>

<script>
  import getImageLightness from '../../core/utils/getImageLightness';

  export default {
    name: 'md-image',
    props: {
      mdSrc: String
    },
    data: () => ({
      loaded: false,
      applyBlack: true,
      imageElement: null
    }),
    watch: {
      mdSrc() {
        this.createImage();
      }
    },
    computed: {
      classes() {
        return {
          'md-loaded': this.loaded,
          'md-black-output': this.applyBlack
        };
      }
    },
    methods: {
      analyzeLightness(image) {
        const applyLoad = () => {
          this.loaded = true;
        };

        getImageLightness(image, (lightness) => {
          let limit = 256;
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

          if (darkness >= 0.7) {
            this.applyBlack = true;
          }

          this.$nextTick(applyLoad);
        }, applyLoad);
      },
      createImage() {
        this.loaded = false;
        this.applyBlack = false;
        this.imageElement = null;

        if (this.mdSrc) {
          this.imageElement = document.createElement('img');
          this.imageElement.crossOrigin = '';
          this.imageElement.src = this.mdSrc;
          this.analyzeLightness(this.imageElement);
        }
      }
    },
    created() {
      this.createImage();
    }
  };
</script>

<template>
  <i class="md-icon" :class="[themeClass]" v-html="svgContent" v-if="svgContent"></i>

  <md-image class="md-icon" :class="[themeClass]" :md-src="imageSrc" v-else-if="imageSrc"></md-image>

  <i class="md-icon material-icons" :class="[themeClass]" v-else>
    <slot></slot>
  </i>
</template>

<style lang="scss" src="./mdIcon.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      mdSrc: String
    },
    data: () => ({
      svgContent: null,
      imageSrc: null
    }),
    mixins: [theme],
    watch: {
      mdSrc() {
        this.svgContent = null;
        this.imageSrc = null;
        this.checkSrc();
      }
    },
    methods: {
      isImage(mimetype) {
        return mimetype.indexOf('image') >= 0;
      },
      isSVG(mimetype) {
        return mimetype.indexOf('svg') >= 0;
      },
      loadSVG() {
        const request = new XMLHttpRequest();
        const self = this;

        request.open('GET', this.mdSrc, true);

        request.onload = function() {
          const mimetype = this.getResponseHeader('content-type');

          if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
            if (self.isSVG(mimetype)) {
              self.svgContent = this.response;
              window.setTimeout(() => {
                self.$el.children[0].removeAttribute('fill');
              }, 0);
            } else {
              this.loadImage();
            }
          } else {
            console.warn(`The file ${this.mdSrc} is not a valid image.`);
          }
        };

        request.send();
      },
      loadImage() {
        this.imageSrc = this.mdSrc;
      },
      checkSrc() {
        if (this.mdSrc) {
          if (this.mdSrc.indexOf('.svg') >= 0) {
            this.loadSVG();
          } else {
            this.loadImage();
          }
        }
      }
    },
    mounted() {
      this.checkSrc();
    }
  };
</script>

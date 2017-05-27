<template>
  <i class="md-icon" :class="[$mdActiveTheme]" v-html="svgContent" v-if="svgContent"></i>

  <md-image class="md-icon" :class="[$mdActiveTheme]" :md-src="imageSrc" v-else></md-image>
</template>

<style lang="scss">
  $icon-size: 24px;

  @mixin icon-size($size: $icon-size) {
    width: $size;
    min-width: $size;
    height: $size;
  }

  .md-icon {
    @include icon-size();
    margin: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: currentColor;
    text-rendering: optimizeLegibility;
    vertical-align: middle;

    &.md-size-2x {
      @include icon-size($icon-size * 2);
    }

    &.md-size-3x {
      @include icon-size($icon-size * 3);
    }

    &.md-size-4x {
      @include icon-size($icon-size * 4);
    }

    &.md-size-5x {
      @include icon-size($icon-size * 5);
    }

    svg {
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }

  img.md-icon {
    user-select: none;
    -webkit-user-drag: none;
  }
</style>

<script lang="babel">
  import MdComponent from 'core/MdComponent'

  let registeredIcons = {}

  export default new MdComponent({
    name: 'MdIcon',
    props: {
      mdSrc: {
        type: String,
        required: true
      }
    },
    data: () => ({
      svgContent: null,
      imageSrc: null
    }),
    watch: {
      src () {
        this.svgContent = null
        this.imageSrc = null
        this.loadFile()
      }
    },
    methods: {
      isImage (mimetype) {
        return mimetype.indexOf('image') >= 0
      },
      isSVG (mimetype) {
        return mimetype.indexOf('svg') >= 0
      },
      async setSVGContent (value) {
        this.svgContent = value

        await this.$nextTick()

        const dataset = [].filter.call(this.$el.attributes, attribute => /^data-/.test(attribute.name))

        dataset.forEach(data => {
          const childrenArray = Array.from(this.$el.querySelectorAll('*'))

          childrenArray.forEach(node => {
            node.setAttribute(data.name.toLowerCase(), '')
          })
        })
      },
      loadImage () {
        this.imageSrc = this.mdSrc
      },
      loadSVG () {
        if (!registeredIcons[this.mdSrc]) {
          const request = new window.XMLHttpRequest()
          const self = this

          request.open('GET', this.mdSrc, true)

          request.onload = function () {
            const mimetype = this.getResponseHeader('content-type')

            if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
              if (self.isSVG(mimetype)) {
                registeredIcons[self.mdSrc] = this.response
                self.setSVGContent(this.response)
              } else {
                self.loadImage()
              }
            } else {
              console.warn(`The file ${self.mdSrc} is not a valid image.`)
            }
          }

          request.send()
        } else {
          this.setSVGContent(registeredIcons[this.mdSrc])
        }
      },
      loadFile () {
        if (this.mdSrc) {
          if (this.mdSrc.indexOf('.svg') >= 0) {
            this.loadSVG()
          } else {
            this.loadImage()
          }
        }
      }
    },
    mounted () {
      this.loadFile()
    }
  })
</script>

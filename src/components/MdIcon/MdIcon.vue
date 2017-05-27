<template>
  <i class="md-icon" :class="[$mdActiveTheme]" v-html="svgContent"></i>
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
      mdSrc () {
        this.svgContent = null
        this.loadSVG()
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
        this.svgContent = await registeredIcons[this.mdSrc]

        await this.$nextTick()

        const dataset = [].filter.call(this.$el.attributes, attribute => /^data-/.test(attribute.name))

        dataset.forEach(data => {
          const childrenArray = Array.from(this.$el.querySelectorAll('*'))

          childrenArray.forEach(node => {
            node.setAttribute(data.name.toLowerCase(), '')
          })
        })
      },
      loadSVG () {
        if (!registeredIcons.hasOwnProperty(this.mdSrc)) {
          registeredIcons[this.mdSrc] = new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()
            const self = this

            request.open('GET', this.mdSrc, true)

            request.onload = function () {
              const mimetype = this.getResponseHeader('content-type')

              if (this.status >= 200 && this.status < 400 && self.isSVG(mimetype)) {
                resolve(this.response)
                self.setSVGContent()
              } else {
                reject(new Error(`The file ${self.mdSrc} is not a valid image.`))
              }
            }

            request.send()
          })
        } else {
          this.setSVGContent()
        }
      }
    },
    mounted () {
      this.loadSVG()
    }
  })
</script>

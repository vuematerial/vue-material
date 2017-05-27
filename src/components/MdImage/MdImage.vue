<template>
  <div class="md-image" v-html="svgContent">

  </div>
</template>

<style lang="scss">
  .md-image {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      flex: 1;
    }
  }
</style>

<script lang="babel">
  import MdComponent from 'core/MdComponent'

  let registeredIcons = {}

  export default new MdComponent({
    name: 'MdImage',
    props: {
      mdSrc: String
    },
    data: () => ({
      svgContent: null
    }),
    watch: {
      src () {
        this.svgContent = null
        this.loadSVG()
      }
    },
    methods: {
      async setSVGContent (value) {
        if (this.textSlot) {
          value = value.replace('{{textSlot}}', this.textSlot)
        }

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
      loadSVG () {
        if (!registeredIcons[this.mdSrc]) {
          const request = new window.XMLHttpRequest()
          const self = this

          request.open('GET', this.mdSrc, true)

          request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
              registeredIcons[self.mdSrc] = this.response

              self.setSVGContent(this.response)
            } else {
              console.warn(`The file ${self.mdSrc} is not a valid SVG.`)
            }
          }

          request.send()
        } else {
          this.setSVGContent(registeredIcons[this.mdSrc])
        }
      }
    },
    mounted () {
      this.loadSVG()
    }
  })
</script>

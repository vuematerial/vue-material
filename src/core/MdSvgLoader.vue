<template>
  <i class="md-svg-loader" v-html="html"></i>
</template>

<style lang="scss">
  .md-svg-loader {
    display: block;

    svg {
      width: 100%;
    }
  }
</style>

<script lang="babel">
  let mdSVGStore = {}

  export default {
    name: 'MdSVGLoader',
    props: {
      mdSrc: {
        type: String,
        required: true
      }
    },
    data: () => ({
      html: null
    }),
    watch: {
      mdSrc () {
        this.html = null
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
      async sethtml (value) {
        this.html = await mdSVGStore[this.mdSrc]

        await this.$nextTick()

        this.$emit('md-loaded')
      },
      loadSVG () {
        if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
          mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()
            const self = this

            request.open('GET', this.mdSrc, true)

            request.onload = function () {
              const mimetype = this.getResponseHeader('content-type')

              if (this.status >= 200 && this.status < 400 && self.isSVG(mimetype)) {
                resolve(this.response)
                self.sethtml()
              } else {
                reject(new Error(`The file ${self.mdSrc} is not a valid SVG.`))
              }
            }

            request.send()
          })
        } else {
          this.sethtml()
        }
      }
    },
    mounted () {
      this.loadSVG()
    }
  }
</script>

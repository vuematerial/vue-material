<template>
  <i class="md-svg-loader" v-html="html"></i>
</template>

<script>
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
      html: null,
      error: null
    }),
    watch: {
      mdSrc () {
        this.html = null
        this.loadSVG()
      }
    },
    methods: {
      isSVG (mimetype) {
        return mimetype.indexOf('svg') >= 0
      },
      async setHtml (value) {
        this.html = await mdSVGStore[this.mdSrc]

        await this.$nextTick()

        this.$emit('md-loaded')
      },
      unexpectedError (reject) {
        this.error = `Something bad happened trying to fetch ${this.mdSrc}.`
        reject(this.error)
      },
      loadSVG () {
        if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
          mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()
            const self = this

            request.open('GET', this.mdSrc, true)

            request.onload = function () {
              const mimetype = this.getResponseHeader('content-type')

              if (this.status === 200) {
                if (self.isSVG(mimetype)) {
                  resolve(this.response)
                  self.setHtml()
                } else {
                  self.error = `The file ${self.mdSrc} is not a valid SVG.`
                  reject(self.error)
                }
              } else if (this.status >= 400 && this.status < 500) {
                self.error = `The file ${self.mdSrc} do not exists.`
                reject(self.error)
              } else {
                self.unexpectedError(reject)
              }
            }

            request.onerror = () => {
              this.unexpectedError(reject)
            }

            request.onabort = () => {
              this.unexpectedError(reject)
            }

            request.send()
          })
        } else {
          this.setHtml()
        }
      }
    },
    mounted () {
      this.loadSVG()
    }
  }
</script>

<style lang="scss">
  .md-svg-loader {
    display: block;

    svg {
      width: 100%;
    }
  }
</style>

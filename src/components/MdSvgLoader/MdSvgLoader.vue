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
        if (typeof mimetype !== 'string') return false;
        return mimetype.indexOf('svg') >= 0
      },
      setHtml (value) {
        mdSVGStore[this.mdSrc].then((html) => {
          this.html = html

          return this.$nextTick()
        }).then(() => this.$emit('md-loaded'))
      },
      unexpectedError (reject) {
        this.error = `Something bad happened trying to fetch ${this.mdSrc}.`
        reject(this.error)
      },
      loadSVG () {
        if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
          mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()

            request.open('GET', this.mdSrc, true)

            request.onload = () => {
              const mimetype = request.getResponseHeader('content-type')

              if (request.status === 200) {
                if (this.isSVG(mimetype)) {
                  resolve(request.response)
                  this.setHtml()
                } else {
                  this.error = `The file ${this.mdSrc} is not a valid SVG.`
                  reject(this.error)
                }
              } else if (request.status >= 400 && request.status < 500) {
                this.error = `The file ${this.mdSrc} do not exists.`
                reject(this.error)
              } else {
                this.unexpectedError(reject)
              }
            }

            request.onerror = () => this.unexpectedError(reject)
            request.onabort = () => this.unexpectedError(reject)
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

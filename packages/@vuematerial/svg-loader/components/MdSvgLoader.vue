<template>
  <i class="md-svg" v-html="html" />
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

const mdSVGStore = {}

@Component
class MdSvgLoader extends Vue {

  @Prop({ type: String, required: true, default: '' })
  mdSrc!: string

  html: string = ''
  error: string = ''

  @Watch('mdSrc')
  onMdSrc () {
    this.html = ''
    this.loadSVG()
  }

  mounted () {
    this.loadSVG()
  }

  isSVG (mimetype: string) {
    return mimetype.indexOf('svg') >= 0
  }

  setHtml () {
    mdSVGStore[this.mdSrc].then((html: string) => {
      this.html = html

      return this.$nextTick()
    }).then(() => this.$emit('md-loaded'))
  }

  unexpectedError (reject: (reason: string) => void) {
    this.error = `Something bad happened trying to fetch ${this.mdSrc}.`
    reject(this.error)
  }

  loadSVG () {
    if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
      mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.open('GET', this.mdSrc, true)

        request.onload = () => {
          const mimetype = request.getResponseHeader('content-type') || ''

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

}

export default MdSvgLoader
</script>

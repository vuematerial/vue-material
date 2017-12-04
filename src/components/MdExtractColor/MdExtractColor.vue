<script>
export default {
  name: 'MdExtractColor',
  abstract: true,
  props: {
    mdMoreColors: Boolean
  },
  render () {
    try {
      return this.$slots.default[0]
    } catch (e) {
      throw new Error('MdExtractColor.vue can only render one, and exactly one child component.')
    }
    return null
  },
  mounted () {
    let image = this.$el

    this.getDominantColor(image, (colors) => {
      this.$emit('update:mdColor', colors)
    })
  },
  methods: {
    getDominantColor (image, onLoad, onError) {
      const canvas = document.createElement('canvas')

      image.crossOrigin = 'Anonymous'

      image.onload = () => {

        /*!
        *    Get dominant color from an image version 1.0 BETA
        *    Ken Fyrstenberg Nilsen @ Abdias Software
        *
        *    Only gets actual, not perceived, dominant color.
        *    License: MIT
        */

        let max = -1
        let stats = []
        let key, maxKey, prevKey, pprevKey

        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0)
        const idata = ctx.getImageData(0, 0, canvas.width, canvas.height)

        // get stats
        let buffer = new Uint32Array(idata.data.buffer)
        let len = buffer.length - 1
        while (len--) {
          key = buffer[len] & 0x00ffffff
          stats[key] = (stats[key] || 0) + 1
        }

        // determine most dominant color
        let keys = Object.keys(stats)
        for (len = 0; key = keys[len]; len++) {
          if (stats[key] > max) {
            max = stats[key]
            pprevKey = prevKey
            prevKey = maxKey
            maxKey = key
          }
        }

        // convert the keys to rgb
        const colorsWithCommas = this.convertColors(maxKey, prevKey, pprevKey)

        onLoad(colorsWithCommas)
      }

      image.onerror = onError
    },
    convertToRGB (key) {
      if (!key) {
        return
      }
      return [(key & 0x000000ff),
              (key & 0x0000ff00) >> 8,
              (key & 0x00ff0000) >> 16]
    },
    convertColors (maxKey, prevKey, pprevKey) {
      if (this.mdMoreColors) {
        const colors = []

        colors.push(this.convertToRGB(maxKey))
        if (prevKey) {
          colors.push(this.convertToRGB(prevKey))
          if (pprevKey) {
            colors.push(this.convertToRGB(pprevKey))
          }
        }

        return colors.map((color) => color.join())
      } else {
        return this.convertToRGB(maxKey).join()
      }
    }
  }
}
</script>

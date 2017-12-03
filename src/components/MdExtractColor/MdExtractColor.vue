<script>
export default {
  name: 'MdExtractColor',
  abstract: true,
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
      this.$emit('md-color', colors)
    })
  },
  methods: {
    getDominantColor (image, onLoad, onError) {
      const canvas = document.createElement('canvas')

      image.crossOrigin = 'Anonymous'

      image.onload = function () {

        /*!
        *    Get dominant color from an image version 1.0 BETA
        *    Ken Fyrstenberg Nilsen @ Abdias Software
        *
        *    Only gets actual, not perceived, dominant color.
        *    License: MIT
        */

        let max = -1
        let stats = []
        let statsResult = []
        let idata, buffer, len, key, keys, maxKey, prevKey, pprevKey

        canvas.width = this.width
        canvas.height = this.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)

        idata = ctx.getImageData(0, 0, canvas.width, canvas.height)
        buffer = new Uint32Array(idata.data.buffer)
        len = buffer.length - 1

        // get stats
        while (len--) {
          key = buffer[len] & 0x00ffffff
          stats[key] = (stats[key] || 0) + 1
        }

        // determine most dominant color
        keys = Object.keys(stats)
        for (len = 0; key = keys[len]; len++) {
            if (stats[key] > max) {
                max = stats[key]
                pprevKey = prevKey
                prevKey = maxKey
                maxKey = key
            }
        }

        // convert the key to rgb
        statsResult.push([(maxKey & 0x000000ff),
                          (maxKey & 0x0000ff00) >> 8,
                          (maxKey & 0x00ff0000) >> 16])

        // if (prevKey) {
        //   statsResult.push([(prevKey & 0x000000ff),
        //                     (prevKey & 0x0000ff00) >> 8,
        //                     (prevKey & 0x00ff0000) >> 16])

        //     if (pprevKey) {
        //       statsResult.push([(pprevKey & 0x000000ff),
        //                         (pprevKey & 0x0000ff00) >> 8,
        //                         (pprevKey & 0x00ff0000) >> 16])
        //     }
        // }

        // join colors with commas
        const colors = statsResult.map((color) => {
          return color.join()
        })

        console.log(colors)

        onLoad(colors)
      }

      image.onerror = onError
    }
  }
}
</script>

<template>
  <MdTagSwitcher
    v-on="$listeners"
    v-bind="$attrs"
    :class="shapeClasses"
    :style="shapeStyles"
    :mdTag="mdTag"
  >
    <div class="md-shape-content" v-if="renderSVGCorner">
      <slot />
    </div>

    <template v-else>
      <slot />
    </template>

    <svg class="md-shape-form" v-if="renderSVGCorner">
      <mask :id="getElId('mask')" fill="#fff">
        <rect :id="getElId('background')" :width="contentWidth" :height="contentHeight" />
        <g v-if="this.isSquare" :class="getElId('square')">
          <polygon :points="topLeftCorner" fill="#000" />
          <polygon :points="topRightCorner" fill="#000" />
          <polygon :points="bottomLeftCorner" fill="#000" />
          <polygon :points="bottomRightCorner" fill="#000" />
        </g>

        <g v-else-if="this.isScoop" :class="getElId('scoop')">
          <circle :id="getElId('scoop')" :r="mdCornerSize" fill="#000" />
          <use :xlink:href="getElId('scoop', true)" :x="contentWidth" />
          <use :xlink:href="getElId('scoop', true)" :y="contentHeight" />
          <use :xlink:href="getElId('scoop', true)" :x="contentWidth" :y="contentHeight" />
        </g>

        <g v-else-if="this.isNotch" :class="getElId('notch')">
          <circle :id="getElId('notch')" :r="mdCornerSize" fill="#000" :cx="notchPos" />
        </g>
      </mask>

      <use
        class="md-shape-form-fill"
        :xlink:href="getElId('background', true)"
        :mask="`url(${getElId('mask', true)})`"
      />
    </svg>
  </MdTagSwitcher>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import ResizeObserver from 'resize-observer-polyfill'
  import raf from 'raf'

  import MdTagSwitcher from '@vuematerial/tag-switcher'
  import mdSupportsCSSFilter from '@vuematerial/core/utils/mdSupportsCSSFilter'
  import mdUuid from '@vuematerial/core/utils/mdUuid'

  Vue.use(MdTagSwitcher)

  @Component
  class MdShape extends Vue {

    @Prop({ type: String, default: 'div' })
    mdTag!: string

    @Prop({ type: Boolean, default: false })
    mdPrimary!: boolean

    @Prop({ type: Boolean, default: false })
    mdSecondary!: boolean

    @Prop({ type: String, default: '' })
    mdCornerType!: string

    @Prop({ type: [String, Number], default: 0 })
    mdElevation!: string | number

    @Prop({ type: [String, Number], default: 8 })
    mdCornerSize!: string | number

    @Prop({ type: String, default: 'center' })
    mdNotchPos!: string

    cornerId: string = mdUuid(false)
    resizeObserver!: ResizeObserver
    resizeEntry: ResizeObserverEntry = {
      contentRect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      target: this.$el
    }

    get topLeftCorner (): string {
      return `0,${this.mdCornerSize} 0,0 ${this.mdCornerSize},0`
    }

    get topRightCorner (): string {
      const x = this.unitLessContentWidth
      const x1 = x - parseInt(this.mdCornerSize.toString(), 10)

      return `${x1},0 ${x},0 ${x},${this.mdCornerSize}`
    }

    get bottomLeftCorner (): string {
      const y = this.unitLessContentHeight
      const y1 = y - parseInt(this.mdCornerSize.toString(), 10)

      return `0,${y1} 0,${y} ${this.mdCornerSize},${y}`
    }

    get bottomRightCorner (): string {
      const x = this.unitLessContentWidth
      const y = this.unitLessContentHeight
      const x1 = x - parseInt(this.mdCornerSize.toString(), 10)
      const y1 = y - parseInt(this.mdCornerSize.toString(), 10)

      return `${x1},${y} ${x},${y1} ${x},${y}`
    }

    get unitLessContentWidth ():number {
      return this.resizeEntry.contentRect.width
    }

    get unitLessContentHeight ():number {
      return this.resizeEntry.contentRect.height
    }

    get contentWidth (): string {
      return `${this.unitLessContentWidth}px`
    }

    get contentHeight (): string {
      return `${this.unitLessContentHeight}px`
    }

    get hasFilterSupport (): boolean {
      return mdSupportsCSSFilter('drop-shadow')
    }

    get isRadius (): boolean {
      return this.mdCornerType === 'radius'
    }

    get isSquare (): boolean {
      return this.mdCornerType === 'square'
    }

    get isScoop (): boolean {
      return this.mdCornerType === 'scoop'
    }

    get isNotch (): boolean {
      return this.mdCornerType === 'notch'
    }

    get renderSVGCorner (): boolean {
      return this.hasFilterSupport && (this.isSquare || this.isScoop || this.isNotch)
    }

    get notchPos (): number {
      if (this.mdNotchPos === 'end') {
        return this.unitLessContentWidth - parseInt(this.mdCornerSize.toString(), 10) - 16
      }

      return this.unitLessContentWidth / 2
    }

    get shapeClasses (): Array<string | object> {
      const elevation = parseInt(this.mdElevation.toString(), 10)
      let classes: Array<string | object> = [
        {
          'md-primary': this.mdPrimary,
          'md-secondary': this.mdSecondary
        }
      ]

      if (this.renderSVGCorner) {
        classes.push('md-shape-corner')

        if (elevation) {
          classes.push(`md-elevation-filter-${elevation}`)
        }
      } else {
        classes.push('md-shape-flat')

        if (elevation) {
          classes.push(`md-elevation-${elevation}`)
        }
      }

      return classes
    }

    get shapeStyles (): string {
      return this.isRadius ? `border-radius: ${this.mdCornerSize}px` : ''
    }

    @Watch('mdCornerType')
    onMdCornerTypeChange () {
      this.setupResizeObserver()
    }

    getElId (name: string, ref: boolean = false) {
      const id = `md-shape-form-${name}-${this.cornerId}`

      if (ref) {
        return `#${id}`
      }

      return id
    }

    setupResizeObserver () {
      if (this.renderSVGCorner) {
        this.resizeObserver = new ResizeObserver(([entry]) => {
          raf(() => {
            this.resizeEntry = {
              ...entry,
              contentRect: {
                ...entry.contentRect,
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
              }
            }
          })
        })

        this.resizeObserver.observe(this.$el)
      }
    }

    destroyResizeObserver () {
      if (this.renderSVGCorner) {
        this.resizeObserver.disconnect()
      }
    }

    mounted () {
      this.setupResizeObserver()
    }

    beforeDestroy () {
      this.destroyResizeObserver()
    }

  }

  export default MdShape
</script>

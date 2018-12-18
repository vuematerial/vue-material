<template>
  <MdShape
    v-if="!isDisabled"
    v-on="$listeners"
    v-bind="$attrs"
    :md-tag="mdTag"
    :class="rippleClasses"
    @mousedown.passive="onMouseDown"
    @mouseout.passive="onMouseOut"
    @mouseup.passive="onMouseUp"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <slot />

    <MdRippleWave
      v-for="({ style, classes }, id) in waves"
      :key="id"
      :md-style="style"
      :class="classes"
    />
  </MdShape>

  <MdShape
    v-else
    :md-tag="mdTag"
    class="md-ripple md-ripple-disabled"
  >
    <slot />
  </MdShape>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import raf from 'raf'
import isEmptyObject from 'is-empty-object'

import MdShape from '@vuematerial/shape'
import mdUuid from '@vuematerial/core/utils/mdUuid'
import MdRippleWave from './MdRippleWave.vue'

Vue.use(MdShape)

@Component({
  components: {
    MdRippleWave
  }
})
class MdRipple extends Vue {

  @Prop({ type: String, default: 'div' })
  mdTag!: string

  @Prop({ type: Boolean, default: false })
  mdDisabled!: boolean

  @Prop({ type: Boolean, default: false })
  mdFocused!: boolean

  @Prop({ type: Boolean, default: false })
  mdSelected!: boolean

  @Prop({ type: Boolean, default: false })
  mdActivated!: boolean

  @Prop({ type: Boolean, default: false })
  mdPressed!: boolean

  @Prop({ type: Boolean, default: false })
  mdDragged!: boolean

  @Prop({ type: Boolean, default: false })
  mdActive!: string

  @Prop({ type: Boolean, default: false })
  mdCentered!: string

  waves: object = {}
  lastWave: string = ''
  touched: boolean = false
  touchTimeout: number = 0
  pointerCoords = {
    pointer: {
      top: 0,
      left: 0
    },
    rect: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  }

  get isDisabled () {
    return !this.$material.ripple || this.mdDisabled
  }

  get rippleClasses () {
    return [
      'md-ripple',
      {
        'md-centered': this.mdCentered,
        'md-disabled': this.mdDisabled,
        'md-focused': this.mdFocused,
        'md-selected': this.mdSelected,
        'md-activated': this.mdActivated,
        'md-pressed': this.mdPressed,
        'md-dragged': this.mdDragged
      }
    ]
  }

  @Watch('mdActive')
  onMdActive (active: boolean) {
    if (active) {
      this.createWave(new MouseEvent(''), true)
      this.$emit('update:mdActive', false)
      this.$nextTick(() => this.onMouseUp())
    }
  }

  getWaveSize () {
    const { offsetWidth, offsetHeight } = this.$el

    return Math.floor(Math.max(offsetWidth, offsetHeight) * 0.6)
  }

  getWaveScale () {
    const { offsetWidth, offsetHeight } = this.$el

    return Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2)) + 20
  }

  getTransformStyle (scale: number, size: number) {
    const { pointer, rect } = this.pointerCoords

    const waveLeftCenter = rect.left + pointer.left
    const waveTopCenter = rect.top + pointer.top

    const surfaceLeftCenter = rect.left + rect.width / 2
    const surfaceTopCenter = rect.top + rect.height / 2

    const translateLeft = (surfaceLeftCenter - waveLeftCenter) / 2 - document.documentElement.scrollLeft
    const translateTop = (surfaceTopCenter - waveTopCenter) / 2 - document.documentElement.scrollTop

    return `scale(${scale / size}) translate(${translateLeft}px, ${translateTop}px)`
  }

  getSquareSize (size: number) {
    const side = `${size}px`

    return {
      width: side,
      height: side
    }
  }

  getCenteredStyles (size: number, scale: number) {
    const halfSize = `${-size / 2}px`

    return {
      ...this.getSquareSize(size),
      'margin-top': halfSize,
      'margin-left': halfSize,
      transform: this.getTransformStyle(scale, size)
    }
  }

  getNormalStyles (event: MouseEvent | TouchEvent, size: number, scale: number) {
    const rect = this.$el.getBoundingClientRect()
    let top = 0
    let left = 0

    if (event.type === 'touchstart') {
      top = (event as TouchEvent).changedTouches[0].pageY
      left = (event as TouchEvent).changedTouches[0].pageX
    } else {
      top = (event as MouseEvent).pageY
      left = (event as MouseEvent).pageX
    }

    this.pointerCoords = {
      rect,
      pointer: {
        top: top - rect.top,
        left: left - rect.left
      }
    }

    return {
      ...this.getSquareSize(size),
      top: `${this.pointerCoords.pointer.top - size / 2 - document.documentElement.scrollTop}px`,
      left: `${this.pointerCoords.pointer.left - size / 2 - document.documentElement.scrollLeft}px`,
      transform: this.getTransformStyle(scale, size)
    }
  }

  getWaveStyle (event: MouseEvent | TouchEvent, forceCentered: boolean) {
    const size = this.getWaveSize()
    const scale = this.getWaveScale()

    if (this.mdCentered || forceCentered) {
      return this.getCenteredStyles(size, scale)
    }

    return this.getNormalStyles(event, size, scale)
  }

  createWave (event: MouseEvent | TouchEvent, forceCentered: boolean) {
    const waveId = mdUuid()

    this.lastWave = waveId
    this.$set(this.waves, waveId, {
      style: this.getWaveStyle(event, forceCentered),
      classes: forceCentered && 'md-force-centered'
    })

    return waveId
  }

  clearWave (id: string) {
    this.$delete(this.waves, id)
  }

  onMouseDown (event: MouseEvent) {
    if (!this.touched) {
      raf(() => this.createWave(event, false))
    }
  }

  onMouseOut () {
    if (!isEmptyObject(this.waves)) {
      this.$set(this, 'waves', {})
    }
  }

  onMouseUp () {
    this.clearWave(this.lastWave)
  }

  onTouchStart (event: TouchEvent) {
    this.touched = true
    raf(() => this.createWave(event, false))
  }

  onTouchEnd () {
    const clearAllWaves = () => {
      this.touched = false
      this.$set(this, 'waves', {})
    }

    this.clearWave(this.lastWave)
    window.clearTimeout(this.touchTimeout)
    this.touchTimeout = window.setTimeout(clearAllWaves, 100)
  }

}

export default MdRipple
</script>

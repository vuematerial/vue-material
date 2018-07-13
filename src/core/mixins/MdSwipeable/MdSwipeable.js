export default {
  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 150
    },
    mdSwipeRestraint: {
      type: Number,
      default: 100
    },
    mdSwipeTime: {
      type: Number,
      default: 300
    }
  },
  data: () => ({
    swipeStart: false,
    swipeStartTime: null,
    swiped: null,
    touchPosition: {
      startX: 0,
      startY: 0
    }
  }),
  computed: {
    getSwipeElement () {
      return this.mdSwipeElement || window
    }
  },
  methods: {
    handleTouchStart (event) {
      this.touchPosition.startX = event.touches[0].screenX
      this.touchPosition.startY = event.touches[0].screenY
      this.swipeStartTime = new Date()

      this.swipeStart = true
    },
    /* eslint-disable complexity */
    handleTouchMove (event) {
      if (this.swipeStart) {
        const touchmoveX = event.touches[0].screenX
        const touchmoveY = event.touches[0].screenY

        const actualX = touchmoveX - this.touchPosition.startX
        const actualY = touchmoveY - this.touchPosition.startY

        const elapsedTime = new Date() - this.swipeStartTime

        if (elapsedTime <= this.mdSwipeTime) {
          if (Math.abs(actualX) >= this.mdSwipeThreshold && Math.abs(actualY) <= this.mdSwipeRestraint) {
            this.swiped = actualX < 0
              ? 'left'
              : 'right'
          } else if (Math.abs(actualY) >= this.mdSwipeThreshold && Math.abs(actualX) <= this.mdSwipeRestraint) {
            this.swiped = actualY < 0
              ? 'up'
              : 'down'
          }
        }
      }
    }, /* eslint-enable complexity */
    handleTouchEnd () {
      this.touchPosition = {
        startX: 0,
        startY: 0
      }
      this.swiped = null
      this.swipeStart = false
    },
  },
  mounted () {
    if (this.mdSwipeable) {
      this.getSwipeElement.addEventListener('touchstart', this.handleTouchStart, false)
      this.getSwipeElement.addEventListener('touchend', this.handleTouchEnd, false)
      this.getSwipeElement.addEventListener('touchmove', this.handleTouchMove, false)
    }
  },
  beforeDestroy () {
    if (this.mdSwipeable) {
      this.getSwipeElement.removeEventListener('touchstart', this.handleTouchStart, false)
      this.getSwipeElement.removeEventListener('touchend', this.handleTouchEnd, false)
      this.getSwipeElement.removeEventListener('touchmove', this.handleTouchMove, false)
    }
  }
}

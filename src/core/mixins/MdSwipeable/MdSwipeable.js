export default {
  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 50
    },
    mdSwipeRestraint: {
      type: Number,
      default: 100
    },
    mdSwipeTime: {
      type: Number,
      default: 400
    }
  },
  data: () => ({
    swipeStart: false,
    swipeElement: window,
    swipeStartTime: null,
    swiped: null,
    touchPosition: {
      startX: 0,
      startY: 0
    }
  }),
  methods: {
    handleTouchStart (event) {
      this.touchPosition.startX = event.touches[0].screenX
      this.touchPosition.startY = event.touches[0].screenY
      this.swipeStartTime = new Date()

      this.swipeStart = true
    },
    handleTouchMove (event) {
      if (!this.swipeStart) {
        return
      }

      const touchmoveX = event.touches[0].screenX
      const touchmoveY = event.touches[0].screenY

      const actualX = touchmoveX - this.touchPosition.startX
      const actualY = touchmoveY - this.touchPosition.startY

      const elapsedTime = new Date() - this.swipeStartTime

      if (elapsedTime <= this.mdSwipeTime) {
        if (Math.abs(actualX) >= this.mdSwipeThreshold && Math.abs(actualX) <= this.mdSwipeRestraint) {
          this.swiped = actualX < 0
            ? 'left'
            : 'right'
        } else if (Math.abs(actualY) >= this.mdSwipeThreshold && Math.abs(actualY) <= this.mdSwipeRestraint) {
          this.swiped = actualY < 0
            ? 'up'
            : 'down'
        }

      }
    },
    handleTouchEnd () {
      this.touchPosition = {
        startX: 0,
        startY: 0
      }
      this.swipeStart = false
    },
  },
  mounted () {
    if (this.mdSwipeable) {
      this.swipeElement.addEventListener('touchstart', this.handleTouchStart, false)
      this.swipeElement.addEventListener('touchend', this.handleTouchEnd, false)
      this.swipeElement.addEventListener('touchmove', this.handleTouchMove, false)
    }
  },
  beforeDestroy () {
    if (this.mdSwipeable) {
      this.swipeElement.removeEventListener('touchstart', this.handleTouchStart, false)
      this.swipeElement.removeEventListener('touchend', this.handleTouchEnd, false)
      this.swipeElement.removeEventListener('touchmove', this.handleTouchMove, false)
    }
  }
}

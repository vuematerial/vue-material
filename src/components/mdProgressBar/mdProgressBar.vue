<template>
    <div class="progress-bar" :style='style'></div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  const POSITION_TOP = 'top'
  const POSITION_BOTTOM = 'bottom'
  const POSITION_LEFT = 'left'
  const POSITION_RIGHT = 'right'
  const ZERO_POSITION = '0px'
  const TIMER_INTERVAL_POLLING = 100
  const FINISH_PERCENT = 95
  const MAX_PERCENT = 100
  const DEFAULT_TIME = 3000
  const UPDATE_PERCENT_TIMEOUT = 100
  const INCREASE_INITIAL = 10000

  export default {
    name: 'md-progress-bar',
    props: {
      color: {
        type: String,
        default: '#73ccec'
      },
      failedColor: {
        type: String,
        default: '#d32f2f'
      },
      thickness: {
        type: Number,
        default: 3
      },
      inverse: {
        type: Boolean,
        default: false
      },
      location: {
        type: String,
        default: 'top'
      },
      transitionSpeed: {
        type: Number,
        default: 0.2
      },
      transitionOpacitySpeed: {
        type: Number,
        default: 0.6
      },
      transitionTermination: {
        type: Number,
        default: 300
      }
    },
    data () {
      return {
        totalRequests: 0,
        completedRequests: 0,
        timer: null,
        show: false,
        canSuccess: false,
        percent: 0,
        increaseValue: 0
      }
    },
    beforeMount () {
      this.init()
    },
    computed: {
      style () {
        const style = {
          'background-color': this.canSuccess ? this.color : this.failedColor,
          'opacity': this.show ? 1 : 0
        }
        if (this.location === POSITION_TOP || this.location === POSITION_BOTTOM) {
          if (this.location === POSITION_TOP) {
            style.top = ZERO_POSITION
          } else {
            style.bottom = ZERO_POSITION
          }

          if (this.inverse) {
            style.right = ZERO_POSITION
          } else {
            style.left = ZERO_POSITION
          }
          style.width = `${this.percent}%`
          style.height = `${this.thickness}px`
          style.transition = `width ${this.transitionSpeed}s, opacity ${this.transitionOpacitySpeed}s`
        } else if (this.location === POSITION_LEFT || this.location === POSITION_RIGHT) {
          if (this.location === POSITION_LEFT) {
            style.left = ZERO_POSITION
          } else {
            style.right = ZERO_POSITION
          }

          if (this.inverse) {
            style.top = ZERO_POSITION
          } else {
            style.bottom = ZERO_POSITION
          }
          style.height = `${this.percent}%`
          style.width = `${this.thickness}px`
          style.transition = `height ${this.transitionSpeed}s, opacity ${this.transitionOpacitySpeed}s`
        }
        return style
      }
    },
    methods: {
      init () {
        axios.interceptors.request.use(request => {
          if (!('showProgressBar' in request)) {
            request.showProgressBar = true
          }
          if (request.showProgressBar) {
            this.start()
          }
          return request
        }, error => {
          this.fail()
          return Promise.reject(error)
        })

        axios.interceptors.response.use(response => {
          if (response.config.showProgressBar) {
            this.increaseByRequests()
          }
          return response
        }, error => {
          if (error.config && error.config.showProgressBar) {
            this.fail()
          }
          return Promise.reject(error)
        })
      },
      increaseByRequests () {
        setTimeout(() => {
          this.completedRequests += 1
          if (this.completedRequests >= this.totalRequests) {
            this.finish()
          } else {
            this.set((this.completedRequests / this.totalRequests))
          }
        }, this.latencyThreshold + this.delay)
      },
      start (time = DEFAULT_TIME) {
        this.show = true
        this.canSuccess = true
        this.increaseValue = INCREASE_INITIAL / Math.floor(time)
        this.timer = setInterval(() => {
          this.increase(this.increaseValue * Math.random())
          if (this.percent > FINISH_PERCENT) {
            this.finish()
          }
        }, TIMER_INTERVAL_POLLING)
      },
      set (amount) {
        this.show = true
        this.canSuccess = true
        this.percent = Math.floor(amount)
      },
      get () {
        return Math.floor(this.percent)
      },
      increase (amount) {
        this.percent += Math.floor(amount)
      },
      decrease (amount) {
        this.percent -= Math.floor(amount)
      },
      hide () {
        clearInterval(this.timer)
        this.timer = null
        setTimeout(() => {
          this.show = false
          Vue.nextTick(() => {
            setTimeout(() => {
              this.percent = 0
            }, UPDATE_PERCENT_TIMEOUT)
          })
        }, this.transitionTermination)
      },
      pause () {
        clearInterval(this.timer)
      },
      finish () {
        this.percent = MAX_PERCENT
        this.hide()
      },
      fail () {
        this.canSuccess = false
        this.percent = MAX_PERCENT
        this.hide()
      }
    }
  }
</script>
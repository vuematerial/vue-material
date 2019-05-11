<template>
  <md-popover :md-settings="popperSettings" md-active>
    <transition name="md-datepicker-dialog" appear @enter="setContentStyles" @after-leave="resetDate">
      <div class="md-datepicker-dialog" :class="[$mdActiveTheme]">
        <div class="md-datepicker-header">
          <span class="md-datepicker-year-select" :class="{ 'md-selected': currentView === 'year' }" @click="currentView = 'year'">{{ selectedYear }}</span>
          <div class="md-datepicker-date-select" :class="{ 'md-selected': currentView !== 'year' }" @click="currentView = 'day'">
            <strong class="md-datepicker-dayname">{{ shortDayName }}, </strong>
            <strong class="md-datepicker-monthname">{{ shortMonthName }}</strong>
            <strong class="md-datepicker-day">{{ currentDay }}</strong>
          </div>
        </div>

        <div class="md-datepicker-body">
          <transition name="md-datepicker-body-header">
            <div class="md-datepicker-body-header" v-if="currentView === 'day'">
              <md-button class="md-dense md-icon-button" @click="previousMonth">
                <md-arrow-left-icon />
              </md-button>

              <md-button class="md-dense md-icon-button" @click="nextMonth">
                <md-arrow-right-icon />
              </md-button>
            </div>
          </transition>

          <div class="md-datepicker-body-content" :style="contentStyles">
            <transition name="md-datepicker-view">
              <transition-group class="md-datepicker-panel md-datepicker-calendar" :class="calendarClasses" tag="div" name="md-datepicker-month" v-if="currentView === 'day'">
                <div class="md-datepicker-panel md-datepicker-month" v-for="month in [currentDate]" :key="month.getMonth()">
                  <md-button class="md-dense md-datepicker-month-trigger" @click="currentView = 'month'">{{ currentMonthName }} {{ currentYear }}</md-button>

                  <div class="md-datepicker-week">
                    <span v-for="(day, index) in locale.shorterDays" :key="index" v-if="index >= firstDayOfAWeek">{{ day }}</span>
                    <span v-for="(day, index) in locale.shorterDays" :key="index" v-if="index < firstDayOfAWeek">{{ day }}</span>
                  </div>

                  <div class="md-datepicker-days">
                    <span class="md-datepicker-empty" v-for="day in prefixEmptyDays" :key="'day-empty-'+day"></span>
                    <div class="md-datepicker-day" v-for="day in daysInMonth" :key="'day-'+day">
                      <span
                        class="md-datepicker-day-button"
                        :class="{
                          'md-datepicker-selected': isSelectedDay(day),
                          'md-datepicker-today': isToday(day),
                          'md-datepicker-disabled': isDisabled(day)
                        }"
                        @click="selectDate(day)">{{ day }}</span>
                    </div>
                  </div>
                </div>
              </transition-group>

              <div class="md-datepicker-panel md-datepicker-month-selector" v-else-if="currentView === 'month'">
                <md-button class="md-datepicker-year-trigger" @click="currentView = 'year'">{{ currentYear }}</md-button>
                <span
                  class="md-datepicker-month-button"
                  v-for="(month, index) in locale.months"
                  :class="{
                    'md-datepicker-selected': currentMonthName === month
                  }"
                  :key="month"
                  @click="switchMonth(index)">{{ month }}</span>
              </div>

              <keep-alive v-else-if="currentView === 'year'">
                <md-content class="md-datepicker-panel md-datepicker-year-selector md-scrollbar">
                  <span
                    class="md-datepicker-year-button"
                    v-for="year in availableYears"
                    :class="{
                      'md-datepicker-selected': currentYear === year
                    }"
                    :key="year"
                    @click="switchYear(year)">{{ year }}</span>
                </md-content>
              </keep-alive>
            </transition>
          </div>

          <md-dialog-actions class="md-datepicker-body-footer">
            <md-button class="md-primary" @click="onCancel">Cancel</md-button>
            <md-button v-if="!mdImmediately" class="md-primary" @click="onConfirm">Ok</md-button>
          </md-dialog-actions>
        </div>
      </div>
    </transition>
  </md-popover>
</template>

<script>
  import addMonths from 'date-fns/addMonths'
  import startOfMonth from 'date-fns/startOfMonth'
  import subMonths from 'date-fns/subMonths'
  import getDate from 'date-fns/getDate'
  import getDay from 'date-fns/getDay'
  import getDaysInMonth from 'date-fns/getDaysInMonth'
  import getMonth from 'date-fns/getMonth'
  import getYear from 'date-fns/getYear'
  import isEqual from 'date-fns/isEqual'
  import isSameDay from 'date-fns/isSameDay'
  import setDate from 'date-fns/setDate'
  import setMonth from 'date-fns/setMonth'
  import setYear from 'date-fns/setYear'

  import MdComponent from 'core/MdComponent'
  import MdPopover from 'components/MdPopover/MdPopover'
  import MdArrowRightIcon from 'core/icons/MdArrowRightIcon'
  import MdArrowLeftIcon from 'core/icons/MdArrowLeftIcon'
  import MdDialog from 'components/MdDialog/MdDialog'

  const daysInAWeek = 7

  const getElements = (el, selector) => {
    if (el && el.querySelector) {
      return el.querySelectorAll(selector)
    }

    return false
  }

  export default new MdComponent({
    name: 'MdDatepickerDialog',
    components: {
      MdPopover,
      MdArrowRightIcon,
      MdArrowLeftIcon,
      MdDialog,
    },
    props: {
      mdDate: Date,
      mdDisabledDates: [Array, Function],
      mdImmediately: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      currentDate: null,
      selectedDate: null,
      showDialog: false,
      monthAction: null,
      currentView: 'day',
      contentStyles: {},
      availableYears: null
    }),
    computed: {
      firstDayOfAWeek () {
        // normalize
        let firstDayOfAWeek = Number(this.locale.firstDayOfAWeek)
        if (Number.isNaN(firstDayOfAWeek) || !Number.isFinite(firstDayOfAWeek)) {
          return 0
        }
        firstDayOfAWeek = Math.floor(firstDayOfAWeek) % daysInAWeek
        firstDayOfAWeek += firstDayOfAWeek < 0 ? daysInAWeek : 0
        return firstDayOfAWeek
      },
      locale() {
        return this.$material.locale
      },
      popperSettings () {
        return {
          placement: 'bottom-start',
          modifiers: {
            keepTogether: {
              enabled: true
            },
            flip: {
              enabled: false
            }
          }
        }
      },
      calendarClasses () {
        if (this.monthAction === 'next') {
          return 'md-next'
        }

        return 'md-previous'
      },
      firstDayOfMonth () {
        return startOfMonth(this.currentDate).getDay()
      },
      prefixEmptyDays () {
        let prefixEmptyDays = this.firstDayOfMonth - this.firstDayOfAWeek
        prefixEmptyDays += prefixEmptyDays < 0 ? daysInAWeek : 0
        return prefixEmptyDays
      },
      daysInMonth () {
        return getDaysInMonth(this.currentDate)
      },
      currentDay () {
        if (this.selectedDate) {
          return getDate(this.selectedDate)
        }

        return getDate(this.currentDate)
      },
      currentMonth () {
        return getMonth(this.currentDate)
      },
      currentMonthName () {
        return this.locale.months[this.currentMonth]
      },
      currentYear () {
        return getYear(this.currentDate)
      },
      selectedYear () {
        if (this.selectedDate) {
          return getYear(this.selectedDate)
        }

        return getYear(this.currentDate)
      },
      shortDayName () {
        if (this.selectedDate) {
          return this.locale.shortDays[getDay(this.selectedDate)]
        }

        return this.locale.shortDays[getDay(this.currentDate)]
      },
      shortMonthName () {
        if (this.selectedDate) {
          return this.locale.shortMonths[getMonth(this.selectedDate)]
        }

        return this.locale.shortMonths[getMonth(this.currentDate)]
      }
    },
    watch: {
      mdDate () {
        this.currentDate = this.mdDate || new Date()
        this.selectedDate = this.mdDate
      },
      currentDate (next, previous) {
        this.$nextTick().then(() => {
          if (previous) {
            this.setContentStyles()
          }
        })
      },
      currentView () {
        this.$nextTick().then(() => {
          if (this.currentView === 'year') {
            const activeYear = getElements(this.$el, '.md-datepicker-year-button.md-datepicker-selected')

            if (activeYear.length) {
              activeYear[0].scrollIntoView({
                behavior: 'instant',
                block: 'center',
                inline: 'center'
              })
            }
          }
        })
      }
    },
    methods: {
      setContentStyles () {
        const months = getElements(this.$el, '.md-datepicker-month')

        if (months.length) {
          const nextMonth = months[months.length - 1]

          this.contentStyles = {
            height: nextMonth.offsetHeight + 10 + 'px'
          }
        }
      },
      setAvailableYears () {
        const { startYear, endYear } = this.locale
        let counter = startYear
        let years = []

        while (counter <= endYear) {
          years.push(counter++)
        }

        this.availableYears = years
      },
      handleDisabledDateByArray (date) {
        return this.mdDisabledDates.some(disabledDate => isSameDay(disabledDate, date))
      },
      isDisabled (day) {
        if (this.mdDisabledDates) {
          const targetDate = setDate(this.currentDate, day)

          if (Array.isArray(this.mdDisabledDates)) {
            return this.handleDisabledDateByArray(targetDate)
          } else if (typeof this.mdDisabledDates === 'function') {
            return this.mdDisabledDates(targetDate)
          }
        }
      },
      isSelectedDay (day) {
        return isEqual(this.selectedDate, setDate(this.currentDate, day))
      },
      isToday (day) {
        return isSameDay(new Date(), setDate(this.currentDate, day))
      },
      previousMonth () {
        this.monthAction = 'previous'
        this.currentDate = subMonths(this.currentDate, 1)
      },
      nextMonth () {
        this.monthAction = 'next'
        this.currentDate = addMonths(this.currentDate, 1)
      },
      switchMonth (index) {
        this.currentDate = setMonth(this.currentDate, index)
        this.currentView = 'day'
      },
      switchYear (year) {
        this.currentDate = setYear(this.currentDate, year)
        this.currentView = 'month'
      },
      selectDate (day) {
        this.currentDate = setDate(this.currentDate, day)
        this.selectedDate = this.currentDate

        if (this.mdImmediately) {
          this.$emit('update:mdDate', this.selectedDate)
          this.closeDialog()
        }
      },
      closeDialog () {
        this.$emit('md-closed')
      },
      onClose () {
        this.closeDialog()
      },
      onCancel () {
        this.closeDialog()
      },
      onConfirm () {
        this.$emit('update:mdDate', this.selectedDate)
        this.closeDialog()
      },
      resetDate () {
        this.currentDate = this.mdDate || new Date()
        this.selectedDate = this.mdDate
        this.currentView = 'day'
      }
    },
    created () {
      this.setAvailableYears()
      this.resetDate()
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  $md-calendar-width: 320px;
  $md-calendar-mobile-width: 296px;

  .md-datepicker-dialog {
    @include md-elevation(24);
    display: flex;
    overflow: hidden;
    z-index: 110;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    transform-origin: top left;
    transition: opacity .2s $md-transition-stand-timing,
                transform .35s $md-transition-stand-timing;
    will-change: opacity, transform, left, top;

    @include md-layout-xsmall {
      flex-direction: column;
      top: 50% !important;
      left: 50% !important;
      transform: translate3D(-50%, -50%, 0);
      transform-origin: center center;
      position: fixed !important;
    }
  }

  .md-datepicker-dialog-leave-active {
    opacity: 0;
  }

  .md-datepicker-dialog-enter {
    opacity: 0;
    transform: scale(.9);

    @include md-layout-xsmall {
      transform: translate3D(-50%, -50%, 0) scale(.9);
    }

    .md-datepicker-body {
      .md-datepicker-calendar {
        opacity: 0;
        transform: translate3D(0, 10%, 0);
      }
    }
  }

  .md-datepicker-header {
    min-width: 150px;
    padding: 16px;

    @include md-layout-xsmall {
      min-width: auto;
      padding: 16px 20px;
    }

    .md-datepicker-year-select {
      cursor: pointer;
      opacity: .54;
      transition: opacity .3s $md-transition-default-timing;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: .01em;
      line-height: 24px;
    }

    .md-datepicker-date-select {
      cursor: pointer;
      opacity: .54;
      transition: opacity .3s $md-transition-default-timing;
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 0;
      line-height: 1.2em;
    }

    .md-datepicker-dayname {
      display: block;

      @include md-layout-xsmall {
        display: inline-block;
      }
    }

    .md-selected {
      opacity: 1;
    }
  }

  .md-datepicker-body {
    width: $md-calendar-width;
    position: relative;
    overflow: hidden;
    transition: width .3s $md-transition-stand-timing;
    will-change: width;

    @include md-layout-xsmall {
      width: $md-calendar-mobile-width;
    }

    .md-button {
      margin: 0;
    }
  }

  .md-datepicker-body-header {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    pointer-events: none;

    &:before,
    &:after {
      width: 48px;
      height: 48px;
      position: absolute;
      top: 0;
      z-index: 2;
      pointer-events: none;
      content: " ";
    }

    &:after {
      left: 0;
    }

    &:before {
      right: 0;
    }

    .md-button {
      pointer-events: auto;
      z-index: 3;
    }
  }

  .md-datepicker-body-header-enter,
  .md-datepicker-body-header-leave-active {
    .md-button:first-child {
      transform: translate3d(-150%, 0, 0);
    }

    .md-button:last-child {
      transform: translate3d(150%, 0, 0);
    }
  }

  .md-datepicker-body-content {
    overflow: hidden;
    transition: height .35s $md-transition-default-timing;
    will-change: height;
  }

  .md-datepicker-panel {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: .35s $md-transition-default-timing;
    transition-property: transform, opacity;
    will-change: transform, opacity;
  }

  .md-datepicker-calendar {
    &.md-datepicker-view-enter,
    &.md-datepicker-view-leave-active {
      transform: translate3d(0, 100%, 0);
    }

    &.md-previous {
      .md-datepicker-month-enter {
        transform: translate3D(-100%, 0, 0);

        .md-datepicker-month-trigger {
          transform: translate3D(-30%, 0, 0);
        }
      }

      .md-datepicker-month-leave-active {
        transform: translate3D(100%, 0, 0);
      }
    }

    &.md-next {
      .md-datepicker-month-enter {
        transform: translate3D(100%, 0, 0);

        .md-datepicker-month-trigger {
          transform: translate3D(30%, 0, 0);
        }
      }

      .md-datepicker-month-leave-active {
        transform: translate3D(-100%, 0, 0);
      }
    }
  }

  .md-datepicker-month {
    top: 8px;
    bottom: auto;
    flex-direction: column;
    transition: .35s $md-transition-default-timing;
    transition-property: transform, opacity;
    will-change: transform, opacity;

    @include md-layout-xsmall {
      padding: 0 6px;
    }

    .md-datepicker-month-trigger {
      min-height: 32px;
      margin: 0 46px 10px;
      flex: 1;
      border-radius: 0;
      transition: transform .45s $md-transition-default-timing;
      will-change: transform;
    }
  }

  .md-datepicker-week {
    display: flex;
    align-items: center;

    span {
      flex: 1;
      font-size: 12px;
      text-align: center;
    }
  }

  .md-datepicker-days {
    $md-day-width: 100%;

    display: flex;
    flex-wrap: wrap;

    .md-datepicker-empty,
    .md-datepicker-day {
      margin: 1px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 1 $md-day-width / 7;
    }

    .md-datepicker-day-button {
      $width: 30px;

      width: $width;
      min-width: $width;
      height: $width;
      cursor: pointer;
      border-radius: $width;
      transition: .3s $md-transition-default-timing;
      line-height: $width;
      text-align: center;
    }

    .md-datepicker-selected {
      font-weight: 700;
    }

    .md-datepicker-today {
      font-weight: 700;
    }

    .md-datepicker-disabled {
      pointer-events: none;
    }
  }

  .md-datepicker-month-selector {
    padding: 6px 8px 10px;
    flex-wrap: wrap;
    bottom: auto;
    transition: .35s $md-transition-default-timing;
    transition-property: transform, opacity;
    will-change: transform, opacity;

    &.md-datepicker-view-enter,
    &.md-datepicker-view-leave-active {
      transform: translate3d(0, -100%, 0);
    }

    .md-datepicker-year-trigger {
      width: 100%;
      margin: 0 0 8px;
      flex: 1 1 100%;
    }
  }

  .md-datepicker-month-button,
  .md-datepicker-year-button {
    height: 36px;
    margin: 3px 0;
    cursor: pointer;
    transition: .3s $md-transition-default-timing;
    line-height: 36px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }

  .md-datepicker-month-button {
    flex: 1 1 33.3333%;
    border-radius: 2px;
    font-size: 13px;
  }

  .md-datepicker-year-selector {
    flex-direction: column;
    overflow: auto;
    bottom: 52px;
    border-bottom: 1px solid;

    &.md-datepicker-view-enter,
    &.md-datepicker-view-leave-active {
      transform: translate3d(0, -100%, 0);
    }

    .md-button {
      min-height: 36px;
    }
  }

  .md-datepicker-year-button {
    font-size: 16px;

    &.md-datepicker-selected {
      font-size: 24px;
    }
  }
</style>

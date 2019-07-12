<template>
  <div class="md-datepicker-inline" :class="[$mdActiveTheme]">
    <div class="md-datepicker-header">
      <span class="md-datepicker-year-select" :class="{ 'md-selected': currentView === 'year' }"
            @click="setView('year')">{{ selectedYear }}</span>
      <div class="md-datepicker-date-select" :class="{ 'md-selected': currentView !== 'year' }"
           @click="setView('day')">
        <strong class="md-datepicker-dayname">{{ shortDayName }}, </strong>
        <strong class="md-datepicker-monthname">{{ shortMonthName }}</strong>
        <strong class="md-datepicker-day">{{ currentDay }}</strong>
      </div>
    </div>
    <div class="md-datepicker-body">
      <transition name="md-datepicker-body-header">
        <div class="md-datepicker-body-header" v-if="currentView === 'day'">
          <md-button class="md-dense md-icon-button" @click="previousMonth">
            <md-arrow-left-icon/>
          </md-button>

          <md-button class="md-dense md-icon-button" @click="nextMonth">
            <md-arrow-right-icon/>
          </md-button>
        </div>
      </transition>

      <div class="md-datepicker-body-content" :style="contentStyles">
        <transition :name="`md-datepicker-view-${transitionDirection}`">
          <transition-group class="md-datepicker-view md-datepicker-panel md-datepicker-calendar"
                            :class="calendarClasses" tag="div"
                            name="md-datepicker-month" v-if="currentView === 'day'">
            <div class="md-datepicker-panel md-datepicker-month" v-for="month in [currentDate]" :key="month.getMonth()">
              <md-button class="md-dense md-datepicker-month-trigger" @click="setView('month')">
                {{ currentMonthName }} {{ currentYear }}
              </md-button>

              <div class="md-datepicker-week">
                <span v-for="(day, index) in locale.shorterDays" :key="index"
                      v-if="index >= firstDayOfAWeek">{{ day }}</span>
                <span v-for="(day, index) in locale.shorterDays" :key="index"
                      v-if="index < firstDayOfAWeek">{{ day }}</span>
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
                        @click="onClickDay($event, day)">{{ day }}</span>
                </div>
              </div>
            </div>
          </transition-group>

          <div class="md-datepicker-view md-datepicker-panel md-datepicker-month-selector"
               v-else-if="currentView === 'month'">
            <md-button class="md-datepicker-year-trigger" @click="setView('year')">{{ currentYear }}</md-button>
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
            <md-content class="md-datepicker-view md-datepicker-panel md-datepicker-year-selector md-scrollbar">
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
    </div>
  </div>
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
  import MdArrowRightIcon from 'core/icons/MdArrowRightIcon'
  import MdArrowLeftIcon from 'core/icons/MdArrowLeftIcon'

  const daysInAWeek = 7

  const viewsOrder = ['day', 'month', 'year']

  const getElements = (el, selector) => {
    if (el && el.querySelector) {
      return el.querySelectorAll(selector)
    }

    return false
  }

  export default new MdComponent({
    name: 'MdDatepickerInline',
    components: {
      MdArrowRightIcon,
      MdArrowLeftIcon,
    },
    props: {
      mdDate: Date,
      mdCurrentDate: Date,
      mdDisabledDates: [Array, Function],
    },
    data: () => ({
      currentDate: null,
      monthAction: null,
      currentView: 'day',
      contentStyles: {},
      transitionDirection: 'to-bottom',
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
      locale () {
        return this.$material.locale
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
        if (this.mdDate) {
          return getDate(this.mdDate)
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
        if (this.mdDate) {
          return getYear(this.mdDate)
        }

        return getYear(this.currentDate)
      },
      shortDayName () {
        if (this.mdDate) {
          return this.locale.shortDays[getDay(this.mdDate)]
        }

        return this.locale.shortDays[getDay(this.currentDate)]
      },
      shortMonthName () {
        if (this.mdDate) {
          return this.locale.shortMonths[getMonth(this.mdDate)]
        }

        return this.locale.shortMonths[getMonth(this.currentDate)]
      },
    },
    methods: {
      setView (view) {
        if (this.currentView !== view) {
          this.transitionDirection = viewsOrder.indexOf(this.currentView) - viewsOrder.indexOf(view) > 0
            ? 'to-top'
            : 'to-bottom'

          this.currentView = view
        }
      },
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
        const {startYear, endYear} = this.locale
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
        return isSameDay(this.mdDate, setDate(this.currentDate, day))
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
        this.setView('day')
      },
      switchYear (year) {
        this.currentDate = setYear(this.currentDate, year)
        this.setView('month')
      },
      onClickDay ($event, day) {
        this.$emit('md-click:day', $event)
        this.selectDate(day)
      },
      selectDate (day) {
        this.currentDate = setDate(this.currentDate, day)
        this.$emit('update:mdDate', new Date(this.currentDate.getTime()))
      },
      resetDate () {
        this.currentDate = this.mdCurrentDate || new Date()
        this.setView('day')
      }
    },
    created () {
      this.setAvailableYears()
      this.resetDate()
    },
    mounted () {
      this.setContentStyles()
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "./mixins";

  .md-datepicker-inline {
    display: flex;
    overflow: hidden;
    z-index: 110;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    transform-origin: top left;
    flex-shrink: 0;
    transition: opacity .2s $md-transition-stand-timing,
    transform .35s $md-transition-stand-timing;
    will-change: opacity, transform, left, top;
    @include md-datepicker-layout;
  }

  .md-datepicker-header {
    min-width: 150px;
    padding: 16px;

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
    }

    .md-selected {
      opacity: 1;
    }
  }

  .md-datepicker-body {
    position: relative;
    overflow: hidden;
    transition: width .3s $md-transition-stand-timing;
    will-change: width;

    .md-button {
      margin: 0;
    }
  }

  .md-datepicker-body-header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }

  .md-datepicker-view {
    transition: 0.35s $md-transition-default-timing;
    transition-property: transform;
    will-change: transform;
    width: 100%;

    transform: translate3d(0, 0, 0);

    &.md-datepicker-view-to-top-enter-active,
    &.md-datepicker-view-to-top-leave-active,
    &.md-datepicker-view-to-bottom-enter-active,
    &.md-datepicker-view-to-bottom-leave-active {
      position: absolute;
      top: 0;
    }

    &.md-datepicker-view-to-top-enter {
      transform: translate3d(0, 100%, 0);
    }

    &.md-datepicker-view-to-top-leave-to {
      transform: translate3d(0, -100%, 0);
    }

    &.md-datepicker-view-to-top-enter-to,
    &.md-datepicker-view-to-top-leave {
      transform: translate3d(0, 0, 0);
    }

    &.md-datepicker-view-to-bottom-enter {
      transform: translate3d(0, -100%, 0);
    }

    &.md-datepicker-view-to-bottom-leave-to {
      transform: translate3d(0, 100%, 0);
    }

    &.md-datepicker-view-to-bottom-enter-to,
    &.md-datepicker-view-to-bottom-leave {
      transform: translate3d(0, 0, 0);
    }
  }

  .md-datepicker-calendar {

    .md-datepicker-month-enter-active,
    .md-datepicker-month-leave-active {
      position: absolute;
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
    bottom: auto;
    flex-direction: column;
    transition: 0.35s $md-transition-default-timing;
    transition-property: transform, opacity;
    will-change: transform, opacity;

    .md-datepicker-month-trigger {
      min-height: 48px;
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

    .md-button {
      min-height: 36px;
    }
  }

  .md-content.md-datepicker-year-selector {
    background-color: transparent;
    border-bottom: none;
    height: 100%;
  }

  .md-datepicker-year-button {
    font-size: 16px;

    &.md-datepicker-selected {
      font-size: 24px;
    }
  }

  .md-field.md-has-datepicker {
    .md-menu {
      width: 100%;
      display: flex;
    }
  }

  .md-menu-content.md-datepicker-popup {
    min-width: unset;
    max-width: unset;
    max-height: unset;
    background-color: transparent;
    overflow: hidden;

    @include md-layout-xsmall {

      &.md-menu-content-enter {
        opacity: 0;
        transform: translate3D(-50%, -50%, 0) scale(.9);
      }
      background-color: unset;
      flex-direction: column;
      top: 50% !important;
      left: 50% !important;
      transform: translate3D(-50%, -50%, 0);
      transform-origin: center center;
      position: fixed !important;
      transition: opacity .2s $md-transition-stand-timing, transform .35s $md-transition-stand-timing;
    }

    .md-list {
      padding: 0;
    }
  }
</style>

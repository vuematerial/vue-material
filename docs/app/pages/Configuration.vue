<template>
  <page-container centered :title="$t('pages.configuration.title')">
    <div class="page-container-section">
      <h2 class="md-headline">Global configuration</h2>

      <p>Vue Material is providing some global options for customization. These options are reactive, you can change it anytime, anywhere:</p>
      <code-example :title="$t('pages.configuration.viaVueGlobalObject')">
        import Vue from 'vue'

        // change single option
        Vue.material.locale.dateFormat = 'DD/MM/YYYY'

        // change multiple options
        Vue.material = {
          ...Vue.material,
          locale: {
            ...Vue.material.locale,
            dateFormat: 'DD/MM/YYYY',
            firstDayOfAWeek: 1
          }
        }
      </code-example>
      <p>or you can change it via <code>this.$material</code> in a vue component:</p>
      <code-example :title="$t('pages.configuration.inVueComponents')">
        export default {
          name: 'ChangeDateFormat',
          computed: {
            dateFormat: {
              get () {
                return this.$material.locale.dateFormat
              },
              set (val) {
                this.$material.locale.dateFormat = val
              }
            }
          }
        }
      </code-example>

      <p>Here are options Vue Material provide for customization:</p>

      <code-example :title="$t('pages.configuration.options')">
        {
          // activeness of ripple effect
          ripple: true,

          theming: {},
          locale: {
            // range for datepicker
            startYear: 1900,
            endYear: 2099,

            // date format for date picker
            dateFormat: 'YYYY-MM-DD',

            // i18n strings
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],

            // `0` stand for Sunday, `1` stand for Monday
            firstDayOfAWeek: 0
          }
        }
      </code-example>
    </div>

  </page-container>
</template>

<script>
  export default {
    name: 'Configuration'
  }
</script>

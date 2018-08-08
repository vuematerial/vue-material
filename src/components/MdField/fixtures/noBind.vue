<template>
  <div>
    <h1>Non binded empty</h1>
    <md-field>
      <label>Initial Value</label>
      <md-input ref="nondatabinded" @input="handleInputNoBind"></md-input>
    </md-field>
  </div>
</template>

<script>
import MdField from '../MdField.vue'
export default {
  name: 'TextFields',
  components: {
    MdField
  },
  data() {
    return {
      noBind: ''
    }
  },
  methods: {
    handleInputNoBind(value) {
      this.noBind = value
    }
  },
  mounted () {
    const nonDataBinded = this.$refs.nondatabinded
    nonDataBinded.model = "Not data binded"
  }
}
</script>

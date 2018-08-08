<template>
  <div>
    <h1>MdInput: {{executions}}</h1>
    <md-field>
      <label>Initial Value</label>
      <md-input ref="upstream" v-model="initial" @input="handleInput"></md-input>
    </md-field>
    <button @click="setValue">click</button>
    <div>result: {{inputValue}}</div>
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
      executions: 0,
      initial: '',
      inputValue: ''
    }
  },
  methods: {
    setValue() {
      //console.log(`setValue set ${Date.now() - start}`)
      this.executions++
      this.initial = 'upstream'
    },
    handleInput(value) {
      //console.log(`handleInput set ${val} ${Date.now() - start}`)
      this.executions++
      this.inputValue = value
    }
  },
  mounted () {
    const upstream = this.$refs.upstream
    upstream.model = "bad value"
    this.setValue()
  }
}
</script>

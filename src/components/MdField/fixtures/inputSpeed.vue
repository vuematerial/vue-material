<template>
   <form @submit.prevent="validateTodo">
     <div>To-Do next: {{form.server}}</div>
      <md-field>
        <label for="todo">md-input</label>
        <md-input ref="autocorrect" v-model="form.todo" />
      </md-field>
      <button type="submit">Create Todo</button>
  </form>
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
      form: {
        todo: '',
        server: ''
      }
    }
  },
  methods: {
    validateTodo() {
      this.form.server = this.form.todo
      this.form.todo = ''
    }
  },
  mounted () {
    const autocorrect = this.$refs.autocorrect
    autocorrect.model = "autocorrect"
    this.validateTodo()
  }
}
</script>

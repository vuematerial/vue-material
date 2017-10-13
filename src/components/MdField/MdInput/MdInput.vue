<template>
  <input
    class="md-input"
    v-bind="attributes"
    v-on="$listeners"
    v-model="content"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @change="onInput">
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/utils/MdUuid'
  import MdFieldMixin from '../MdFieldMixin'

  export default new MdComponent({
    name: 'MdInput',
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    props: {
      id: {
        type: String,
        default: () => 'md-input-' + MdUuid()
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      toggleType () {
        return this.MdField.togglePassword
      }
    },
    watch: {
      type (type) {
        this.setPassword()
      },
      toggleType (toggle) {
        if (toggle) {
          this.setTypeText()
        } else {
          this.setTypePassword()
        }
      }
    },
    methods: {
      setPassword (state) {
        this.MdField.password = state
      },
      methods: {
        setPassword () {
          this.MdField.password = this.type === 'password'
        },
        setTypePassword () {
          this.$el.type = 'password'
        },
        setTypeText () {
          this.$el.type = 'text'
        }
      },
      created () {
        this.setPassword()
      }
    },
    created () {
      this.setPassword(this.type === 'password')
    },
    beforeDestroy () {
      this.setPassword(false)
    }
  })
</script>

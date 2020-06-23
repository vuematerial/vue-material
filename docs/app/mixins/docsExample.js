export default {
  computed: {
    examples () {
      console.log(this.$options.examples);
      // return {};
      return this.$options.examples
    }
  }
}

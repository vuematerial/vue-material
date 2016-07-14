export default {
  props: {
    mdShift: Boolean
  },
  computed: {
    classes() {
      return this.mdShift && 'md-shift';
    }
  }
};


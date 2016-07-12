export default {
  props: {
    mdShift: Boolean,
    mdActive: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classes() {
      return this.mdShift && 'md-shift';
    }
  }
};


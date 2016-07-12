export default {
  props: {
    mdIcon: String,
    disabled: Boolean
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    setActive() {
      this.$parent.$children.forEach((item) => {
        item.active = false;
      });

      this.active = true;
    }
  }
};


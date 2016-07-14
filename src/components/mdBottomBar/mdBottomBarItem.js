export default {
  props: {
    mdIcon: String
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
  },
  ready() {
    if (this.$el.classList.contains('md-active')) {
      this.active = true;
    }
  }
};


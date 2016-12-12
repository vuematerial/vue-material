export default {
  data: () => ({
    closestThemedParent: false
  }),
  methods: {
    getClosestThemedParent($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false;
      }

      if ($parent.name === 'md-theme' && $parent.mdName) {
        return $parent;
      }

      return this.getClosestThemedParent($parent.$parent);
    }
  },
  computed: {
    themeClass() {
      return 'md-theme-' + (this.closestThemedParent.mdName || 'default');
    }
  },
  mounted() {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent);
  }
};

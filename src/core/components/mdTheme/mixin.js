import Vue from 'vue';

export default {
  props: {
    mdTheme: String
  },
  data: () => ({
    closestThemedParent: false
  }),
  methods: {
    getClosestThemedParent($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false;
      }

      if ($parent.mdTheme || $parent.mdName) {
        return $parent;
      }

      return this.getClosestThemedParent($parent.$parent);
    }
  },
  computed: {
    themeClass() {
      if (this.mdTheme) {
        return 'md-theme-' + this.mdTheme;
      }

      let theme = this.closestThemedParent.mdTheme;

      if (!theme) {
        theme = this.closestThemedParent.mdName;
      }

      return 'md-theme-' + (theme || Vue.material.currentTheme);
    }
  },
  mounted() {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent);

    if (!Vue.material.currentTheme) {
      Vue.material.setCurrentTheme('default');
    }
  }
};

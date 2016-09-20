<template>
  <button type="button" class="md-bottom-bar-item" :class="classes" v-md-ink-ripple @click="setActive">
    <md-icon>{{ mdIcon }}</md-icon>

    <span class="md-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      mdIcon: String,
      mdActive: Boolean
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          'md-active': this.active
        };
      }
    },
    watch: {
      mdActive(active) {
        this.setActive(active);
      }
    },
    methods: {
      setActive(active) {
        this.$parent.$children.forEach((item) => {
          item.active = false;
        });

        this.active = !!active;

        this.$emit('click');
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-bottom-bar')) {
        this.$destroy();

        throw new Error('You should wrap the md-bottom-bar-item in a md-bottom-bar');
      }

      if (this.mdActive) {
        this.active = true;
      }
    }
  };
</script>

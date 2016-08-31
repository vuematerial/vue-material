<template>
  <button class="md-bottom-bar-item" :class="{ 'md-active': active }" v-md-ink-ripple @click="setActive">
    <md-icon>{{ mdIcon }}</md-icon>

    <span class="md-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
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
    mounted() {
      if (this.$el.classList.contains('md-active')) {
        this.active = true;
      }
    }
  };
</script>

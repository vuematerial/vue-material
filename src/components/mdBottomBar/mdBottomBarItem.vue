<template>
  <a :href="href" class="md-bottom-bar-item" :class="classes" :disabled="disabled" @click="setActive" v-if="href">
    
    <md-icon v-if="mdIcon">{{ mdIcon }}</md-icon>
    <md-icon v-if="mdSrc" :md-src="mdSrc"></md-icon>
    <md-icon v-if="mdIconset" :md-iconset="mdIconset"></md-icon>

    <md-ink-ripple :md-disabled="disabled" />

    <span class="md-text">
      <slot></slot>
    </span>
  </a>

  <button type="button" class="md-bottom-bar-item" :class="classes" :disabled="disabled" @click="setActive" v-else>
    
    <md-icon v-if="mdIcon">{{ mdIcon }}</md-icon>
    <md-icon v-if="mdSrc" :md-src="mdSrc"></md-icon>
    <md-icon v-if="mdIconset" :md-iconset="mdIconset"></md-icon>
    
    <md-ink-ripple :md-disabled="disabled" />

    <span class="md-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      mdSrc: String,
      mdIcon: String,
      mdIconset: String,
      mdActive: Boolean,
      disabled: String,
      href: String
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
        if (active) {
          this.$parent.setActive(this);
        }
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

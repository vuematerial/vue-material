<template>
  <div class="md-step-header">
    <md-icon class="md-step-icon">{{ mdIcon }}</md-icon>
    <span class="md-step-title"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    props: {
      mdIcon: String
    }
  };
</script>

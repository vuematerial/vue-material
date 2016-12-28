<template>
  <img :src="imageSrc" class="md-image">
</template>

<style lang="scss" src="./mdImage.scss"></style>

<script>
  export default {
    props: {
      mdSrc: String
    },
    data: () => ({
      imageSrc: null
    }),
    watch: {

    },
    computed: {
      classes() {
        return {

        };
      }
    },
    methods: {

    },
    created() {
      console.log(this.mdSrc);
    }
  };
</script>

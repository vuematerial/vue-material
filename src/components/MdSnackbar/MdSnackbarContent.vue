<template functional>
  <transition name="md-snackbar" appear>
    <div class="md-snackbar" :class="props.mdClasses">
      <div class="md-snackbar-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MdSnackbarContent',
    props: {
      mdClasses: Array
    }
  }
</script>

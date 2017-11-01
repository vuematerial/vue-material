<template functional>
  <transition name="md-snackbar" appear>
    <keep-alive>
      <div class="md-snackbar" :class="props.mdClasses">
        <div class="md-snackbar-content">
          <slot />
        </div>
      </div>
    </keep-alive>
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

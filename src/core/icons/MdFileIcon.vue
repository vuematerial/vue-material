<template>
  <md-icon class="md-icon-image" v-once>
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </md-icon>
</template>

<script>
  import MdIcon from 'components/MdIcon/MdIcon'

  export default {
    name: 'MdFileIcon',
    components: {
      MdIcon
    }
  }
</script>

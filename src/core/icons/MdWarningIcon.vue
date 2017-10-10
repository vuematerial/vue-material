<template>
  <md-icon class="md-icon-image" v-once>
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
  </md-icon>
</template>

<script>
  import MdIcon from 'components/MdIcon/MdIcon'

  export default {
    name: 'MdWarningIcon',
    components: {
      MdIcon
    }
  }
</script>

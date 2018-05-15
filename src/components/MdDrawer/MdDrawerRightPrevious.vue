<template>
  <div v-show="false" class="md-drawer md-right-previous" :class="drawerClasses"></div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default new MdComponent({
    name: 'MdDrawer',
    props: {
      mdPermanent: {
        type: String,
        ...MdPropValidator('md-permanent', [
          'full',
          'clipped',
          'card'
        ])
      },
      mdPersistent: {
        type: String,
        ...MdPropValidator('md-persistent', [
          'mini',
          'full'
        ])
      },
      mdActive: Boolean,
      mdFixed: Boolean
    },
    computed: {
      drawerClasses () {
        let classes = {
          'md-temporary': this.isTemporary,
          'md-persistent': this.mdPersistent,
          'md-permanent': this.mdPermanent,
          'md-active': this.mdActive,
          'md-fixed': this.mdFixed
        }

        if (this.mdPermanent) {
          classes['md-permanent-' + this.mdPermanent] = true
        }

        if (this.mdPersistent) {
          classes['md-persistent-' + this.mdPersistent] = true
        }

        return classes
      },
      isTemporary () {
        return !this.mdPermanent && !this.mdPersistent
      }
    }
  })
</script>

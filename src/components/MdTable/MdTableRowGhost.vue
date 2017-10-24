<script>
  export default {
    name: 'MdTableRowGhost',
    abstract: true,
    props: {
      mdIndex: [String, Number]
    },
    render () {
      this.$slots.default[0].componentOptions.propsData.mdIndex = this.mdIndex

      return this.$slots.default[0]
    }
  }
</script>

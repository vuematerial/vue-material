<script>
  export default {
    name: 'MdTableRowGhost',
    abstract: true,
    props: {
      mdIndex: [String, Number],
      mdId: [String, Number]
    },
    render () {
      this.$slots.default[0].componentOptions.propsData.mdIndex = this.mdIndex
      this.$slots.default[0].componentOptions.propsData.mdId = this.mdId

      return this.$slots.default[0]
    }
  }
</script>

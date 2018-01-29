<script>
  export default {
    name: 'MdTableRowGhost',
    abstract: true,
    props: {
      mdIndex: [String, Number],
      mdId: [String, Number],
      mdItem: Object
    },
    render () {
      this.$slots.default[0].componentOptions.propsData.mdIndex = this.mdIndex
      this.$slots.default[0].componentOptions.propsData.mdId = this.mdId
      this.$slots.default[0].componentOptions.propsData.mdItem = this.mdItem

      return this.$slots.default[0]
    }
  }
</script>

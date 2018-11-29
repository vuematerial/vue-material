<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { FunctionalComponentOptions, CreateElement, RenderContext } from 'vue'

@Component({
  functional: true
} as FunctionalComponentOptions)
class MdTagSwitcher extends Vue {

  @Prop({ type: String, default: 'div' })
  mdTag!: string

  render (createElement: CreateElement, { props, data, listeners, children }: RenderContext) {
    const newProps = {
      ...data,
      nativeOn: listeners
    }

    return createElement(props.mdTag, newProps, children)
  }

}

export default MdTagSwitcher
</script>

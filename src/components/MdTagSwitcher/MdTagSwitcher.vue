<script>
  export default {
    functional: true,
    props: {
      mdTag: {
        type: String,
        default: 'div'
      }
    },
    render (createElement, { props, children, data, listeners }) {
      return createElement(props.mdTag, {
        ...data,
        on: listeners
      }, children)
    }
  }
</script>

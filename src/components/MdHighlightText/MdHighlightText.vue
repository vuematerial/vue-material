<script>
  import Vue from 'vue'
  import MdComponent from 'core/MdComponent'

  function highlight (text, term) {
    if (term.length === 0) {
      return text
    }

    const offset = text.toLowerCase().indexOf(term[0].toLowerCase())

    if (offset === -1) {
      return null
    }

    let last = 0
    for (let i = 1; i < term.length; i++) {
      if (text[offset + i] !== term[i]) {
        break
      }

      last = i
    }

    let before = text.slice(0, offset)
    let match = `<span class="md-highlight-text-match">${text.slice(offset, offset + last + 1)}</span>`
    let after = highlight(text.slice(offset + last + 1), term.slice(last + 1))

    return before + match + after
  }

  function generateHighlight ({ text }, term) {
    if (text && term && term[0]) {
      return highlight(text, term) || text
    }

    return text
  }

  export default new MdComponent({
    name: 'MdHighlightText',
    abstract: true,
    props: {
      mdTerm: String
    },
    render (createElement) {
      try {
        const defaultSlot = this.$slots.default

        if (!defaultSlot) {
          return null
        }

        if (defaultSlot.length > 1 || defaultSlot[0].tag) {
          throw new Error()
        }

        const HTMLContent = generateHighlight(defaultSlot[0], this.mdTerm)

        return createElement('div', {
          staticClass: 'md-highlight-text',
          class: this.$mdActiveTheme,
          domProps: {
            innerHTML: HTMLContent
          }
        })
      } catch (e) {
        Vue.util.warn('MdHighlightText can only render text nodes.', this)
      }

      return null
    }
  })
</script>

<style lang="scss">
  .md-highlight-text {
    flex: 1;
  }

  .md-highlight-text-match {
    font-weight: 500;
  }
</style>

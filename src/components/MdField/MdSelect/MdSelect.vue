<template>
  <md-menu
    class="md-select"
    :class="{ 'md-disabled': disabled }"
    :md-close-on-select="false"
    :md-active.sync="showSelect"
    :md-offset-x="offset.x"
    :md-offset-y="offset.y"
    :md-dense="mdDense"
    @md-closed="onClose">
    <md-input
      class="md-input md-select-value"
      v-model="MdSelect.label"
      ref="input"
      readonly
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      v-on="inputListeners"
      v-bind="attrs"
      @focus.prevent="onFocus"
      @blur.prevent="removeHighlight"
      @click="openSelect"
      @keydown.down="openSelect"
      @keydown.enter="openSelect"
      @keydown.space="openSelect"  />
    <md-drop-down-icon @click.native="openSelect" />

    <keep-alive>
      <md-menu-content
        ref="menu"
        class="md-select-menu"
        :md-content-class="mdClass"
        :style="menuStyles"
        @enter="onMenuEnter">
        <slot v-if="showSelect" />
      </md-menu-content>
    </keep-alive>

    <div v-if="!showSelect" v-show="false">
      <slot />
    </div>

    <input class="md-input-fake" v-model="model" :disabled="disabled" readonly tabindex="-1" />
    <select readonly v-model="model" v-bind="attributes" tabindex="-1"></select>
  </md-menu>
</template>

<script>
  import raf from 'raf'
  import MdComponent from 'core/MdComponent'
  import MdDropDownIcon from 'core/icons/MdDropDownIcon'
  import MdMenu from 'components/MdMenu/MdMenu'
  import MdMenuContent from 'components/MdMenu/MdMenuContent'
  import MdInput from '../MdInput/MdInput'
  import MdFieldMixin from '../MdFieldMixin'

  const defaultOffset = {
    x: -15,
    y: -48
  }

  export default {
    name: 'MdSelect',
    components: {
      MdInput,
      MdMenu,
      MdMenuContent,
      MdDropDownIcon
    },
    mixins: [MdFieldMixin],
    props: {
      mdDense: Boolean,
      mdClass: String,
      multiple: Boolean,
      id: String,
      name: String
    },
    inject: ['MdField'],
    data () {
      return {
        menuStyles: {},
        offset: {
          x: defaultOffset.x,
          y: 0
        },
        showSelect: true,
        didMount: false,
        MdSelect: {
          items: {},
          label: null,
          multiple: false,
          modelValue: this.localValue,
          setValue: this.setValue,
          setContent: this.setContent,
          setMultipleValue: this.setMultipleValue,
          setMultipleContent: this.setMultipleContent
        }
      }
    },
    provide () {
      const MdSelect = this.MdSelect

      return { MdSelect }
    },
    computed: {
      attrs () {
        return {
          ...this.$attrs,
          name: this.name,
          id: undefined
        }
      },
      inputListeners () {
        return {
          ...this.$listeners,
          input: undefined
        }
      }
    },
    watch: {
      localValue: {
        immediate: true,
        handler (val) {
          this.setFieldContent()
          this.MdSelect.modelValue = this.localValue

          if (this.didMount) {
            this.emitSelected(val)
          }
        }
      },
      multiple: {
        immediate: true,
        handler (isMultiple) {
          this.MdSelect.multiple = isMultiple
          this.$nextTick(this.initialLocalValueByDefault)
        }
      }
    },
    methods: {
      elHasScroll (el) {
        return el.scrollHeight > el.offsetHeight
      },
      scrollToSelectedOption (el, menu) {
        const top = el.offsetTop
        const elHeight = el.offsetHeight
        const menuHeight = menu.offsetHeight

        menu.scrollTop = top - ((menuHeight - elHeight) / 2)
      },
      setOffsets (target) {
        if (!this.$isServer) {
          const menu = this.$refs.menu.$refs.container

          if (menu) {
            const selected = target || menu.querySelector('.md-selected')

            if (selected) {
              this.scrollToSelectedOption(selected, menu)
              this.offset.y = defaultOffset.y - selected.offsetTop + menu.scrollTop + 8
              this.menuStyles = {
                'transform-origin': `0 ${Math.abs(this.offset.y)}px`
              }
            } else {
              this.offset.y = defaultOffset.y + 1
              this.menuStyles = {}
            }
          }
        }
      },
      onMenuEnter () {
        if (!this.didMount) {
          return
        }

        this.setOffsets()
        this.MdField.focused = true
        this.$emit('md-opened')
      },
      applyHighlight () {
        this.MdField.focused = false
        this.MdField.highlighted = true
        this.$refs.input.$el.focus()
      },
      onClose () {
        this.$emit('md-closed')
        if (this.didMount) {
          this.applyHighlight()
        }
      },
      onFocus () {
        if (this.didMount) {
          this.applyHighlight()
        }
      },
      removeHighlight () {
        this.MdField.highlighted = false
      },
      openSelect () {
        if (!this.disabled) {
          this.showSelect = true
        }
      },
      arrayAccessorRemove (arr, index) {
        let before = arr.slice(0, index)
        let after = arr.slice(index + 1, arr.length)
        return before.concat(after)
      },
      toggleArrayValue (value) {
        let index = this.localValue.indexOf(value)
        let includes = index > -1
        if (!includes) {
          this.localValue = this.localValue.concat([value])
        } else {
          this.localValue = this.arrayAccessorRemove(this.localValue, index)
        }
      },
      setValue (newValue) {
        this.model = newValue
        this.setFieldValue()
        this.showSelect = false
      },
      setContent (newLabel) {
        this.MdSelect.label = newLabel
      },
      setContentByValue () {
        const textContent = this.MdSelect.items[this.localValue]

        if (textContent) {
          this.setContent(textContent)
        } else {
          this.setContent('')
        }
      },
      setMultipleValue (value) {
        const newValue = value
        this.toggleArrayValue(newValue)
        this.setFieldValue()
      },
      setMultipleContentByValue () {
        if (!this.localValue) {
          this.initialLocalValueByDefault()
        }

        let content = []

        this.localValue.forEach(item => {
          const textContent = this.MdSelect.items[item]

          if (textContent) {
            content.push(textContent)
          }
        })

        this.setContent(content.join(', '))
      },
      setFieldContent () {
        if (this.multiple) {
          this.setMultipleContentByValue()
        } else {
          this.setContentByValue()
        }
      },
      isLocalValueSet () {
        return this.localValue !== undefined && this.localValue !== null
      },
      setLocalValueIfMultiple () {
        if (this.isLocalValueSet()) {
          this.localValue = [this.localValue]
        } else {
          this.localValue = []
        }
      },
      setLocalValueIfNotMultiple () {
        if (this.localValue.length > 0) {
          this.localValue = this.localValue[0]
        } else {
          this.localValue = null
        }
      },
      initialLocalValueByDefault () {
        let isArray = Array.isArray(this.localValue)

        if (this.multiple && !isArray) {
          this.setLocalValueIfMultiple()
        } else if (!this.multiple && isArray) {
          this.setLocalValueIfNotMultiple()
        }
      },
      emitSelected (value) {
        this.$emit('md-selected', value)
      }
    },
    mounted () {
      this.showSelect = false
      this.setFieldContent()

      this.$nextTick().then(() => {
        this.didMount = true
      })
    },
    updated () {
      this.setFieldContent()
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-menu.md-select {
    display: flex;
    flex: 1;
    overflow: auto;

    &:not(.md-disabled) {
      .md-input,
      .md-icon {
        cursor: pointer;
        outline: none;
      }
    }

    .md-input {
      flex: 1;
      min-width: 0;
    }

    select,
    .md-input-fake {
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      position: absolute;
      clip: rect(0 0 0 0);
      border: 0;
    }
  }
  .md-menu-content.md-select-menu {
    z-index: 111;
    width: 100%;

    &.md-menu-content-enter {
      transform: translate3d(0, -8px, 0) scaleY(.3);
    }

    .md-list {
      transition: opacity .3s $md-transition-drop-timing;
    }
  }
</style>

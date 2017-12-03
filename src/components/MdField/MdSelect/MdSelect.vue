<template>
  <md-menu
    class="md-select"
    :class="{ 'md-disabled': disabled }"
    :md-close-on-select="false"
    :md-active.sync="showSelect"
    :md-offset-x="offset.x"
    :md-offset-y="offset.y"
    @md-opened="onOpen"
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
      v-bind="$attrs"
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
        :md-list-class="mdDense && 'md-dense'"
        :style="menuStyles"
        :id="uniqueId">
        <slot />
      </md-menu-content>
    </keep-alive>

    <input class="md-input-fake" v-model="model" :disabled="disabled" readonly tabindex="-1" />
    <select readonly v-model="model" v-bind="attributes" tabindex="-1"></select>
  </md-menu>
</template>

<script>
  import raf from 'raf'
  import MdUuid from 'core/utils/MdUuid'
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
        uniqueId: 'md-select-menu-' + MdUuid(),
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
          modelValue: this.model,
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
        handler () {
          this.setFieldContent()
        }
      },
      multiple: {
        immediate: true,
        handler (isMultiple) {
          this.MdSelect.multiple = isMultiple
          this.$nextTick(() => this.initialLocalValueByDefault())
        }
      },
      model () {
        this.MdSelect.modelValue = this.model
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
      async setOffsets (target) {
        await this.$nextTick()

        if (!this.$isServer) {
          const menu = document.getElementById(this.uniqueId)

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
      onOpen () {
        this.$emit('md-opened')
        if (this.didMount) {
          this.setOffsets()
          window.setTimeout(() => {
            this.MdField.focused = true
          }, 10)
        }
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
        this.emitSelected(this.localValue)
      },
      setValue (newValue) {
        this.model = newValue
        this.emitSelected(newValue)
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
      initialLocalValueByDefault () {
        let isArray = Array.isArray(this.localValue)
        if (this.multiple && !isArray) {
          let isSet = this.localValue !== undefined && this.localValue !== null
          this.localValue = isSet ? [this.localValue] : []
          return
        }
        if (!this.multiple && isArray) {
          this.localValue = this.localValue.length > 0 ? this.localValue[0] : null
        }
      },
      emitSelected (value) {
        this.$emit('md-selected', value)
      }
    },
    async mounted () {
      this.showSelect = false
      this.setFieldContent()

      await this.$nextTick()
      this.didMount = true
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-menu.md-select {
    display: flex;
    flex: 1;

    &:not(.md-disabled) {
      .md-input,
      .md-icon {
        cursor: pointer;
        outline: none;
      }
    }

    .md-input {
      flex: 1;
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
    width: 100%;

    &.md-menu-content-enter {
      transform: translate3d(0, -8px, 0) scaleY(.3);
    }

    .md-list {
      transition: opacity .3s $md-transition-drop-timing;
    }

    .md-dense .md-ripple.md-list-item-content {
      font-size: 14px;
    }
  }
</style>

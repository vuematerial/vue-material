<script>
  import MdComponent from 'core/MdComponent'
  import MdFocused from 'core/mixins/MdFocused/MdFocused'
  import MdRipple from 'core/mixins/MdRipple/MdRipple'
  import MdRouterLink from 'core/mixins/MdRouterLink/MdRouterLink'
  import MdRouterLinkProps from 'core/utils/MdRouterLinkProps'
  import MdButtonContent from './MdButtonContent'

  export default new MdComponent({
    name: 'MdButton',
    data () {
      return {
        rippleActive: false
      }
    },
    components: {
      MdButtonContent
    },
    mixins: [
      MdRipple,
      MdFocused,
      MdRouterLink
    ],
    props: {
      href: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean
    },
    computed: {
      rippleWorks () {
        return this.mdRipple && !this.disabled
      },
      isRouterLink () {
        return this.$router && this.to;
      }
    },
    render (createElement) {
      const buttonContent = createElement('md-button-content', {
        attrs: {
          mdRipple: this.mdRipple,
          disabled: this.disabled
        },
        props: {
          mdRippleActive: this.rippleActive
        },
        on: {
          'update:mdRippleActive': active => this.rippleActive = active,
        }
      }, this.$slots.default)
      let buttonAttrs = {
        staticClass: 'md-button',
        class: [
          this.$mdActiveTheme,
          {
            'md-ripple-off': !this.mdRipple,
            'md-focused': this.mdHasFocus
          }
        ],
        attrs: {
          ...this.attrs,
          href: this.href,
          disabled: this.disabled,
          type: !this.href && (this.type || 'button')
        },
        on: {
          ...this.$listeners,
          touchstart: event => {
            if (this.rippleWorks) {
              this.rippleActive = event
            }

            this.$listeners.touchstart && this.$listeners.touchstart(event)
          },
          touchmove: event => {
            if (this.rippleWorks) {
              this.rippleActive = event
            }

            this.$listeners.touchmove && this.$listeners.touchmove(event)
          },
          mousedown: event => {
            if (this.rippleWorks) {
              this.rippleActive = event
            }

            this.$listeners.mousedown && this.$listeners.mousedown(event)
          }
        }
      }
      let tag = 'button'

      if (this.href) {
        tag = 'a'
      } else if (this.isRouterLink) {
        this.$options.props = MdRouterLinkProps(this, this.$options.props)

        tag = 'router-link'
        const exactActiveClass = this.$props.exactActiveClass
        const activeClass = `${this.$props.activeClass || this.$material.router.linkActiveClass} md-active`
        buttonAttrs.props = {
          ...this.$props,
          exactActiveClass,
          activeClass
        }
        delete buttonAttrs.props.type
        delete buttonAttrs.attrs.type
        delete buttonAttrs.props.href
        delete buttonAttrs.attrs.href
      }

      return createElement(tag, buttonAttrs, [buttonContent])
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdElevation/variables";

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;
  $md-button-font-size: 14px;

  $md-button-dense-height: 32px;

  $md-button-icon-size: 40px;

  $md-button-fab-size: 56px;
  $md-button-fab-size-mini: $md-button-icon-size;

  .md-button-clean {
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    outline: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    transition: $md-transition-default;
    font-family: inherit;
    line-height: normal;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
  }

  .md-button {
    @extend .md-button-clean;
    min-width: $md-button-min-width;
    height: $md-button-height;
    margin: 6px 8px;
    user-select: none;
    border-radius: $md-button-radius;
    font-size: $md-button-font-size;
    font-weight: 500;
    text-transform: uppercase;

    &:active {
      outline: none;
    }

    &[disabled] {
      pointer-events: none;
    }

    &:not([disabled]) {
      cursor: pointer;

      &:hover,
      &:active,
      &.md-focused {
        &:before {
          background-color: currentColor;
          opacity: .12;
        }
      }

      &.md-focused {
        &.md-primary,
        &.md-accent {
          &:before {
            opacity: .2;
          }
        }
      }

      &:active {
        &:before {
          opacity: .2;
        }
      }

      &.md-ripple-off:active:before {
        opacity: .26;
      }
    }

    &.md-plain.md-button.md-raised:not([disabled]) {
      color: rgba(#000, .87);
      background-color: #fff;

      .md-icon-font {
        color: rgba(#000, .87);
      }

      .md-icon-image {
        fill: rgba(#000, .87);
      }
    }

    &::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
      transition: $md-transition-default;
      will-change: background-color, opacity;
      content: " ";
    }

    &.md-dense {
      height: $md-button-dense-height;
      font-size: 13px;
    }

    &.md-raised:not([disabled]) {
      @include md-elevation(2);

      &:active {
        @include md-elevation(8);
      }

      &.md-ripple-off:active:before {
        opacity: .2;
      }
    }

    + .md-button {
      margin-left: 0;
    }

    .md-ripple {
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .md-button-spaced .md-ripple {
    padding: 0 16px;
  }

  .md-icon-button,
  .md-fab {
    border-radius: 50%;
    z-index: 10;

    &:before {
      border-radius: 50%;
    }

    .md-ripple {
      border-radius: 50%;
    }
  }

  .md-icon-button,
  .md-fab.md-mini,
  .md-fab.md-dense {
    .md-ripple-wave {
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
    }
  }

  .md-icon-button {
    width: $md-button-icon-size;
    min-width: $md-button-icon-size;
    height: $md-button-icon-size;
    margin: 0 6px;

    &.md-dense {
      width: $md-button-dense-height;
      min-width: $md-button-dense-height;
      height: $md-button-dense-height;
    }

    .md-ripple-enter-active {
      transition-duration: 1.2s;
    }
  }

  .md-fab {
    @include md-elevation(6);

    width: $md-button-fab-size;
    height: $md-button-fab-size;
    min-width: 0;
    overflow: hidden;

    &:active {
      @include md-elevation(12);
    }

    &.md-mini,
    &.md-dense {
      width: $md-button-fab-size-mini;
      height: $md-button-fab-size-mini;
    }

    &.md-fab-top-right,
    &.md-fab-top-left {
      position: absolute;
      top: 24px;
    }

    &.md-fab-bottom-right,
    &.md-fab-bottom-left {
      position: absolute;
      bottom: 24px;
    }

    &.md-fab-top-center,
    &.md-fab-bottom-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &.md-fab-top-center {
      top: 24px;
    }

    &.md-fab-bottom-center {
      bottom: 24px;
    }

    &.md-fab-top-right,
    &.md-fab-bottom-right {
      right: 24px;
    }

    &.md-fab-top-left,
    &.md-fab-bottom-left {
      left: 24px;
    }

    &.md-fixed {
      position: fixed;
    }

    .md-ripple {
      padding: 0;
    }
  }
</style>

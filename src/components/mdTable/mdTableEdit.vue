<template>
  <div class="md-table-edit" @keydown.esc="closeDialog">
    <div class="md-table-edit-trigger" :class="triggerClasses" @click.stop="openDialog">
      {{ value || mdPlaceholder }}
    </div>

    <div class="md-table-dialog" :class="dialogClasses" ref="dialog">
      <md-input-container>
        <md-input
          ref="input"
          :id="mdId"
          :name="mdName"
          :maxlength="mdMaxlength"
          :value="value"
          :placeholder="mdPlaceholder"
          @keydown.enter.native="confirmDialog"></md-input>
      </md-input-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'md-table-edit',
    props: {
      value: [String, Number],
      mdLarge: Boolean,
      mdId: String,
      mdName: String,
      mdPlaceholder: String,
      mdMaxlength: [Number, String]
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      triggerClasses() {
        return {
          'md-edited': this.value
        };
      },
      dialogClasses() {
        return {
          'md-active': this.active,
          'md-large': this.mdLarge
        };
      },
      realValue() {
        console.log(this.value);
      }
    },
    methods: {
      openDialog() {
        this.active = true;
        this.$refs.input.$el.focus();
        document.addEventListener('click', this.closeDialogOnOffClick);
      },
      closeDialog() {
        if (this.active) {
          this.active = false;
          this.$refs.input.$el.blur();
          document.removeEventListener('click', this.closeDialogOnOffClick);
        }
      },
      closeDialogOnOffClick(event) {
        if (!this.$refs.dialog.contains(event.target)) {
          this.closeDialog();
        }
      },
      confirmDialog() {
        let value = this.$refs.input.$el.value;

        this.closeDialog();
        this.$emit('input', value);
        this.$emit('edited', value);
      }
    }
  };
</script>

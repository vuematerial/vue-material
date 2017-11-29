<template>
  <div class="api-table" :class="$mdActiveTheme">
    <table>
      <tr>
        <th v-for="heading in headings" :key="heading">{{ heading }}</th>
      </tr>

      <tr v-for="{ offset, name, type, options, usage, description, defaults, value, example } in props" :key="name">
        <td class="prop" :class="{ offset }">
          <span class="prop-name" v-html="name"></span>
          <small class="prop-type" v-if="type">{{ type }}</small>
        </td>

        <td class="description" v-if="description" v-html="description"></td>
        <td class="slot-options" v-if="options">
          <p class="option" v-for="({ name, description }, index) in options" :key="index">
            <code>{{ name }}: </code>
            <span v-html="description"></span>
          </p>

          <div class="usage" v-if="usage">
            <strong>Usage: </strong>
            <p><code>{{ usage }}</code></p>
          </div>
        </td>
        <td v-if="defaults || value || example">
          <code v-html="defaults || value || example"></code>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import MdComponent from 'vue-material/core/MdComponent'

  export default MdComponent({
    name: 'ApiTable',
    props: {
      props: Array,
      headings: Array
    }
  })
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  $bg-color: md-get-palette-color(grey, 200);
  $border-color: darken($bg-color, 3%);

  .api-table {
    padding-bottom: 16px;
  }

  table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 13px;
    line-height: 18px;
  }

  tr:first-child {
    font-weight: 500;
  }

  td,
  th {
    padding: 8px 16px;
    border: 1px solid;
    text-align: left;
    vertical-align: middle;
  }

  th {
    height: 40px;
    line-height: 23px;

    &:first-child {
      width: 22%;
    }

    &:nth-child(2) ~ &:last-child {
      width: 17%;
    }
  }

  td.offset {
    padding-left: 32px;
  }

  .prop {
    vertical-align: top;
  }

  .prop-name {
    display: block;
    text-transform: lowercase;
  }

  .prop-type {
    color: md-get-palette-color(grey, 600);
    text-transform: capitalize;
  }

  .slot-options {
    width: 40%;
  }

  code {
    color: md-get-palette-color(red, A200);
    font-family: 'Roboto Mono', monospace;

    >>> span {
      color: md-get-palette-color(blue, A200);
    }
  }

  .description,
  .prop-name {
    >>> code {
      color: md-get-palette-color(red, A200);
      font-family: 'Roboto Mono', monospace;
    }
  }
</style>

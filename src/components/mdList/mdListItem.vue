<template>
  <li class="md-list-item" @click="$emit('click')">
    <md-button :title="title" :target="target" :href="href" class="md-list-item-container">
      <slot></slot>
    </md-button>
  </li>
</template>

<script>
  export default {
    props: {
      href: String,
      vLink: [String, Object],
      title: String,
      target: String
    }
  };
</script>

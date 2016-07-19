<template>
  <li class="md-list-item">
    <md-link-button :title="title" :target="target" :href="href" class="md-list-item-container" v-if="href">
      <slot></slot>
    </md-link-button>

    <md-button :title="title" class="md-list-item-container" v-else>
      <slot></slot>
    </md-button>
  </li>
</template>

<script>
  export default {
    props: {
      href: String,
      title: String,
      target: String
    }
  };
</script>

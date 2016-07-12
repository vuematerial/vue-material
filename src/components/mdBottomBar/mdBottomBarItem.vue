<template>
  <button class="md-bottom-bar-item" :class="{ 'md-active': active }" v-md-ink-ripple="disabled" @click="setActive">
    <md-icon>{{ mdIcon }}</md-icon>

    <span class="md-text">
      <slot></slot>
    </span>
  </button>
</template>

<script src="mdBottomBarItem.js"></script>

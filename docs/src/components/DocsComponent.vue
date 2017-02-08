<template>
  <div class="main-content component-docs">
    <div class="usage-content">
      <section class="component-description">
        <h2 class="md-headline">Description</h2>

        <slot name="description"></slot>
      </section>

      <section class="api-documentation" v-if="$slots.api">
        <h2 class="md-headline">API Options</h2>

        <slot name="api"></slot>
      </section>

      <slot></slot>
    </div>

    <div class="example-content">
      <slot name="example"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .component-docs {
    position: relative;
    z-index: 1;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .api-documentation {
    padding-bottom: 24px;
  }

  .md-headline {
    margin-top: 36px;
    margin-bottom: 24px;
    padding-top: 36px;
    border-top: 1px solid rgba(#000, .12);
  }

  .usage-content {
    padding-right: 8px;
    flex: 1 1 45%;

    @media (max-width: 1024px) {
      padding: 0;
      flex: none;
      order: 2;
    }
  }

  .component-description {
    .md-headline {
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .example-content {
    padding-left: 8px;
    flex: 1 1 55%;

    @media (max-width: 1024px) {
      padding: 0;
      flex: none;
    }
  }
</style>

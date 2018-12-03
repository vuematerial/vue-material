<template>
  <div class="page-shape">
    <h1 class="md-h4">{{ i18n('title') }}</h1>

    <section>
      <MdShape>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
        velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium! Reprehenderit
        nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error alias doloribus
        accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
      </MdShape>
    </section>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PageConstructor from '@/components/PageConstructor'

  @Component
  class PageShape extends PageConstructor {

  }

  export default PageShape
</script>

<style lang="scss" scoped>
  section {
    padding: 8px 16px;
  }

  .md-shape {
    width: 400px;
  }
</style>

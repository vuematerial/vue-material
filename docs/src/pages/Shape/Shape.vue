<template>
  <div class="page-shape">
    <h1 class="md-h4">{{ i18n('title') }}</h1>

    <section>
      <MdShape v-for="_ in 150" :key="`md-shape-flat-${_}`">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
          velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium!
          Reprehenderit nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error
          alias doloribus accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
        </p>
      </MdShape>

      <MdShape v-for="_ in 150" :key="`md-shape-elevated-${_}`" md-elevation="2" class="md-primary">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
          velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium!
          Reprehenderit nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error
          alias doloribus accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
        </p>
      </MdShape>

      <MdShape v-for="_ in 150" :key="`md-shape-radius-${_}`" md-elevation="2" md-corner-type="radius" md-corner-size="8" class="md-secondary">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
          velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium!
          Reprehenderit nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error
          alias doloribus accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
        </p>
      </MdShape>

      <MdShape v-for="_ in 150" :key="`md-shape-square-${_}`" md-elevation="2" md-corner-type="square" md-corner-size="16" class="md-primary">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
          velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium!
          Reprehenderit nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error
          alias doloribus accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
        </p>
      </MdShape>

      <MdShape v-for="_ in 150" :key="`md-shape-scoop-${_}`" md-elevation="2" md-corner-type="scoop" md-corner-size="16" class="md-secondary">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestias, enim eligendi dolorum ut laudantium
          velit aut fugiat quo officia ab, omnis, numquam tempora. Neque repellendus fuga sit ad laudantium!
          Reprehenderit nobis corrupti similique voluptatibus, corporis aliquam, quis hic. Sed blanditiis dolor error
          alias doloribus accusantium nulla libero placeat dolorum ipsum, corporis aliquam.
        </p>
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

  .md-shape-flat,
  .md-shape-corner {
    width: 400px;
    margin: 8px;
    padding: 16px;
    display: inline-flex;
  }

  p {
    margin: 0;
  }
</style>

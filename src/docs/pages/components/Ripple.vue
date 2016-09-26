<template>
  <demo-page label="Components - Ripple">
    <div slot="examples">
      <demo-example label="Default">
        <span class="has-ripple" v-md-ink-ripple>This span has ripple effect</span>
        <span class="has-ripple green" v-md-ink-ripple>This span has ripple effect</span>
        <span class="has-ripple blue" v-md-ink-ripple>This span has ripple effect</span>

        <div>
          <md-avatar v-md-ink-ripple>
            <img src="//placeimg.com/40/40/people/1" alt="People">
          </md-avatar>

          <md-avatar v-md-ink-ripple class="md-avatar-icon">
            <md-icon>home</md-icon>
          </md-avatar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .has-ripple {
    margin-bottom: 16px;
    padding: 16px;
    position: relative;
  }

  span {
    display: inline-block;
  }

  .blue {
    color: #2196F3;
  }

  .green {
    color: #4CAF50;
  }
</style>

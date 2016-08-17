<template>
  <div class="page-container">
    <div class="page-example">
      <slot name="example"></slot>
    </div>

    <div class="page-documentation">
      <slot name="documentation"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .page-container {
    display: flex;
    flex: 1;
    flex-flow: column;
    overflow: auto;

    @media (min-width: 768px) {
      flex-flow: row;
    }
  }

  .page-example,
  .page-documentation {
    @media (min-width: 768px) {
      width: 50%;
      flex: 1;
    }
  }

  .page-example {
    padding: 16px;
  }

  .page-documentation {
    display: flex;
    flex-flow: column;
    background-color: lighten(#2d3234, 10%);
    color: #fff;

    ::-webkit-scrollbar {
      box-shadow: inset 1px 1px 0 rgba(#fff, .1);
      background-color: rgba(#fff, .05);

      &:hover {
        box-shadow: inset 1px 1px 0 rgba(#fff, .05),
                    inset 0 -1px 0 rgba(#fff, .03);
        background-color: rgba(#fff, .08);
      }
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(#fff, .2);
      box-shadow: inset 1px 1px 0 rgba(#fff, .05),
                  inset 0 -1px 0 rgba(#fff, .07);
    }
  }

  [slot="documentation"] {
    display: flex;
    flex-flow: column;
    flex: 1;
  }
</style>

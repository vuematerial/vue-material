<template>
  <div class="md-board" :id="boardId" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import uniqueId from '../../core/utils/uniqueId';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    props: {
      id: [String, Number],
      mdLabel: [String, Number],
      mdIcon: String,
      mdActive: Boolean,
      mdDisabled: Boolean,
      mdTooltip: String,
      mdTooltipDelay: {
        type: String,
        default: '0'
      },
      mdTooltipDirection: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        mounted: false,
        boardId: this.id || 'board-' + uniqueId(),
        width: '0px',
        left: '0px'
      };
    },
    watch: {
      mdActive() {
        this.updateBoardData();
      },
      mdDisabled() {
        this.updateBoardData();
      },
      mdIcon() {
        this.updateBoardData();
      },
      mdLabel() {
        this.updateBoardData();
      },
      mdTooltip() {
        this.updateBoardData();
      },
      mdTooltipDelay() {
        this.updateBoardData();
      },
      mdTooltipDirection() {
        this.updateBoardData();
      }
    },
    computed: {
      styles() {
        return {
          width: this.width,
          left: this.left
        };
      }
    },
    methods: {
      getBoardData() {
        return {
          id: this.boardId,
          label: this.mdLabel,
          icon: this.mdIcon,
          active: this.mdActive,
          disabled: this.mdDisabled,
          tooltip: this.mdTooltip,
          tooltipDelay: this.mdTooltipDelay,
          tooltipDirection: this.mdTooltipDirection,
          ref: this
        };
      },
      updateBoardData() {
        this.parentBoards.updateBoard(this.getBoardData());
      }
    },
    mounted() {
      let boardData = this.getBoardData();

      this.parentBoards = getClosestVueParent(this.$parent, 'md-boards');

      if (!this.parentBoards) {
        throw new Error('You must wrap the md-board in a md-boards');
      }

      this.mounted = true;
      this.parentBoards.updateBoard(boardData);

      if (this.mdActive) {
        this.parentBoards.setActiveBoard(boardData);
      }
    },
    beforeDestroy() {
      this.parentBoards.unregisterBoard(this.getBoardData());
    }
  };
</script>

<template>
  <div class="md-boards" :class="[themeClass, boardClasses]">

    <div class="md-boards-content" ref="boardContent" :style="{ height: contentHeight }">
      <div class="md-boards-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
        <slot></slot>
      </div>
    </div>

    <md-whiteframe md-tag="nav" class="md-boards-navigation" :md-elevation="mdElevation" :class="navigationClasses" ref="boardNavigation">

      <span style="flex: 1" v-if="!mdControls"></span>

      <md-button
        v-if="mdControls"
        @click.native="movePrevBoard()">
        <div class="md-board-header-container">
          <md-icon class="md-control">chevron_left</md-icon>
        </div>
      </md-button>

      <span style="flex: 1"></span>

      <button
        v-for="header in boardList"
        :key="header.id"
        type="button"
        class="md-board-header"
        :class="getHeaderClass(header)"
        :disabled="header.disabled"
        @click="setActiveBoard(header)"
        ref="boardHeader">
        <div class="md-board-header-container">
          <md-icon>fiber_manual_record</md-icon>
        </div>
      </button>
      
      <span style="flex: 1"></span>

      <md-button
        v-if="mdControls"
        @click.native="moveNextBoard()">
        <div class="md-board-header-container">
          <md-icon class="md-control">chevron_right</md-icon>
        </div>
      </md-button>

      <span style="flex: 1" v-if="!mdControls"></span>

      <span ref="indicator"></span>
    </md-whiteframe>

  </div>
</template>

<style lang="scss" src="./mdBoards.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import throttle from '../../core/utils/throttle';

  export default {
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdRight: Boolean,
      mdDynamicHeight: {
        type: Boolean,
        default: true
      },
      mdElevation: {
        type: [String, Number],
        default: 0
      },
      mdAuto: {
        type: Boolean,
        default: false
      },
      mdTimeout: {
        type: Number,
        default: 5000
      },
      mdControls: {
        type: Boolean,
        default: false
      },
      mdInfinite: {
        type: Boolean,
        default: false
      }
    },
    mixins: [theme],
    data: () => ({
      boardList: {},
      activeBoard: null,
      activeBoardNumber: 0,
      hasIcons: false,
      hasLabel: false,
      transitionControl: null,
      transitionOff: false,
      contentHeight: '0px',
      contentWidth: '0px',
      autoTransition: null
    }),
    computed: {
      boardClasses() {
        return {
          'md-dynamic-height': this.mdDynamicHeight,
          'md-transition-off': this.transitionOff
        };
      },
      navigationClasses() {
        return {
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel,
          'md-fixed': this.mdFixed,
          'md-right': !this.mdCentered && this.mdRight,
          'md-centered': this.mdCentered || this.mdFixed
        };
      },
      indicatorClasses() {
        let toLeft = this.lastIndicatorNumber > this.activeBoardNumber;

        this.lastIndicatorNumber = this.activeBoardNumber;

        return {
          'md-transition-off': this.transitionOff,
          'md-to-right': !toLeft,
          'md-to-left': toLeft
        };
      }
    },
    methods: {
      getHeaderClass(header) {
        return {
          'md-active': this.activeBoard === header.id,
          'md-disabled': header.disabled
        };
      },
      registerBoard(boardData) {
        this.boardList[boardData.id] = boardData;
      },
      unregisterBoard(boardData) {
        delete this.boardList[boardData.id];
      },
      updateBoard(boardData) {
        this.registerBoard(boardData);

        if (boardData.active) {
          if (!boardData.disabled) {
            this.setActiveBoard(boardData);
          } else if (Object.keys(this.boardList).length) {
            let boardsIds = Object.keys(this.boardList);
            let targetIndex = boardsIds.indexOf(boardData.id) + 1;
            let target = boardsIds[targetIndex];

            if (target) {
              this.setActiveBoard(this.boardList[target]);
            } else {
              this.setActiveBoard(this.boardList[0]);
            }
          }
        }
      },
      observeElementChanges() {
        this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
        this.parentObserver.observe(this.$refs.boardContent, {
          childList: true,
          attributes: true,
          subtree: true
        });
      },
      getBoardIndex(id) {
        const idList = Object.keys(this.boardList);

        return idList.indexOf(id);
      },
      calculateIndicatorPos() {
        if (this.$refs.boardHeader && this.$refs.boardHeader[this.activeBoardNumber]) {
          const boardsWidth = this.$el.offsetWidth;
          const activeBoard = this.$refs.boardHeader[this.activeBoardNumber];
          const left = activeBoard.offsetLeft;
          const right = boardsWidth - left - activeBoard.offsetWidth;

          this.$refs.indicator.style.left = left + 'px';
          this.$refs.indicator.style.right = right + 'px';
        }
      },
      calculateBoardsWidthAndPosition() {
        const width = this.$el.offsetWidth;
        let index = 0;

        this.contentWidth = width * this.activeBoardNumber + 'px';

        for (const boardId in this.boardList) {
          const board = this.boardList[boardId];

          board.ref.width = width + 'px';
          board.ref.left = width * index + 'px';
          index++;
        }
      },
      calculateContentHeight() {
        this.$nextTick(() => {
          if (Object.keys(this.boardList).length) {
            let height = this.boardList[this.activeBoard].ref.$el.offsetHeight;

            this.contentHeight = height + 'px';
          }
        });
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos();
          this.calculateBoardsWidthAndPosition();
          this.calculateContentHeight();
        });
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculatePosition();
          this.transitionOff = false;
        }, 200);
      },
      calculateOnWatch() {
        this.calculatePosition();
        this.debounceTransition();
      },
      calculateOnResize() {
        this.transitionOff = true;
        this.calculateOnWatch();
      },
      setActiveBoard(boardData) {
        this.hasIcons = !!boardData.icon;
        this.hasLabel = !!boardData.label;
        this.activeBoard = boardData.id;
        this.activeBoardNumber = this.getBoardIndex(this.activeBoard);
        this.calculatePosition();
        this.$emit('change', this.activeBoardNumber);
      },
      movePrevBoard() {
        let boardsIds = Object.keys(this.boardList);
        let targetIndex = boardsIds.indexOf(this.activeBoard) - 1;
        let target = boardsIds[targetIndex];

        if (target) {
          this.setActiveBoard(this.boardList[target]);
        } else if (this.mdInfinite) {
          let lastBoard = Object.keys(this.boardList)[Object.keys(this.boardList).length - 1];

          this.setActiveBoard(this.boardList[lastBoard]);
        }
      },
      moveNextBoard() {
        let boardsIds = Object.keys(this.boardList);
        let targetIndex = boardsIds.indexOf(this.activeBoard) + 1;
        let target = boardsIds[targetIndex];

        if (target) {
          this.setActiveBoard(this.boardList[target]);
        } else if (this.mdInfinite) {
          let firstBoard = Object.keys(this.boardList)[0];
  
          this.setActiveBoard(this.boardList[firstBoard]);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.calculateOnResize);

        if (Object.keys(this.boardList).length && !this.activeBoard) {
          let firstBoard = Object.keys(this.boardList)[0];

          this.setActiveBoard(this.boardList[firstBoard]);
        }
      });

      /* automatic behaviour */
      if (this.mdAuto) {
        this.autoTransition = window.setInterval(() => {
          this.moveNextBoard();
        }, this.mdTimeout);
      }
    },
    beforeDestroy() {
      if (this.parentObserver) {
        this.parentObserver.disconnect();
      }

      window.removeEventListener('resize', this.calculateOnResize);
    }
  };
</script>

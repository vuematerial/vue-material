<template>
  <div class="md-boards" :class="[themeClass, boardClasses]">

    <div class="md-boards-content" ref="boardsContent" :style="{ height: contentHeight }">
      <div class="md-boards-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
        <slot></slot>
      </div>
    </div>

    <nav class="md-boards-navigation" :class="navigationClasses" ref="boardNavigation">

      <span style="flex: 1" v-if="!mdControls"></span>

      <md-button
        v-if="mdControls"
        @click="movePrevBoard()">
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
        @click="setActiveBoard(header, true)"
        ref="boardHeader">
        <div class="md-board-header-container">
          <md-icon>fiber_manual_record</md-icon>
        </div>
      </button>

      <span style="flex: 1"></span>

      <md-button
        v-if="mdControls"
        @click="moveNextBoard()">
        <div class="md-board-header-container">
          <md-icon class="md-control">chevron_right</md-icon>
        </div>
      </md-button>

      <span style="flex: 1" v-if="!mdControls"></span>

      <span ref="indicator"></span>
    </nav>

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
      mdDuration: {
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
      },
      mdSwipeable: Boolean,
      mdSwipeDistance: {
        type: Number,
        default: 100
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
        this.parentObserver.observe(this.$refs.boardsContent, {
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
          if (this._destroyed) {
            return;
          }

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
      start() {
        if (this.autoTransition) {
          window.clearInterval(this.autoTransition);
        }
        this.autoTransition = window.setInterval(() => {
          this.moveNextBoard();
        }, this.mdDuration);
      },
      setActiveBoard(boardData, reset) {
        if (this.mdAuto && reset) {
          this.start();
        }
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
          this.setActiveBoard(this.boardList[target], true);
        } else if (this.mdInfinite) {
          let lastBoard = Object.keys(this.boardList)[Object.keys(this.boardList).length - 1];

          this.setActiveBoard(this.boardList[lastBoard], true);
        }
      },
      moveNextBoard() {
        let boardsIds = Object.keys(this.boardList);
        let targetIndex = boardsIds.indexOf(this.activeBoard) + 1;
        let target = boardsIds[targetIndex];

        if (target) {
          this.setActiveBoard(this.boardList[target], true);
        } else if (this.mdInfinite) {
          let firstBoard = Object.keys(this.boardList)[0];

          this.setActiveBoard(this.boardList[firstBoard], true);
        }
      },
      isHorizontallyInside(positionX) {
        return positionX > this.mountedRect.left && positionX < this.mountedRect.left + this.mountedRect.width;
      },
      isVerticallyInside(positionY) {
        return positionY > this.mountedRect.top && positionY < this.mountedRect.top + this.mountedRect.height;
      },
      handleTouchStart(event) {
        this.mountedRect = this.$refs.boardsContent.getBoundingClientRect();
        const positionX = event.changedTouches[0].clientX;
        const positionY = event.changedTouches[0].clientY;

        if (this.isHorizontallyInside(positionX) && this.isVerticallyInside(positionY)) {
          this.initialTouchPosition = positionX;
          this.canMove = true;
        }
      },
      handleTouchEnd(event) {
        if (this.canMove) {
          const positionX = event.changedTouches[0].clientX;

          const difference = this.initialTouchPosition - positionX;

          const action = difference > 0
            ? 'moveNextBoard'
            : 'movePrevBoard';

          if (Math.abs(difference) > this.mdSwipeDistance) {
            this[action]();
          }

          this.canMove = false;
          this.initialTouchPosition = null;
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

        if (this.mdSwipeable) {
          this.mountedRect = this.$refs.boardsContent.getBoundingClientRect();
          this.initialTouchPosition = null;
          this.canMove = false;

          document.addEventListener('touchstart', this.handleTouchStart);
          document.addEventListener('touchend', this.handleTouchEnd);
        }

        if (this.mdAuto) {
          this.start();
        }
      });
    },
    beforeDestroy() {
      if (this.parentObserver) {
        this.parentObserver.disconnect();
      }

      if (this.autoTransition) {
        window.clearTimeout(this.autoTransition);
      }

      window.removeEventListener('resize', this.calculateOnResize);

      if (this.mdSwipeable) {
        document.removeEventListener('touchstart', this.handleTouchStart);
        document.removeEventListener('touchend', this.handleTouchEnd);
      }

      this._destroyed = true;
    }
  };
</script>

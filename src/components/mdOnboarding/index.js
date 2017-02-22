import mdBoards from './mdBoards.vue';
import mdBoard from './mdBoard.vue';
import mdBoardsTheme from './mdBoards.theme';

export default function install(Vue) {
  Vue.component('md-boards', mdBoards);
  Vue.component('md-board', mdBoard);

  Vue.material.styles.push(mdBoardsTheme);
}

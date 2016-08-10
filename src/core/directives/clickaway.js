import Vue from 'vue';

export default {
  acceptStatement: true,
  priority: 700,
  update(handler) {
    var self = this;

    this.handler = function(ev) {
      if (!self.el.contains(ev.target)) {
        let res = handler(ev);

        ev.targetVM = self.vm;
        self.vm.$event = ev;

        self.vm.$event = null;
        return res;
      }
    };

    Vue.util.on(document.documentElement, 'click', this.handler);
  },
  unbind() {
    Vue.util.off(document.documentElement, 'click', this.handler);
  }
};

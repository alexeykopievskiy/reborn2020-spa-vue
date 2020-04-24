import Vue from "vue";
import Router from "vue-router";

//  Main Pages
import Index from "./views/Index.vue";

import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, /*header: MainNavbar,*/ footer: MainFooter }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

import Vue from "vue";
import Router from "vue-router";
import Default from "@/layout/Default.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Default",
      component: Default
    }
  ]
});

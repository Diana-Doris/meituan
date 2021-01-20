import Vue from "vue";
import Router from "vue-router";
import Default from "@/layout/Default.vue";
import blank from "@/layout/blank.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Default",
      component: Default,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "Index",
          component: () => import("../page/index.vue")
        },
        {
          path: "/changeCity",
          name: "ChangeCity",
          component: () => import("../page/changeCity.vue")
        },
        {
          path: "/login",
          name: "Login",
          component: () => import("../page/login.vue")
        },
        {
          path: "/register",
          name: "Register",
          component: () => import("../page/register.vue")
        },
        {
          path: "/s:name",
          name: "Goods",
          component: () => import("../page/goodList.vue")
        }
      ]
    },
    {
      path: "/blank",
      name: "Blank",
      component: blank
    }
  ]
});

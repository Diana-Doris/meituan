import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import router from "./router";
import "../src/assets/css/main.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive("document-click", {
  bind(el, binding, vnode, oldVnode) {
    // console.log("bind", el, binding, vnode, oldVnode);
    document.addEventListener("click", binding.value, false);
  }
  // inserted() {
  //   console.log("inserted");
  // },
  // update() {
  //   console.log("update");
  // }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./components/auth/auth.vue")
  },
  {
    path: "/registration",
    component: () => import("./components/reg/reg.vue")
  },
  {
    path: "*",
    component: () => import("./components/page404/page404.vue")
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});

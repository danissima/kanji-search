import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./components/home/home.vue")
  },
  {
    path: "/search",
    component: () => import("./components/search/search.vue")
  },
  {
    path: "/saved",
    component: () => import("./components/savedReciepes/savedReciepes.vue")
  },
  {
    path: "/reciepe/:reciepeId",
    component: () => import("./components/singleReciepe/singleReciepe.vue")
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import('./components/kanjiSearch.vue')
    },
    {
        path: "/readings",
        component: () => import('./components/readings.vue')
    }
]

export default new VueRouter({
    routes
})
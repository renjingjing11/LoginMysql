import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Login from '@/views/login'
import Home from "@/views/home/home.vue";
import Registry from "@/views/registry";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        redirect: "/login"
    }, {
        path: '/login',
        component: Login
    }, {
        path: "/home",
        component: Home
    }, {
        path: "/registry",
        component: Registry
    }]
})
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home"
import mainBox from "./components/main/mainBox"
import News from "./components/main/News"
import Users from "./views/user/Users"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:'/mainBox',
            name:'mainBox',
            component:mainBox
        },
        {
            path:'/news',
            name:'news',
            component:News
        },
        {
            path:'/user',
            name:'user',
            component:Users
        }
    ]
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vant from 'vant';
import 'vant/lib/index.css';
import './mock/index'
import axios from 'axios'

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

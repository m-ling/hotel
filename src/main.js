import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局组件
import MyHeader from './components/whole/Header.vue'
import MyFooter from './components/whole/Footer.vue'
import Login from "./components/whole/login.vue"
import Prompt from "./components/mini-component/prompt.vue"

Vue.component('my-header',MyHeader);
Vue.component('my-footer',MyFooter);
Vue.component("login",Login);
Vue.component("prompt",Prompt)


//外部插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueFlatpickr from 'vue-flatpickr'
import VueFlatPickr from 'vue-flatpickr-component';



//样式引入
import 'swiper/dist/css/swiper.css'
import 'vue-flatpickr/theme/airbnb.css'
import 'flatpickr/dist/flatpickr.css';
import 'normalize.css'
import '@/assets/font/font.css'
import { compile } from 'vue-template-compiler'

//挂载
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueFlatPickr);
// Vue.use()
Vue.config.productionTip = false

//----- axios--strat-------------------------
import axios from 'axios'/**1.引入axios */
axios.defaults.baseURL='http://127.0.0.1:4040'/**2.配置服务器基础路径 */
axios.defaults.withCresentials=true/**3.配置保存session信息 */
Vue.prototype.axios=axios /**4.axios 注册vue */
//---end---------


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

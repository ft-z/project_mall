import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'  //如果不加斜杠，本句会被当作插件识别

//mock开关
const mock=false;
if(mock){
  require('./mock/api');
}

// 根据前端的跨域方式做调整
// axios.defaults.baseURL='/api';
axios.defaults.baseURL='https://www.easy-mock.com/mock/5ef85f12d932361141717aa1/mimall';
axios.defaults.timeout=8000;

// 根据环境变量获取不同请求地址
// axios.defaults.baseURL=env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    // 井号代表哈希路由
    window.location.href='/#/login';
  }else{
    alert("main.js res.msg",res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

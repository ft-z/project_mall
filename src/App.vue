<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import axios from "axios";
// import jsonp from 'jsonp';
// import storage from './storage/index'
// import storage from './storage'
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // storage.setItem('abc',{'a':1},'user');
    // storage.clear('a'); //删除和“user”同级的“a"
    // storage.clear('a','user');

    // 本地加载请求静态json文件
    // this.axios.get("/mock/user/login.json").then(res => {
    //   this.res = res;
    // });
    // 使用easy-mocl平台实现数据mock
    // this.axios.get("/user/login").then(res => {
    //   this.res = res;
    // });
    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

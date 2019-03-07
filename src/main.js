// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//配置axios的请求地址路径
axios.defaults.baseURL='https://wd4898300794nhmcsp.wilddogio.com/'
axios.get('./get.json')

Vue.config.productionTip = false
//全局守卫
// 当我刚进入到localhost:8080的时候，让当前的页面跳转到对应的登录页面
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login' || to.path=='/register'){
//     next()
//   }else{
//     alert('对不起，您还没有登录')
//     next('/login')
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

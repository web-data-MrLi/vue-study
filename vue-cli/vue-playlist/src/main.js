// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
/*配置路由*/
const router=new VueRouter({
	  routes:[
	  	 {path:"/Home",component:Home },
	  	 {path:"/HelloWorld",component:HelloWorld}
	  	
	 ],
	 mode:"history"
	
	
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

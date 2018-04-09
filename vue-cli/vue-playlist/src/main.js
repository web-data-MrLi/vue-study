// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'Vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
/*配置路由*/
const router=new VueRouter({
	  routes:[
	  	 {path:"/",
	  	   component:IndexPage  
	  	 }
	  	 
	  	
	 ],
	 mode:"history"
	
	
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout},
  template: '<layout/>'
})

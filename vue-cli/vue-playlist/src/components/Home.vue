<template>
  <div id="home">
     <app-header v-on:dianwo="updian($event)" v-bind:title="title"></app-header>
  	 <user v-bind:uss="chars"></user>
  	 <user v-bind:uss="chars"></user>
  	 <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import User from './User'
import Heard from './Heard'
import footer from './footer'

export default {
  name: 'home',
  data(){
  	return {
  	chars:[
        /*{name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false},
        {name:"琛琛",position:"会计",show:false}*/
      
      ],
      title:"我是一个值"
  }
  },
  methods:{
  	updian:function(title){
  		this.title=title
  	}
  },
  components: {
    "user":User,
    "app-header":Heard,
    "app-footer":footer
  },
  created(){
  	 this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
  	 	 this.chars=data.body;
  	 	
  	 })
  }
}
</script>
<style scope>
	h1{
		color:purple
	}
</style>

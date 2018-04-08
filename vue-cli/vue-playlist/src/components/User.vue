<template>
  <div class="user">
   <ul>
   	    <li v-for="us in uss">
   	    	<h2>{{us.name}}</h2>
   	    	<h3>{{us.email}}</h3>
   	    </li>
   	    <button v-on:click="deleteUser">删除</button>
   </ul>
  </div>
</template>

<!--数组和对象那都是应用-->
<script>
export default {
  name: 'user',
  props:["uss"],
  data () {
    return {
      
    }
  },
    methods:{
    	deleteUser:function(){
    		this.uss.pop()
    	}
    	
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.user{
		 width:100%;
		 min-width: 1200px;
		 margin: 40px auto;
		 padding: 0px 10px;
		 box-sizing: border-box;
	   }
	   ul{
	   	display: flex;
	   	flex-wrap:wrap ;
	   	list-style-type: none;
	   	padding: 0;
	   }
	   li{
	   	flex-grow: 1;
	   	text-align: center;
	   	flex-basis: 200px;
	   	padding: 30px;
	   	border: 1px solid #42B983;
	   	margin: 10px;
	   }
</style>

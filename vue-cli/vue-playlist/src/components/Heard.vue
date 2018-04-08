<template>
  <header class="header">
  	<button v-on:click="changtitle">点我</button>
  	 <h1>{{head}}</h1>
  	 <h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  name: 'app_heard',
  props:["title"],
  data () {
    return {
       head:"Heelo ! 丫头"
    }
  },
  methods:{
  	changtitle:function(){
  		/*this.title="我爱你"*/
  		this.$emit("dianwo","子向父传递")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		background: lightblue;
		padding: 10px;
	}
	h1{
		color:#42B983;
		text-align: center;
	}
</style>

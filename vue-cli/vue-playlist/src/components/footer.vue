<template>
  <footer class="footer">
  	 <h1>{{head}}</h1>
  	 <h2>{{title}}</h2>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
   props:["title"],
  data () {
    return {
       head:"Heelo ! 老头"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{
		background:#42B983;
		padding: 10px;
	}
	h1{
		color:lightblue;
		text-align: center;
	}
</style>
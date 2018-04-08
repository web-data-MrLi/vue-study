<template>
  <div id="app">
  <ul>
  	 <li><router-link to="/Home">home</router-link></li>
  	 <li><router-link to="/HelloWorld">hellowoeld</router-link></li>
  </ul>
  	
  	<router-view></router-view>
  </div>
</template>
<script>
import User from './components/User'
import Heard from './components/Heard'
import footer from './components/footer'

export default {
  name: 'App',
  data(){
  	return {
  	
  }
  },
  methods:{
  	
  },
  components: {
    
  }
}
</script>
<style scope>
	h1{
		color:purple
	}
</style>

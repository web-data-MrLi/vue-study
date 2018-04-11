<template>
<div class="slide-show" @mouseover="clearInv" @mouseout="runIn">
    <div class="slide-img">
      <a :href="slides[nowIdex].href">
      	 <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIdex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIdex].src">
        </transition>
      </a>
      
       
    </div>
    <h2>{{ slides[nowIdex].title }}</h2>
    <ul class="slide-pages">
    	<li @click="go(prevIndex)">&lt;</li>
    	<li v-for="(item,index) in slides" @click="go(index)">
    	  <a :class="{on:index==nowIdex}">{{ index+1}}</a>
    	</li>
    	<li @click="go(nextIndex)">&gt;</li>
    </ul>
  </div>
	
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  
  },
 data () {
    return {
       nowIdex:0,
       isShow:true,
       head:"Heelo ! 丫头"
    }
  },
   computed: {
    prevIndex () {
      if (this.nowIdex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIdex - 1
      } 
    },
    nextIndex () {
      if (this.nowIdex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIdex + 1
      }
    }
  },
 methods:{
 	go (index){
 	 this.isShow = false
      setTimeout(() => {
        this.isShow = true
       this.nowIdex=index
      }, 10)
 		
 	},
 	runIn(){
 		this.invId=setInterval(()=>{
 		  this.go(this.nextIndex)
 		},this.inv)
 	},
 	 clearInv () {
      clearInterval(this.invId)
    }
 	
 },
 mounted(){
 	this.runIn()
 }
  
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
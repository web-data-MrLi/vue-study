<template>
 <div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in chooselists"
          @click="choosemide(index)"
          :class="{active:index===nowIndex}">
           
          {{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
	props:{
	   chooselists: {
       type: Array
       }
	},
	data(){
		return {
			nowIndex:0
		}
	},
	methods:{
		choosemide(index){
		this.nowIndex=index
		this.$emit("on-choose",this.chooselists[index])	
		}
		
	 }
	}
</script>

<style>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list >li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
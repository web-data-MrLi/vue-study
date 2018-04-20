<template>
 <div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in choosemuch"
          @click="choosemide(index)"
          :class="{active:checkActive(index)}">
           
          {{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
	props:{
	  choosemuch: {
       type: Array
       }
	},
	data(){
		return {
			nowIndex:[0]
		}
	},
	methods:{
		choosemide(index){
		if(this.nowIndex.indexOf(index)===-1){
			this.nowIndex.push(index)
		  }else{
		 this.nowIndex=_.remove(this.nowIndex,function(idx){
		 	console.log(index,34)
				return idx !== index
				console.log(idx,36)
			})
		
		}
		let nowObjArray = _.map(this.nowIndex, (idx) => {
          return this.choosemuch[idx]
        })	
		this.$emit("on-change", nowObjArray)	
		},
	 checkActive (index) {
       return this.nowIndex.indexOf(index) !== -1
      }
		
	 }
	}
</script>

<style scoped>
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
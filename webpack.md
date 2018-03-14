   vue的学习
   vue的介绍
vue是轻量级 的前端MVM框架,吸收了react的组件，借鉴了angular的命令，vue的核心库关注视图层，单页面应用提供驱动。
vue的安装
   注意1.用淘宝镜像，用cnpm代替npm，npm install -g cnpm --registry=https://registry.npm.taobao.org。
    2.cnpm -v 可以看一下cnpm的版本号码
    3.# 全局安装 vue-cli
		cnpm install --global vue-cli
		# 创建一个基于 webpack 模板的新项目
		vue init webpack my-project
		webpack打包压缩，my-project项目名称
		# 安装依赖，走你
		cd my-project
		cnpm install  以后会出现node-modol
		type package.json
		cnpm run dev  启动服务器，然后localhost:8080看一下。
脚手架工具搭建完成，
vue页面
   通过webpack来打包，主要是来学习javascript，css，template这个三块，
   
vue中的对象；
  data对象，{{}}或是this.a
  methods:方法，
  watch：监听；对数据的监听，
vue的模板指令
 数据渲染：{{}} v-text不会保持页面的结构     v-html保存页面结构
 控制模板隐藏
   v-if 不渲染
   v-show  通过dispaly来隐藏
 渲染循环模板
   v-for="item in items"
   item是循环体，items是循环数据源
 事件绑定
   v-on：click；
   @click:
 属性绑定
   v-bind：src
        或是 ：class{对象} [字符串渲染，字符串渲染] [字符串，{对象}]
        
 vue的基础框架，
   index.html是入口
   注册组件以后才能用，驼峰的写法写成小写
   import类似于es6的写法，相当于require
 
 2018年1月3号     
   组件树的列子和理解组件的注册和应用
   先设置成全局的变量,在my中用components在把这组件引入，就可以子子在body中使用aa这组件了
   var bb={
      template:"<div>{{aa}}<div>",
     }
   var aa={
      template:"<div>{{aa}}<div>",
       components:{
           'aa-child':bb
         }
     }
   var my=new Vue({
          el:"#body",
          template:"<div>{{aa}}<div>",
          data{
            aa:'banner'
          },
          components:{
            'a-a':aa
         })
 
 解决data的问题，避免data写成值，这个时候页面上同时用了这个data的组件，改变data值的时候其他的组件也会改变，
 解决方案。data: function（）{
			     return {
			        f:1,
			        q:2
			       }
			     }
 在vue中$开头的使用数据和使用方法,在vue中的实列方法，就是$开头的。
 var my=new Vue({
          el:"#body",
          template:"<div>{{aa}}<div>",
          data{
            aa:'banner'
          },
          components:{
            'a-a':aa
         })
 my.$data
 my.$on("emit",funvtion(){
 
 })
 指令再一次介绍：
 v-on：keydown.enter="";意识是鼠标按下并且按的是enter键的时候，事件才会触发；
 参数是冒号，修改器的话一般是点后边跟的。
 内置组件，vue中，<component :is=""></component>内置组件本身就带有自带的方法，
 
 vue1.0和2.0的区别
 title="msg"会出错的，写成    ：title="msg"
 在vue中的v-for循环是写在子元素身上的，不是写在父元素身上的。要想知道循环体中的序号，v-for="(a,index) in b" 这的index必须声明一下
 渲染数据的时候，数组和对象渲染的不一样
 vue2.0不区分大小写了，不用写成驼峰的也可以的
v-for循环渲染组件，先把组件引进来，在注册这个组件，以标签的形式写好，把v-for循环写到这个标签中，这样写的好处是可以动态的给子组件传值。
 属性的办定：v-bind或是：跟属性；使用这样的办定的话，就可以动态的改变这些值
 条件渲染v-if和v-show；配合v-else
 2018年1月5号
  1.vue事件办定和表单
   v-on：click缩写@click
   v-on中的修改器
   input、CheckBox、select中的循环和，value值。
  2.计算属性和属性监听
     计算属性不用实时的监听，
     computer：{
       aa （）{
       
       }
     }和方法计算属性的方法不同，一个是实时的，一个一次性的，
  属性监听watch。
  属性传的的也是-代替驼峰
     父向子传递，用props接受申明，props有数组和对象两种，对象的话，传的值就会多点
    还有插槽功能slot，写在子组件上
    
vue的高级功能
   过渡和动画， 
 css和js过渡。
 
 2018年1月10号
作者：李星亮
内容：vue的学习，
css和js 的过渡
jquery引入的时候放在入口中,index.html中
vue的高级功能自定义指令
directives
自定义指令局部的写在自己的组件中，全局的写在声明和初始化的文件中。
列子，自定义指令获取光标，
vue的高级功能c----插件
安装路由
cnpm install vue-router --save
在声明中引入vue-router后，还得用vue.use（）引入，才可以在根目录用
实体化vue-router，写在跟组件中才可以用，
css中也有一些属性控制css样式，控制是全局还是局部的。
load和router、资源是vue经常用的核心
    2018年3月6号
 *vue的再一次学习
   *创建一个 Vue 实例
          每一个vue的组件都是vue的实列话。
   *vue的数据
        当一个vue的实列被创建时，会向vue的响应式系统中加入data，data对象中能找到所有的属性，当这些属性发生变化时候，视图将会更新，及更新为最新的值。
   *阻止现有数据的修改
    Object.freeze(加上要组织的对象)方法；在之后的操作中都改变不了之前 的数据；
    2018年3月7号
    vue的生命周期，生命周期钩子的 this 上下文指向调用它的 Vue 实例。
  *模板语法
       插值，{{}}双大括号渲染值，可以通过 v-once 指令对差值进行一次性的确定。
   *v-bind;v-on指令是可以接受一些参数的和属性值的，
    v-bind的缩写是：，v-on的缩写是@.
    2018年3月8号
   *vue的计算属性
    vue中的一些计算属性可以用用函数来绑定计算；也可以用计算属性侦听一些属性的变化，从而更新dOEM的变化。
    vue绑定class：1.以对象的形式，有以下几种情况，
                  <div class="static"
                        v-bind:class="{ active: isActive, 'text-danger': hasError }">
                  </div>
                  data: {
					  isActive: true,
					  hasError: false
					}
				   渲染的结果是<div class="static active"></div>
				  在一种方法渲染的结果是以对象的形式:
				  <div v-bind:class="classObject"></div>
						data: {
						  classObject: {
						    active: true,
						    'text-danger': false
						  }
						}
				 第三种渲染的方法是以计算属性的方法渲染：
				  <div v-bind:class="classObject"></div>
						data: {
						  isActive: true,
						  error: null
						},
						computed: {
						  classObject: function () {
						    return {
						      active: this.isActive && !this.error,
						      'text-danger': this.error && this.error.type === 'fatal'
						    }
						  }
						}
				   以上三种方法渲染是十一对象的形式渲染的，第三种方法最强大。
				   
		数组的形式绑定class；
		  第一种方法:列入，数组的方式直接渲染。把数据d类名放到data中
		  
		  <div v-bind:class="[activeClass, errorClass]"></div>
					data: {
					  activeClass: 'active',
					  errorClass: 'text-danger'
					     }
   *注意：绑定class的也可以用在组件上；
   *绑定内联样式：
     直接绑定到一个样式对象通常更好，这会让模板更清晰：
	<div v-bind:style="styleObject"></div>
	   data: {
		    styleObject: {
		       color: 'red',
		       fontSize: '13px'
		      }  
   *2018年3月12
       vue中的条件渲染
         1.v-if v-else-if v-else,三个条件渲染；
         2.vue中的key值会记录并且高效的渲染input框中的值
         3.v-show的用法是展示选项的内容，不支持else和<template>；
         v-show和v-if的区别：
                     一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换， 
                     则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
         v-if和v-for的区别；
                同时使用时，v-for比v-if有更好的优先级；
        vue中的列表渲染
          v-for="item of items"中的of可以用in替代，并且渲染的时候还可以用index值
                 也可以用v-for中的item来迭代和渲染所要渲染的数据，也可以用（item，key）用key值来提供键值。
        *总结：
           <div v-for="(value, key, index) in object"></div>v-for中可以传三个值。
        vue中的数据更新检测
        
      vue的事件处理
        1.v-on监听dom事件，并在触发的时候，执行一些javascript；
                 事件处理的方法，也可以在v-on上办定一个方法，也可以直接调用；
        2.事件的修饰符，可以用一些修饰符来阻止事件的发生 ，修饰符是由点开头的在指令之后的，例如;修饰符是由点开头的;
        3.vue中的修饰符号有，点击事件只触发一次的修饰符，.once;
        4.v-model与表单事件办定，在v-model和input绑定的同时，可以将数据渲染到dom上；
   *2018年3月14号
        组件
        1.创建vue的实例：
          new vue（{
             el："#app",
          }）
        2.注册一个全局组件，可以使用这个方法：
          Vue.component('my-component', {
			  // 选项
			})
        3.注册一个局部组件，注意不是每个组件都有必要写成一个全局的组件，
          Vue.components('my-component', {
			  // 选项
			})
        4.DOM 模板解析注意事项
                     使用<ul>、<ol>、<table>、<select>,把组件包裹在标签之中会获取不到，必须使用vue的特殊的属性is和写，列入：
                     <table>
						  <tr is="my-row"></tr>
					 </table>
       
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
       5.data必须是函数，如果是是三个相同的组件用的是一个data的话，这个时候，data就会被感染，
       6.组件之间的组合，父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息
       7.使用 Prop 传递数据；注意的是，在子组件中需要声明一下prop，然后像data一样把数据传递过去；
       8.动态的prop，可以使用v-bind来动态的绑定父组件的动态，
       9.面量语法 vs 动态语法，注意传递数值的时候，不能的当纯传递一个值，用v-bind的传递的话才是传递的那个值，而前者是传递的是一个字符。
       10.在根组件上对原声 的事件一个监听，v-on.native;
       11.非父子间的组件的通信，在vue文档中有一种解决的办法，
   2018年3月19号
            过渡和动画
        1.常用的过渡一般是css过渡，推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响
       生产环境的部署
        
 //腾讯课堂的总结      
       vue的文档
                1.实列话vue对象的时候，vue中的v一定是大写，否则会报错；
                2.在html中调用methods时候用传入的值是字符串的形式，直接传入值的话会报错的；
                3.绑定属性用v-bind，有时候需要插入一个标签的时候用v-html来绑定；
             第五课 事件      
                    总结：点击事件，双击事件，鼠标事件，绑定事件的两种放法，
                  1.@：click错误的写法，@click正确的写法。
                  2.双击事件要注意的是v-on:dblclick；
              第六课 事件中的修饰符
                     总结：阻止一些事件的发生，vue中有一些特殊的修饰符；
               第七课 键盘事件以及键值修饰符；
                      总结：键盘的一些事件，keyup.enter按住anter键的时候才会触发这个方法；
               第八课  vue中的双向数据的绑定
                    总结：双向数据办定的话是有输入就有输出；
                1.有两种方法，v-model中绑定的是data中的属性；ref绑定属性的方法；
                2.双向数据绑定的一般是input，select，textarea；在这三种标签中经常出现；
               第九课   vue计算属性computed;非常中要的属性；
                    总结： 耗时，还有就是大量的搜索是会用到这个计算属性，一把就是用写在methods方法；
                                两者的不同之处就是计算属性分的非常明确，点击那个就是执行那个，而methods的方法测试点击一个所有的都会执行；
              第十课  vue动态的绑定css；
                     总结：绑定css，class后面跟的是对象，而这个对象要么事true，要么事flase；可以利用计算属性中的compClasses来给便签添加许多属性；
               第十一课  vue的指令
                     总结：v-if为假的时候，这个标签是不存在的，而且不会占位，为真的会出现；
                  v-show和v-if的区别是，一个占位一个不占位； 
              第十二课 v-for指令
                     总结：template使用这个标枪替换div，可以避免div的在页面上的多次出现；如果v-for循环的是数组中的很多对象，然后想拿这对象的里面的属性，可以
                                在循环这个对象；
              第十三课  vue中的实战demo；
                      总结：思路一定要清楚，分布来写列子；
               第十四课  实列多个 vue对象；
                      总结：在多个实列话的对象中，我们可以在其中一个实列话对象中改变其他实列话的属性；
                                 当人也可以在外边直接名字加上属性改；
               第十五课 vue初始组件的应用
                      总结 ：在组件中的data，每一次都返回，不建议在在外面建立一个公共的，这样会影响，点击一个，所有的都会改变；
            Vue.component()组件，可以方便的建立多个组件，然后在不同的位置调用；  
               第十六课  vue搭建脚手架CLI
                      总结：CLI就是vue的脚手架工具；使用loder的可以吧es6的语法变成es5的语法；
                                 进入桌面的命令行：cd %userprofile%\desktop回车后cd文件名字； 
               第十七课  介绍SRC文件流程及跟组件app
                      总结： 先index.html-----》main.js(实列话一个vue对象)---->app.vue(组件中的东西会插入根组件中)；
                                 子组件中的三大模板，模板，逻辑，样式；
               第十八课 vue组件嵌套
                      总结：组件引入的有两种方式，一是局部的组件，还就是全局的的组件的引入；
                                 局部引入组件的时候要注意，1.要引入。2.要注册。列入
             components：{"user":User}前面的user是要在根组件中引用的，后面的组User是你要注册的组件；自己写的组件的，名字不能和系统里面的标签一样；
               第十九课  组件css作用域；
                       总结： css中有个scope，这个写在style中的话，就是给对面的css加了一个标识，打开检查工具可以查找的；
               第二十课  实战demo(组件嵌套)
                       总结：组件嵌套的时候一定要注意组件实列话的时候，组件的name名字，父组件和子组件的要对应了，
               第二十一课 vue组件传值
                      总结：父组件向子组件传值的时候，在字组件中写上props，然后注意在父组件中的办定的那个值，v-bind：这个值是随便写，="这个值是写data中的数据"。当时注意在字组件
                      中写的时候，循环遍历的时候是写：v-bind：后面的值；
               第二十二课 vue传值和传应用
                       总结： 传值一般是字符串，boolean；传应用是数组和对象；
               第二十三课 事件传值子向父
                       总结：子向父传值的时候，注册一个事件，this.$emit("事件名字"，"所传的值")，在父节点中接受的时候v-on：这个名字是事件名字="起个名字（接受 的参数一定是$event）" ,
                                 接下来子父节点中写方法就可以了；      
               第二十四课  生命周期
                       总结: 从一个组件创建和销毁的一个过程就是生命周期；
               1.beforeCreate 没有创建组件的时候用这个方法，就是对data的里面的属性做一些处理
               2.created     组件创建好，当时dome没有弄好，在这个里面可获得网络的请求的接口；
                                    注意：没有“el”和template的话，生命周期都会结束；有一个就不会结束；
               3.beforeMount   虚拟的dome；
                                     注意： 在这之间的就是把模板编译完；在4执行完后，页面已经加载完了；
               4.mounted     
               5.beforeUpdate  组件子在更新之前调用的方法；
               6.updated       组件更新之后执行的方法，执行后页面已经展现出来了；
               9.beforeDestroy  销毁之前的调用；
               10.destroyed    销毁之后调用的方法；
                 第二十五课     vue的路由和http
                            总结：在vue中路由就是跳转；a便签点击就有请求，路由的不会这样；
                 1.  先进入目录，在引入路由，vue-router；
                 2.在main.js中引入路由；
                 3.使用Vue.use(VueRouter)和配置一下路由，参数是routes[{路径，跳转的组件}]，还有处理#号的问题。就是mode："history";
                 4.在实例化中在把路由rotuer写上；
                 5.在页面上跳转的时候不能用a标签，要用router-link这个双标签<router-link to="/这写的你要跳转的组件的名字">hellowoeld</router-link>
               http的总结
                 1.http://jsonplaceholder.typicode.com/地址
                 2.先引入Vue-resource安装上
                 3.在引入在使用； created(){
										this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
										 this.chars=data.body;
											})
									  }
                  4.第三条是使用数据连接和渲染的一个小列子；
                     第二十六课 vue-x
                 https://ke.qq.com/user/index/index.html#cid=226569&tid=100267446&fr=2&term_id=100267446
                                 总结： vuex和vue的路由一样，也是vue的插件；
                 actions  state  Mutation在应用vue的时候要注意这三个点额动向；
                     第二十七课   安装json-server，来模拟后台造假数据；
               npm install json-server --save
                     第二十八课  图片的映射；
                     第二十九课  组件的总结：
                                     在写单选还是多选的组件上的遇到的问题；1.初始值的设置，2.效果的办定，：class="{css类名：判断的值.可能是一个方法里面传的值}"
                                           3.lodash函数的应用；  
                                           4.腾讯课堂看到第八课
 *es6的学习
        第一课：ECM的发展史
        第二课：声明变量，let和const
            1.在代码块，应用let的时候，先定义在使用，不然会报错的，没有预解析的说法。 
            2.不能重复定义变量
            3.for循环中，for循环是父级作用域，里面又有一个定义，这不算重复定义；
         const定义的变量不能修改，是常量；什么事常量，就是你已经很明确的东西了；
            1.const定义的值，之后不能修改，修改就会报错；(在一个块中不能修改值，在不同的块中可以的)
            2.es6中也有专门冻结的，Objectf.reeze("数组"，"对象")
    **解构赋值(数据交互)
            1.列如：let [a,b,c]=[1,2,3]
                       console.log(a,b,c)
            2.左右两边要保持结构一直；
             json
               let {name,age}={
                      name:"米斯特李"，
                      age:"18"
                     }
             3.结构的时候可以给默认的值
                lef [a,b,c="没有值"]=[1,2]
     **字符串模板
          ``字符串模板
                              优点：可以随意的换行；
                 `${变量的名字}`
                         关于字符串的一些东西
                             字符串查找
                str.indexOf(要找的东西) 返回 的是索引值（位置），没有找到返回的是 -1，
                str.includes(要找的东西)返回是true/false,有时候结合正则来应用。
                navigator.userAgent
                
                               判断浏览器 includes
                              字符串是否以谁开头
                str.startsWith(检测的值)   可以用来检测地址
                str.endsWith(检测的值)     可以用来检测后堆名字png jpg...
                str.repeat(重复的次数)      可以用来重复东西
                              填充字符串
                str.padStart(整个字符串的长度，填充的东西)  往前填充；
                str.padEnd(整个字符串的长度，填充的东西)  往后填充；
                
   ** 函数的变化
           1.  默认参数
	           function show({x=0,y=0}={}){
	             console.log(x,y)
	            }
	            show();
           2.函数的参数被定义了，不能在使用let const的声明；否则会报错的；
             function show(a=18){
                 let a=20；
	             console.log(a)
	            }
	            show();
           3.扩展运算符，三个点 ...  '可以把字符串变数组，还有就是把数组变成字符串'  当剩余参数的时候，放在最后；
                                 三个点也可以复制数组
                let a=[1,2,3]
                let b=[...a]; es6的用法 
                let c=Array.from(a) es5的复制数组；
                
           
           4.箭头函数
                ()=>箭头这边是return出来要写的；
                ()=>{
                                                    写语句
                     return
                 }
                                    注意：  this的问题，定义函数所在的对象，不在是运行环境所在的对象；
                                                  箭头函数中没有arguments，用`...`代替；
                                                  箭头函数不能当构造函数；
           5.数组
              forEach就是用老替代for循环的；
              let atr=["apple","orging","tomato"]
               atr.forEach(function(val,index,arr){
                  console.log(this,"值"，"下标"，"数组")
                  
               },123) 
               
               arr.map() 非常有用，坐数据交互‘映射（也就是一对一吧）’
                                                               正常情况下，需要配合return，返回一个新的数组；
                                                               如果没有返回值，相当于forEach
                                                             注意：要用map，一定要有返回值，列入，重新整理数据；
               arr.filte()过滤数组里面一些合格的数据，返回新的数组；
               
               arr.some()类似于查找，如果数组里面某一个条件符合，返回true；
               
               arr.every()数组里面所有查找元素都符合条件，才会返回true；
               
                                     以上这些都和forEach的用法一直的，一般第二个参数不会用的；用也是改变this的指针问题的；
               
               arr.reduce()从左到右，求数组的和、阶乘
               let arr=[2,3,2]
               let newArr=arr.reduce((prve,cur,index,arr)=>{
                 return Math.pow(prve,cur)
                                  或者
                 return prve**cur
               })
               
               arr.reduceRight()
               
        *ES2017新增的一个运算符；
                Math.pow(2,3)
                                 改为
                2**3
        *数组身上新增的，arr.keys()数组下标    arr.entries()数组某一项
             for(let [key,val] of arr.entries()){
             }
             
        *Array.from()
                                        作用：把类数组（获取一组元素，arguments..）转化成数
                                        个人观点：具备length这个东西，就靠谱；
                                                          可以把json对象转成成数组，但是必须要有length这个键值对；
        *Array.of()把一组值转成数组；
        *arr.find()找出符合第一个符合条件的数组的成员，如果没有找到，返回undefined；
            lef arr=[1,2,3,4]
            
            let A=arr.find((val,index,arr)=>{
              return val>3;
            }) 
             console.log(A)  
             
        *arr.findIndex()找的是第一个出现的位置             
        *arr.fill(填充东西，开始的位置，结束的位置)  
        *在ES62016增加的
             arr.includes() 有值的返回的是true； 
          
 *6对象简介语法以及对象新增
	     let name="misite"
	     let age="18"
	     let json={
	        name,
	        age,
	        show(){   //不能用箭头函数
	          return this.name
	        }
	      }
       * OBject.is("","")比较两个值是否相等
                          解决了NaN的问题，还就（+0，-0）
	   * Object.assign();
	             用途：
	                     用来合并对象那;
	                     也可以复制数组，对象等等；
		    let 新的对象=Object.assign({新的json的对象}，插入的目标对象...)  注意：后面的会覆盖前面的； 
	    *ES2017
		 	  Object.keys();
		 	  object.entries();
		 	  obeject.values();
		 	   列入：
		 	    let json={
		 	         a:1,
		 	         b:2
		 	      }
	        for(let key of Object.keys(json)){
	                                出来的就是key值
	           }
                      对象身上也可以加上...三个点
            
       Promise:承诺，许诺
                                      解决异步  传统的方式回调函数，事件；
               
                              语法 ：let promise=new Promise(function(resolve,reject){
                              resolve 成功回调
                              reject  失败回调
                           })
                     promise.then(res=>{
                                                             成功                                
                     }.erro=>{
                                                            失败
                     }
                     ).catch(res=>{
                                                             也是失败
                      })
            Promise.resolv("") 将现有的东西转化成一个promise的对象，resolve的状态，成功的状态
                new promise(resolv=>{
                   resolv ("")
                })
            
            Promise.reject("") 将现有的东西转化成一个promise的对象，reject的状态，失败的状态
 
				new promise((resolv,reject)=>{
				          rreject ("")
			          })
            Promise.all([a1,a2,a3]):把promise打包。扔到一个数组里面，打包完还是一个promise的对象；
                                                     必须确保，所有的promise的对象都是成功的对象；
            Promise.race([a1,a2,a3])只要有一个成功，就返回；
  
 *7模块化
       es6  统一了客户端和服务端 模块的话的应用；
                 注意：需要放到服务环境上去
           a）.如何定义模块化
                 export导出
                 
                 export {
                  a as  b,
                  aa as  bb
                 }
                 
           b）.如何使用模块化
                 import的引入
                  使用模块
            <script type="model"></script>
      import的特点：
          1）import的可以相对路径，也可以是绝对路径；
          2）import的模块只会导入一次，无论你引入多少次；
          3）import "../文件名字"  如果这么用，相当于引入文件；
          
          inport {a as b} from 引入文件的路径
                         有提升的效果，import会自动提升到顶部，首先执行；
       export 的 特点
          default 这个导出的不用加{}；其余的都的加{}；
                         
                         导出的模块，如果里面定时器改了，外边的模块也会改
       inport()动态的引入；默认的inport不能写在if等语句中；
                           返回值是promise对象；
           inport().then(red=>{
           
           })
	           优点：     按需加载
			         可以写if
			         可以写动态的路径
           
  
  
  
         
 **node的基础知识；
     dir是列出当前文件下的目录；
     cd 进入相近的如的目录；
           目录
      .当前目录
       cd .. 回到上一级目录  
       md 文件夹名字  (创建件文件夹)
       rd 删除文件夹名字  (删除文件夹)
                 打开一个文件，直接输入文件夹的名字
         环境变量  
              当我们在命令行中打开文件或是调用一个程序时，系统会首先在当前目录下找个文件或是程序，
              如果找打了打开，如果没有找到，会去环境变量中去查找path的路径中去寻找，直到找到为至，否则会报错；
      
      
      所以我们需要把一些经常访问的文件或者程序添加到path的路径中，这样的话，我们可以在任意的位置和访问这个文件和程序；
      
      
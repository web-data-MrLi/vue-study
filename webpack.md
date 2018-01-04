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
 
 
 
 
 
 
 
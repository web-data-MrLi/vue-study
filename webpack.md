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
 
 
 
 
 
 
 
 
 
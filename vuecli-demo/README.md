# vuecli-demo

## Project setup
```
npm install   //安装依赖包
```

### Compiles and hot-reloads for development
```
npm run serve //启动项目
```

### Compiles and minifies for production
```
npm run build  //项目打包  
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


 
vue create vuecli-demo //创建
npm run serve   //启动项目
ctrl+c          //关闭项目
 

 package.json
"name": 包名
"version": 包的版本号
"main": 入口文件，一般都是 index.js
"scripts"：支持的脚本，默认是一个空的 test
"keywords"：关键字，有助于在人们使用 npm search 搜索时发现你的项目
"description": 包的描述--需要的插件
"author": 包的作者
"repository": 包代码的repo信息，包括type和URL，type可以是git或者svn，url则是包的repo地址。
"license"：默认是 [MIT],项目许可证，让使用者知道是如何被允许使用此项目。
"dependencies": 生产环境依赖包列表
"devDependencies": 开发环境、测试环境依赖包列表
"engines": 声明项目需要的node或npm版本范围
 


"scripts": { "serve": "vue-cli-service serve"}
"scripts": { "start": "vue-cli-service serve" } 
 npm start 即可启动、

package-lock.json 不管它
babel.config.js  处理 es6等
.gitignore       忽略文件上传git

public 
     ico         图标
     index.html  主入口文件
      
node_modules  项目插件 git打包可不上传，但没该文件夹内内容无法启动   安装: cnpm install   会自动去找需求下载的插件

src  源代码
    assets  静态文件  图片 css ....
    components  组件
        驼峰命名 .vue



问题：无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。

经查，原因：现用执行策略是 Restricted（默认设置）

解决办法：
1.win+X键，使用管理员身份运行power shell
<img src="https://img2018.cnblogs.com/i-beta/1696371/201912/1696371-20191222171654974-716476594.png"/>
2.输入命令：set-executionpolicy remotesigned
3.输入”Y“,回车，问题解决。
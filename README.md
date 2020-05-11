 

git修改仓库名字之后，本地仓库重定向问题<br>
git remote set-url origin "new url"<br>


vscode git代码提交：https://www.cnblogs.com/pengjunhao/p/6761557.html<br>
gist无法登录：https://www.zhihu.com/question/20732532<br>

192.30.253.118 http://gist.github.com<br>
192.30.253.119 http://gist.github.com<br>
或者<br>
修改hosts<br>
1.打开Dns检测|Dns查询 - 站长工具：http://tool.chinaz.com/dns<br>
2.在检测输入栏中输入http://github.com官网<br>
3.把检测列表里的TTL值最小的IP输入到hosts里，并对应写上github官网域名<br>



本地项目推送git<br>
1、git init 把这个文件夹变成Git可管理的仓库 <br>
2、使用命令 git add . 把项目添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件<br>
3、用 git commit -m "第一次提交"把项目提交到仓库。<br>
4、在Github上创建好Git仓库后通过命令git remote add origin git@github.com:xxxx/xxx.git和本地仓库进行关联<br>
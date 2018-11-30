### 本次安装的版本是 4.0
### 安装路径为D:\MongoDB\4.0 
### 安装系统为 Windows 64bit 

1. 到官网下载对应平台的安装包，[下载地址](https://www.mongodb.com/download-center/community)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181129171626764.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1bGFsYV9oZWk=,size_16,color_FFFFFF,t_70)

2. 打开文件，一路下一步安装，如果需要自定义安装路径，就自己选择下。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181129172251964.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1bGFsYV9oZWk=,size_16,color_FFFFFF,t_70)

3. 在安装根目录 `D:\MongoDB\4.0 ` 创建 `mongodb.config` 配置文件。
	内容为：
	```
	systemLog:
	    destination: file
	    path: D:\MongoDB\4.0\log\mongod.log
	storage:
	    dbPath: D:\MongoDB\4.0\db
	```
	db文件夹如果没有，就自己创建一个。
4. 安装系统服务
	`mongod --config "D:\MongoDB\4.0 \mongodb.config" --install`
5. 启动服务
	`net start MongoDB`
	如果不成功，使用管理员打开 CMD ，在bin目录下执行命令。
	服务启动成功后，在浏览器输入 `http://localhost:27017/` , 默认端口是 `27017`
	如果出现 `It looks like you are trying to access MongoDB over HTTP on the native driver port.`
	则表示成功。
6. 停止服务
`net stop MongoDB`
7. 卸载服务
`mongod --remove`
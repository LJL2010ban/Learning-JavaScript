* nodejs后端
  通过express创建后端服务
  1. 安装nodejs，然后再安装npm(maybe installed with nodejs)
  2. 安装express，run command:  npm install -g express-generator (-g标记来将包进行全局安装)
  3. 通过express生成器来生成express应用
     express myApp
     - create: myApp
     - create: myApp/package.json
     - create: myApp/app.js
     - create: myApp/public
     - create: myApp/public/javascripts
     ...
     - create: myApp/views/index.jade

     install dependencies:
       $ cd myApp && npm install
     run the app:
       $ node app
  4. 运行我们的应用。需要用npm把基本的依赖项安装在本地。这次，我们会用它把package.json中设置的依赖项安装到本地。
     run command:
     $ cd myAppp && npm install -d (-d标志告诉npm把依赖项安装到本地。这个语法十分明确 ：可以丢开这个-d, 因为它被设置为默认将依赖项安装到本地)
  5. 在express3.x中可以通过node app.js进行运行应用。但是在express4.x中启动方式为：npm start (同时，端口配置在bin/www中)
  Note: 如何在Express4.x默认将启动模块分离到./bin/www中的情况下，直接使用nodemon或supervisor在开发过程中调试。具体操作方式如下：
  - 先对原模块进行修改
   - 修改app.js 
     在app模块中，添加如下修改：
     - var debug = require('debug')('my-application'); // debug module
     - app.set('port', process.env.PORT || 3000); // set up port
     - // module.exports = app; // 这是4.x中默认的配置
     - var server = app.listen(app.get('port'), function(){
         debug('Express server listening on port '+ server.address().port);
       });
     在package.json中修改如下：
     - "scripts":{
         "start": "node app.js" // 原先为 "node ./bin/www"
       }
  - 修改完成后，安装nodemon or supervisor
    - npm install -g nodemon
    - npm install -g supervisor


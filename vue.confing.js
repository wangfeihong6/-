const path = require('path');
//全局配置
module.exports={
  //关闭eslist语法展示
  lintOnSave:false,
  //开发服务器相关的
  devServer:{
   //静态资源托管
    contentBase: path.join(__dirname, 'public'),
    //设置开发服务器的端口号
    port: 8848,
  },
  //配置 webpack 相关
  configureWebpack:{
    resolve:{
      //配置路径
      alias:{
          "@v":path.resolve(__dirname, 'src/views'),
          "@c":path.resolve(__dirname, 'src/components'),
      }
    }
  },
}
module.exports = {
  //配置项: 配置值
  port: 8080, //监听的端口
  app_group_list: ['Home', 'Admin', 'Api'], //分组列表

  db_type: 'mysql', // 数据库类型
  db_host: '127.0.0.1', // 服务器地址
  db_port: '', // 端口
  db_name: '', // 数据库名
  db_user: 'root', // 用户名
  db_pwd: '', // 密码
  db_prefix: 'think_', // 数据库表前缀
  tpl_content_type: "text/html", 
  tpl_file_suffix: ".html", 
  tpl_file_depr: "_", 
  tpl_engine_type: "ejs", 
  tpl_engine_config: {
    open: "{{",
    close: "}}"
  }
};
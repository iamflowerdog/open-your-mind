/**
 * Created by yang on 2018/10/15.
 */

const http = require('http');
const url = require('url');

// 在Linux系统下，监听1024以下端口需要root权限。因此，如果想监听80或443端口的话，需要使用sudo命令启动程序。
http.createServer((request, response) => {
    response.writeHead(200, {'content-Type': 'text-plain'});
    response.end('hello world\n');
}).listen(8000);


console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash'));

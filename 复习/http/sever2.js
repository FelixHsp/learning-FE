const http = require('http');
http.createServer( function( request, response) {
    console.log( 'request come', request.url)
    // response.writeHead(200,{
    //     'Access-Control-Allow-Origin':'*'//跨域请求头文件
    // })
    response.end('123')
}).listen(8887)

console.log('sever listening on 8887')
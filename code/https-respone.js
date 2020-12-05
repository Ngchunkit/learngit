var http = require('http')
var server = http.createServer()
server.on('request', function(request, response){
    console.log('收到客户请求，请求路径是：' + request.url)
    // response.write('hello world')
    // response.end()
    var url = request.url
    if(url === '/'){
        response.end('index.page')
    }else if(url ==='/login'){
        response.end('login page')
    }else{
        response.end('404 Not Found')
    }
})

server.listen(3000, function(){
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/ 进行访问')
})
var http=require('http');
var url=require('url');
var fs = require('fs');

var servidor = http.createServer(function(pedido,respuesta){
	var objetourl = url.parse(pedido.url);
	console.log('Camino completo del recurso y parámetros:'+objetourl.path);
	console.log('Sólo el camino y nombre del recurso:'+objetourl.pathname);
	console.log('Parámetros del recurso:'+objetourl.query);
	
	
	respuesta.writeHead(200, {'Content-Type':'text/html'});
	respuesta.write('<!doctype html><html><head></head>'+
					'<body><h1>Sitio en desarrollo</h1></body></html>');
	respuesta.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');
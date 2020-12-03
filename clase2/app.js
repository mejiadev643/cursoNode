const http = require('http');

const server = http.createServer((req,res)=>{
	//res.writeHead(200,{"content-Type": "aplication/json"});
	res.writeHead(200);

	res.write("Hola, me llamaste?");
	res.end();

});

server.listen(8080);
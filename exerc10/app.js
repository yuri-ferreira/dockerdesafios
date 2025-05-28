const http = require('http'); 

const hostname = '0.0.0.0'; 
const port = 3000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); // 
  res.end('Olá, essa é uma simples aplicação para rodar no container do desafio 10!\n'); 
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
  console.log(`Processo rodando como: ${process.env.USER || process.env.USERNAME || 'desconhecido'}`);
});
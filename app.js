
const express = require('express'); //importamos o express

const app = express(); // rodamos o express, para obter as funcionalidades do modulo

app.get('/', function (req, res){
    res.send('Agora está funcionando a rota"/"')
});

app.get('/outraRota', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

//listem sempre deve ficar no final do arquivo
app.listen(3000,function(){ //habilitamos a porta 3000 para recebimento de requisicoes
    console.log('Servidor rodando na porta http://localhost:3000')
})
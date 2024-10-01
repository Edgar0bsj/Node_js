const express = require("express");
const app = express();
const bodyParser = require('body-parser');

/*
=========================================================
CONFIGURAÇÃO DO PROJETO
=========================================================
*/

// Diz que irá usar o ejs como engine
app.set('view engine', 'ejs');

// Indica a pasta statica
app.use(express.static('public'));

// Para processar dados de formulários (URL-encoded)
app.use(bodyParser.urlencoded({extended: false}));

// Para processar dados no formato JSON
app.use(bodyParser.json());

/*
=========================================================
ROTAS
=========================================================
*/


app.get('/', function(req, res) {
    res.render('index');
});
app.get('/pergunta', function(req, res) {
    res.render('perguntas');
});
app.post('/salvadoformulario', function(req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send(`Titulo digitado: ${titulo} <hr><br> Descrição: ${descricao}`);
});

/*
=========================================================
SERVIDOR
=========================================================
*/

// Ligando servidor
app.listen(8080,function(){
    console.log('App Rodando!');
})
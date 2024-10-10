const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./database/database');
const pergunta = require('./database/CriarTabela');
const Resposta = require('./database/Resposta');

//Banco de dados
sequelize
    .authenticate()
    .then(function () {
        console.log('Conexão feita!')
    })
    .catch(function (msgErro) {
        console.log(msgErro)
    })

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
app.use(bodyParser.urlencoded({ extended: false }));

// Para processar dados no formato JSON
app.use(bodyParser.json());

/*
=========================================================
ROTAS
=========================================================
*/


app.get('/', function (req, res) {
    pergunta.findAll({ raw: true, order:[
        ['id','DESC'] //ASC = Crescente || DESC = Decrescente
    ] }).then(perguntas => {
        res.render('index', { perguntas: perguntas });
    });
});




app.get('/pergunta', function (req, res) {
    res.render('perguntas');
});
app.post('/salvadoformulario', function (req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    pergunta.create({
        titulo: titulo,
        descricao: descricao,
    }).then(function () { res.redirect('/') });
});

app.get('/pergunta/:id', function(req, res){
    let id = req.params.id;
    pergunta.findOne(
        {where: {id: id}}
    ).then(
        resultado => {
            if (resultado != undefined) {
                res.render("pergunta", {perguntas : resultado});
            }else {
                res.redirect("/");
            }
        }
    )
})

app.post('/responder', function(req,res){
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId,
    }).then(function(){
        res.redirect(`/pergunta/${perguntaId}`);
    }
    );
});


/*
=========================================================
SERVIDOR
=========================================================
*/

// Ligando servidor
app.listen(8080, function () {
    console.log('App Rodando!');
})
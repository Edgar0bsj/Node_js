const express = require("express"); // Importando o express
const app = express(); // Iniciando o express



app.get("/", function(req,res){ // Rota do tipo get
    res.send("Olá Mundo!");
});

app.get("/blog/:artigo?", function(req,res){ // Paramentro (artigo) opcional pq vem seguido de (?)
    let artigo = req.params.artigo;

    if (artigo) {
        res.send(`<h2>Artigo: ${artigo} </h2>`)
    }else{
        res.send("Bem vindo ao meu blog");
    }
});

app.get("/ola/:nome/:sobrenome", function(req, res){ // Pegando parametros na requisições
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;

    res.send(`<h1>Olá senhor: ${nome} ${sobrenome}</h2>`);
})


app.get("/canal/youtube", function(req,res){ // Exemplo com Query params
    let canal =  req.query["canal"];

    if (canal) { // ao final da url (?canal=QualquerCoisa)
        res.send(`<p>Pegando dados com Query params ${canal}</p>`);
    }else{
        res.send("<h1>Bem vindo ao meu canal!</h1>");
    }
});





app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor rodando em http://localhost:4000`);
    }
})
const express = require("express"); // Importando o express
const app = express(); // Iniciando o express



app.get("/", function(req,res){ // Rota do tipo get
    res.send("Olá Mundo!");
});

app.get("/blog", function(req,res){ // Rota do tipo get
    res.send("Bem vindo ao meu blog");
});

app.get("/canal/youtube", function(req,res){ // Rota do tipo get
    res.send("<h1>Bem vindo ao meu canal!</h1>");
});





app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor rodando em http://localhost:4000`);
    }
})
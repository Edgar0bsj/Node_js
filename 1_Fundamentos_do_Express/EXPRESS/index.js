const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor rodando em http://localhost:4000`);
    }
})
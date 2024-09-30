const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:leng', function(req, res) {
    let variavel_nome = req.params.nome;
    let variavel_leng = req.params.leng;
    let variavel_admin = false;
    
    res.render('index',{
        nome: variavel_nome,
        lang: variavel_leng,
        testo: 'Qualquer coisa!',
        admin: variavel_admin,
    });
});

app.listen(8080,function(){
    console.log('App Rodando!');
})
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:leng', function(req, res) {
    let variavel_nome = req.params.nome;
    let variavel_leng = req.params.leng;
    let variavel_admin = false;

    let produto = [
        {nome: 'Doritos', preco:5.60},
        {nome: 'Carne', preco:60.00},
        {nome: 'Nescau', preco:11.60},
        {nome: 'ClubSocial', preco:3.50},
        {nome: 'Vinagre', preco:4.60},

    ];

    
    res.render('index',{
        nome: variavel_nome,
        lang: variavel_leng,
        testo: 'Qualquer coisa!',
        admin: variavel_admin,
        produtos: produto,
    });
});

app.listen(8080,function(){
    console.log('App Rodando!');
})
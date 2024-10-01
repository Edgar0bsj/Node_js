const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/pergunta', function(req, res) {
    res.render('perguntas');
});

app.listen(8080,function(){
    console.log('App Rodando!');
})
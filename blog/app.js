const express = require('express');
const start = require('./Router/index');

const app = express();

start.bodyParser(app);
start.ejs(app);
start.static(app);
start.routes(app);




app.listen(3000,()=> console.log('Servidor rodando na porta 3000'))
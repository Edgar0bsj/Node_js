Guia
=================
<!--ts-->
  * [Startando Projeto](#Startando-Projeto)
  * [APP raiz do projeto](#APP-raiz-do-projeto)
  * [View](#View)
    * [View Engine](#View-Engine)
  * [Public](#Public)

<!--te-->

Startando Projeto
=================
- [x] `npm init`
- [x] `npm install --save express`
- [x] `npm install --save sequelize`
- [x] `npm install --save mysql2`
- [x] `npm install --save body-parser`
- [x] `npm install --save ejs`
- [x] `npm install -g nodemon` -> apenas uma vez por maquina

# APP raiz do projeto
=================  
Crie um arquivo index.js na raiz do projeto. Este será o ponto de entrada do servidor. Dentro deste arquivo, adicione o código básico para configurar um servidor.  
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080,function(){
    console.log('App Rodando!');
})
```

# View
=================  

## View Engine

> No arquivo   
nome-do-projeto/  
├── node_modules/  
├── index.js <-----  
├── package.json  
└── package-lock.json  

```js
// View Engine
app.set('view engine', 'ejs');
```

> Cria uma pasta na raiz do projeto chamado views.  
nome-do-projeto/  
├── node_modules/  
├── views/ <------    
├── index.js   
├── package.json  
└── package-lock.json  

> Para renderizar uma view.  
```js
app.get('/',function(req, res){
  res.render("home"); //Irá procurar dentro de views/
  })
```

# Body Parser
=================  
> Rodando o Body Parser  
nome-do-projeto/  
├── node_modules/  
├── views/  
├── index.js <------ 
├── package.json  
└── package-lock.json  

```js
const bodyParser = require('body-parser');

// Para processar dados de formulários (URL-encoded)
app.use(bodyParser.urlencoded({ extended: false }));

// Para processar dados no formato JSON
app.use(bodyParser.json());
```

# Public
=================  
> Criar uma pasta chamada de `public` para conter os arquivos státicos  
nome-do-projeto/  
├── node_modules/  
├── public/ <------  
├── views/  
├── index.js   
├── package.json  
└── package-lock.json  

```js
app.use(express.static('public'));
```

# DataBase
=================  

nome-do-projeto/  
├── node_modules/  
├── database/  
    └─ database.js <------    
├── public/  
├── views/  
├── index.js   
├── package.json  
└── package-lock.json  

```js
const Sequelize = require("sequelize");

const connection = new Sequelize('nome_do_esquema','usuario','senha',{ host: 'localhost', dialect: 'mysql'});

module.exports = connection;
```
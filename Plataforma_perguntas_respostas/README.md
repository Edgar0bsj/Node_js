# 📜 Iniciando um Projeto Express.js

## Menu

- [💻 Pré-requisitos](#Pré-requisitos)
- [Iniciando o Projeto](#NPM-comandos)
- [App.js](#App)
- [Views](#Views)
- [Public](#Public)

## Pré-requisitos
> [!WARNING]
> Node.js  
> NPM

# Bibliotecas necessárias 
- [x] `npm install express --save`
- [x] `npm install ejs --save`
- [x] `npm install nodemon -g`
- [x] `npm install body-parser --save`
- [x] `npm install sequelize --save` 
- [x] `npm install sqlite3 --save` 
- [x] `npm install mysql2 --save` 


# Startando Projeto

> [!IMPORTANT]
> No diretório do seu projeto.

## NPM comandos

Iniciando um projeto
```bash
npm init
```

Instalando os pacotes
```bash
npm install express --save
npm install ejs --save
```

> OBS:
```bash
npm install nodemon -g
```
> Esse -g indica para estalar globalmente, com isso não tera que fica instalando nos projetos futuros!

## App

nome-do-projeto/  
├── node_modules/  
├── app.js <-----  
├── package.json  
└── package-lock.json  

Crie um arquivo app.js ou index.js na raiz do projeto.
Este será o ponto de entrada do servidor.
Dentro deste arquivo, adicione o código básico para configurar um servidor.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080,function(){
    console.log('App Rodando!');
})

```

## (OPCIONAL) Adicionar Script para Rodar o Servidor
No arquivo `package.json`, adicione um script para facilitar o start do servidor. Abra o arquivo e, na seção `"scripts"`, adicione:
```javascript
"start": "nodemon app.js"
```
> Agora para rodar o servidor basta apenas escrever esse código:
```bash
npm start
```

## BODY PARSER
permite que você acesse e manipule os dados enviados por formulários, JSON, ou outros tipos de dados através de requisições POST ou PUT.
> No terminal, na raiz do seu projeto Express, execute o comando:
```bash
npm install body-parser
```
> Após a instalação, você precisa configurar o middleware no seu aplicativo Express.
```JS
const bodyParser = require('body-parser'); // Importar o body-parser

// Configurar body-parser para processar dados no formato JSON e URL-encoded
app.use(bodyParser.json()); // Para processar dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para processar dados de formulários (URL-encoded)

// Exemplo de rota que recebe dados de um formulário via POST
app.post('/form', (req, res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  res.send(`Nome: ${nome}, Idade: ${idade}`);
});
```

<hr>

## Views
O Express procura por arquivos de views na pasta views por padrão. Crie um diretório chamado views na raiz do seu projeto:

nome-do-projeto/  
├── node_modules/  
├── views/ <---------  
│   └── index.ejs <---------  
├── app.js  
├── package.json  
└── package-lock.json  

### Configurar o Express para Usar EJS
No arquivo principal do seu servidor, adicione o código para configurar o Express a usar o motor de templates EJS:
```js
app.set('view engine', 'ejs');
```

### renderizando a View
Adicionar uma rota no app.js para renderizar essa view:
```js
app.get('/', (req, res) => {
  res.render('index');
});
```

### Array para a View
> No arquivo app.js
```js
app.get('/', (req, res) => {
  // Um array de itens para passar para a view
  const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  // Renderizar a view 'index.ejs' e passar o array 'itens'
  res.render('index', { itens: itens });
});
```

### (Array) forEach na View (EJS)
```html
  <ul>
    <% itens.forEach(function(item) { %>
      <li><%= item %></li>
    <% }); %>
  </ul>
```

### Objetos para a View
> No arquivo app.js
```js
app.get('/', (req, res) => {
  // Um array de objetos para passar para a view
  const produtos = [
    { nome: 'Notebook', preco: 2500, descricao: 'Notebook rápido e eficiente' },
    { nome: 'Smartphone', preco: 1200, descricao: 'Smartphone com ótima câmera' },
    { nome: 'Tablet', preco: 1800, descricao: 'Tablet ideal para leitura e navegação' }
  ];

  // Renderizar a view 'index.ejs' e passar o array 'produtos'
  res.render('index', { produtos: produtos });
});
```
### (Objeto) forEach na View (EJS)
```html
  <ul>
    <% produtos.forEach(function(produto) { %>
      <li>
        <h2><%= produto.nome %></h2>
        <p>Preço: R$ <%= produto.preco %></p>
        <p>Descrição: <%= produto.descricao %></p>
      </li>
    <% }); %>
  </ul>
```

### Exemplo de Condicional na View (EJS)
> index.ejs com else if
```html
<!-- views/index.ejs -->
<ul>
  <% produtos.forEach(function(produto) { %>
    <li>
      <h2><%= produto.nome %></h2>
      <p>Preço: R$ <%= produto.preco %></p>

      <% if (produto.preco > 2000) { %>
        <p>Produto premium.</p>
      <% } else if (produto.preco > 1500) { %>
        <p>Produto de faixa média.</p>
      <% } else { %>
        <p>Produto acessível.</p>
      <% } %>
    </li>
  <% }); %>
</ul>
```
<hr>

## Public
Crie uma pasta chamada public na raiz do seu projeto para armazenar os arquivos estáticos:

nome-do-projeto/  
├── node_modules/  
├── public/ <---------  
│   ├── css/ <---------  
│   │   └── style.css <---------  
│   ├── images/ <---------  
│   │   └── logo.png <---------  
│   └── js/  
├── views/  
│   └── index.ejs  
├── app.js  
├── package.json  
└── package-lock.json  

### Configurar o Express para Servir Arquivos Estáticos
No arquivo principal do seu servidor, adicione o código para indicar a pasta public:
```js
app.use(express.static('public'));
```

### Incluir Arquivos Estáticos nas Views
```js
<link rel="stylesheet" href="/css/style.css">
```

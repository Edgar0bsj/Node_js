# 📜 Iniciando um Projeto Express.js

## Menu

- [💻 Pré-requisitos](#Pré-requisitos)
- [(1) NPM comandos](#(1)-NPM-comandos)
- [(2) App.js](#(2)-App.js)
- [(3) Views](#(3)-Views)
- [(4) Public](#(4)-Public)

## Pré-requisitos
> [!WARNING]
> Node.js  
> NPM

# Startando Projeto

> [!IMPORTANT]
> No diretório do seu projeto.

## (1) NPM comandos

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

## (2) App.js

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
No arquivo `package.json`, adicione um script para facilitar o start do servidor. Abra o arquivo e, na seção "scripts", adicione:
```javascript
"start": "nodemon index.js"
```
> Agora para rodar o servidor basta apenas escrever esse código:
```bash
npm start
```
## (3) Views
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
  res.render('index', { title: 'Lista de Itens', itens: itens });
});
```

### Usar forEach na View (EJS)
```html
<body>
  <h1><%= title %></h1>

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
  res.render('index', { title: 'Lista de Produtos', produtos: produtos });
});
```
### Usar forEach na View (EJS)
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

## (4) Public
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

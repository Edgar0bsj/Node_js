# 📜 Iniciando um Projeto Express.js

## Menu

- [💻 Pré-requisitos](#Pré-requisitos)
- [🔥 Startando Projeto](#Startando-Projeto)
- [📝 Estrutura de Pastas](#Estrutura-de-Pastas)

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

> [!IMPORTANT]
```bash
npm install nodemon -g
```
> Esse -g indica para estalar globalmente, com isso não tera que fica instalando nos projetos futuros!

## (2) Criar o Arquivo Principal do Servidor

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

## (4) Public -> arquivos estáticos
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

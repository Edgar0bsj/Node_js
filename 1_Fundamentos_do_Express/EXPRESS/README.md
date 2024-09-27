# Projeto Express.js 📜
Este projeto utiliza o framework Express.js para criar um servidor Node.js simples.

## Como iniciar o projeto 
1. Requisitos:
> Node.js: Certifique-se de ter o Node.js instalado.  
> NPM: Instalado junto com o Node.js  


## Instalação do Express 🔥
### Inicializar o projeto
No diretório do seu projeto, inicialize o npm:  
```
npm init
```
Isso cria o arquivo package.json.  
Lembrando de mudar o nome do projeto.


### Instalar dependências Instale o Express:  

```
npm install express --save
```

### Configuração básica do servidor
Crie um arquivo index.js com o seguinte conteúdo:
```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

```

### Para rodar o servidor, execute:
```
node index.js

```
O servidor estará disponível em http://localhost:3000.
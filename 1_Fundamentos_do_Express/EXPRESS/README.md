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
Lembrando que o nome do projeto não pode ser EXPRESS.  
```
npm install
```


### Instalar dependências Instale o Express:  

```
npm install express --save
```

### Configuração básica do servidor
Crie um arquivo index.js com o seguinte conteúdo:
```
const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor rodando em http://localhost:4000`);
    }
})

```

### Para rodar o servidor, execute:
```
node index.js

```
O servidor estará disponível em http://localhost:4000.
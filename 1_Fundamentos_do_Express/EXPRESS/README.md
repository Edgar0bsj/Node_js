# 📜 Projeto Express.js

![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)


<img src="https://miro.medium.com/v2/resize:fit:1400/1*0xWhD2FQZJT84o7jAAkGRg.jpeg" alt="imagem">



<!------------------------------------------------------ -->

Este projeto utiliza o framework Express.js para criar um servidor Node.js simples.

## Menu

- [Startando um Projeto](#Como iniciar o projeto)
- [Instalando o Express](#como-usar-os-badges-shields)

# Como iniciar o projeto 
Requisitos:
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

## Nodemon
Adicionar o nodemon ao projeto facilita o desenvolvimento, pois ele reinicia automaticamente o servidor sempre que algum arquivo é alterado.  
```
npm install nodemon -g
```

### Rodar o servidor com Nodemon:
execute:

```
nodemon index.js
```
# 📜 Projeto Express.js
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express" /> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 

<img src="https://miro.medium.com/v2/resize:fit:1400/1*0xWhD2FQZJT84o7jAAkGRg.jpeg" alt="imagem">

> Este projeto utiliza o framework Express.js para criar um servidor Node.js simples.


## Menu

- [Requisitos](#Requisitos)
- [Startando Projeto](#Startando-Projeto)

## Requisitos
> [!WARNING]
> Node.js
> NPM

# 🔥 Startando Projeto 

> [!IMPORTANT]
> No diretório do seu projeto.

<details>

<summary>Iniciando um projeto</summary>

### Comandos Necessário

Iniciando o npm 
```bash
   npm init
```

Instando dependência
```bash
   npm install
```

Instalando o Express
```bash
   npm install express --save
```
> [!CAUTION]
> Se o nome do projeto for 'Express' dará problemas no futuro.

</details>


# Instalando o Express


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
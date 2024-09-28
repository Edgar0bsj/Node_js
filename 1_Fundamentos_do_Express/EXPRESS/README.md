# 📜 Projeto Express.js
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />

<img src="https://miro.medium.com/v2/resize:fit:1400/1*0xWhD2FQZJT84o7jAAkGRg.jpeg" alt="imagem">

> Este projeto utiliza o framework Express.js para criar um servidor Node.js simples.


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

<details>

<summary>Iniciando um projeto</summary>

### Comandos Necessário

Iniciando o npm 
```bash
   npm init
```

Instalando dependência
```bash
   npm install
```

Instalando o Express
```bash
   npm install express --save
```
> Se o nome do projeto for 'Express' dará problemas no futuro.  

Instalando o Nodemon
> Adicionar o nodemon ao projeto facilita o desenvolvimento, pois ele reinicia automaticamente o servidor sempre que algum arquivo é alterado.
```bash
   npm install nodemon -g
```

Rodar o servidor com Nodemon:
```bash
    nodemon index.js
```

</details>


# Estrutura de Pastas

> [!NOTE]
> Alguns arquivos devem ser criado.

- [x] index.js
- [x] /routes -> (Rotas)
- [x] /controllers -> (Lógica)
- [x] /views -> (HTML)
- [x] /public -> (JS/CSS, imagens)

# Rotas
<details>

<summary>Método de Rota</summary>

### Método Necessário
Método GET
> É o método usado para definir como o servidor Express vai responder a requisições HTTP GET, permitindo configurar rotas e enviar respostas ao cliente.
```javascript
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```
- `<'/'>` -> : A rota que será correspondida. Aqui, estamos usando a rota raiz (home page).
- `<req>` -> Representa a requisição recebida pelo servidor. Se o cliente enviar parâmetros ou dados, eles podem ser acessados através deste objeto.
- `<res.send()>` -> Método usado para enviar uma resposta ao cliente. Nesse caso, uma simples mensagem "Hello, World!" será enviada.

Método Listen
> É o comando que efetivamente "liga" o servidor, fazendo com que ele comece a receber requisições.
```javascript
app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor rodando em http://localhost:4000`);
    }
}) 
```
- `<'port'>` -> : Número da porta em que o servidor vai escutar as requisições (ex: 4000, 8080).
- `<'callback'>` -> : se ocorre um erro a variavel erro sera setada.
</details>
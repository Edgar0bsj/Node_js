--=============================
-- CRIANDO UM BANCO DE DADOS --
--=============================

-- Ver os Banco de Dados
SHOW DATABASES;

-- Criar um Banco de Dados
CREATE DATABASE nome_do_banco_de_dados;

-- Navegar para dentro do Banco de Dados
USE nome_do_banco_de_dados;

--======================
-- CRIANDO UMA TABELA --
--======================

-- Ver Tabelas
SHOW TABLES;

-- Criar uma tabela e definir as colunas
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Ver os nomes das calunas 
DESCRIBE usuarios;

--Inserir dados dentro da tabela
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Victor Lima",
    "email@test.com",
    8
);

-- Lista todos os dados da tabela
SELECT * FROM usuarios;

-- Fazer uma busca com condição dentro da tabela
SELECT * FROM usuarios WHERE idade = 8;

--======================
-- DELETAR UMA LINHA  --
--======================

-- Deletar dados
DELETE FROM usuarios WHERE coluna = condicao; 

--======================
--  ATUALIZAR DADOS   --
--======================

-- Modificar um dados
UPDATE usuarios SET nome = "nomeNovo" WHERE coluna = condicao;

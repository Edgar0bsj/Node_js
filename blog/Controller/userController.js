const express = require('express');
const Router = express.Router();
// teste
const db = require('../Model/userModel')
//------


class UserController {
    static getAll(req, res) {
        return res.send({ clientes: db.clientes })
    }

    static buscar(req, res) {
        try {
            let id = 0;
            let userId = Number(req.params.id);
            let usuario = db.clientes.find((e) => e.id == userId);

            res.send({
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                email: usuario.email
            })
        } catch (error) {
            res.send({ mensagem: `Erro !!: ${error}` })
        }


    }

    static inserir(req, res) {
        try {
            let userInfo = req.body;
            let novoUser = {
                id: db.userId(),
                nome: userInfo.nome,
                sobrenome: userInfo.sobrenome,
                email: userInfo.email,
            };
            db.clientes.push(novoUser);
            res.send(novoUser);

        } catch (error) {
            res.send({mensagem: `Erro!! -> ${error}`})
        }
    }

    static deleteItem(req, res) {
        try {
            let userId = Number(req.params.id);
            db.clientes = db.clientes.filter((item) => item.id !== userId);

            res.send({ mensagem: `item ${userId} Deletado com sucesso!` })
            


        } catch (error) {
            res.send({ mensagem: `Erro!! -> ${error}` });
        }

    }
}

module.exports = UserController;
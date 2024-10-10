const express = require('express');
const userRouter = express.Router();
const UserController = require('../Controller/userController');

//Banco de dados Teste
const db = require('../Model/userModel');

userRouter.get('/user', UserController.getAll);
userRouter.get('/user/:id', UserController.buscar);
userRouter.post('/user', UserController.inserir);
userRouter.delete('/user/:id', UserController.deleteItem)


module.exports = userRouter;
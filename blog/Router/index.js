const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');

exports.bodyParser = function (app) {
    app.use(bodyParser.urlencoded({extended:false}))
}

exports.ejs = function(app){
    app.set('view engine', 'ejs');
}

exports.static = function(app){
    app.use(express.static('public'));
}

exports.routes = function (app) {
    app.use(express.json());
    app.use(userRouter);
}

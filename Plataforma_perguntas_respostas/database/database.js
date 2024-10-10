const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize('guiaperguntas', 'root', '26553490$Edgar', {
    host: 'localhost', // ou o host do seu banco de dados
    dialect: 'mysql',  // Especifica que o banco de dados é MySQL
});


module.exports = sequelize;
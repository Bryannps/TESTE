const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis de ambiente do .env

// Configuração do Sequelize com o dialect correto
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nome do banco de dados
  process.env.DB_USER,      // Usuário do banco de dados
  process.env.DB_PASSWORD,  // Senha do banco de dados
  {
    host: process.env.DB_HOST,   // Endereço do banco de dados
    dialect: 'mysql',            // Especifica o dialeto como MySQL
    port: process.env.DB_PORT || 3306, // Porta do banco de dados
  }
);

module.exports = sequelize;

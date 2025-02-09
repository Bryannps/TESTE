const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'empresas',
      key: 'id'
    }
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuarios'
});

module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  razaosocial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'empresas'
});

module.exports = Company;

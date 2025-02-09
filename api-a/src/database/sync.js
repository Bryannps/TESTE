const sequelize = require('./index');
const User = require('../models/User');
const Company = require('../models/Company');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  }
};

syncDatabase();

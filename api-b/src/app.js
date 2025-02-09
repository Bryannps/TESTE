const express = require('express');
const userRoutes = require('./routes/UserRoutes.js');
const companyRoutes = require('./routes/CompanyRoutes.js')
const dotenv = require('./dotenv')
const cors = require('cors');
require('dotenv').config();
require('./database'); // Conecta ao banco

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes)
app.use('/api', companyRoutes)

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app
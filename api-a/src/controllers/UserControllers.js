const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const UserController = {
  async create(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ ...req.body, password: hashedPassword });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async getAll(req, res) {
    const users = await User.findAll();
    res.json(users);
  },
  async login(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(401).json({ error: 'Senha inválida' });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UserController;
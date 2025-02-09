const Company = require('../models/Company.js');

const CompanyController = {
  async create(req, res) {
    try {
      const company = await Company.create(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async getAll(req, res) {
    const companies = await Company.findAll();
    res.json(companies);
  }
};

module.exports = CompanyController;
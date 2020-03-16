const Poetry = require('../models/Poetry');

module.exports = {
  async index(req, res) {
    const result = await Poetry.find();
    return res.json(result);
  },

  async store(req, res) {
    const { title, poetry, author } = req.body;
    const poetryResult = await Poetry.create({
      title,
      poetry,
      author
    })

    return res.json(poetryResult);
  },

  async find(req, res) {
    const result = await Poetry.findById(req.params.id);
    return res.json(result);
  }
}
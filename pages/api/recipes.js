const recipes = require('./recipes/index.json')

module.exports = (req, res) => {
  res.json(recipes)
}

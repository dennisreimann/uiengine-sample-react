export default (req, res) => {
  const { query: { id } } = req

  try {
    const recipe = require(`./${id}.json`)

    res.json(recipe)
  } catch (err) {
    res.status(404).end('Not found')
  }
}

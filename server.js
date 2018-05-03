const express = require('express')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// construct recipes index
const recipePath = id => join(__dirname, 'static', 'api', 'recipes', `${id}.json`)
const recipesIndex = [
  'burgers',
  'nacho-salad',
  'gyros',
  'burnt-ends',
  'porterhouse-steak',
  'beer-can-chicken',
  'onion-moinkballs',
  'bacon-wrapped-chicken-breasts'
].map(id => require(recipePath(id)))

app.prepare()
  .then(() => {
    const server = express()

    // mock api returns static json
    server.get('/api/recipes/:id', (req, res) => {
      const { id } = req.params

      if (id === 'index') {
        res.json(recipesIndex)
      } else {
        res.sendFile(recipePath(id))
      }
    })

    server.get('/recipes/:id', (req, res) => {
      const actualPage = '/recipe'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('Ready on http://localhost:3000')
    })
  })
  .catch(error => {
    console.error(error.stack)
    process.exit(1)
  })

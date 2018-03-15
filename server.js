const express = require('express')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // mock api returns static json
    server.get('/api/*', (req, res) => {
      const filePath = join(__dirname, 'static', `${req.path}.json`)
      res.sendFile(filePath)
    })

    server.get('/recipe/:id', (req, res) => {
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

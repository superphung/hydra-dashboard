/*
[
  {url: 'smarscreening', localStorage: {}},
]

*/
const React = require('React')
const fs = require('fs')
const path = require('path')
const express = require('express')

const server = require('./server')
const { renderToString } = require('react-dom/server')

const App = require('./app/App')

//const PORT = process.env.PORT || 3000

const template = fs.readFileSync(path.join(__dirname, '/app/app.html'), 'utf8')

module.exports = class Hydra {
  // construtor :: [Path]
  construtor (xs) {
  }

  listen (PORT = 3000) {
    server.use('/statics', express.static(path.join(__dirname, '/statics')))

    server.get('/', (req, res) => {
      const rendered = renderToString(React.createElement(App))
      res.status(200).send(template.replace('{APP}', rendered))
    })

    server.listen(PORT, () => console.log(`listen on port ${PORT}`))
  }
}

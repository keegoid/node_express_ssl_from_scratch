// import express
const express = require('express')

// create new express app and assign it to `app` constant
const app = express()

// server port configuration
const PORT = 8080

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello dev.to!')
})

// create another route
app.get('/keegoid', (req, res) => {
  res.send('Hello Keegoid! Welcome to dev.to!')
})

// start server listening on `PORT`
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/keegoid`)
})

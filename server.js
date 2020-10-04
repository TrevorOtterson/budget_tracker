// required dependencies
const express = require('express')
const mongoose = require('mongoose')
const compression = require('compression')

// port number
const PORT = 3000

const app = express()

app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// db connection
mongoose.connect('mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false
})

// routes
app.use(require('./routes/api.js'))

// running app on server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
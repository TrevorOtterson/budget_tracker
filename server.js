// required dependencies
const express = require('express')
const mongoose = require('mongoose')
const compression = require('compression')

// port number
const PORT = process.env.PORT || 3000

const app = express()

app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// routes
app.use(require('./routes/api.js'))

// db connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Transaction',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// running app on server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
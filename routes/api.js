const router = require('express').Router()

// routes api.js to transaction.js
const Transaction = require('../models/transaction.js')

// posts transaction table to db
router.post('/api/transaction', ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

// posts all of transactions to db
router.post('/api/transaction/bulk', ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

// pulls data from transaction table in db
router.get('/api/transaction', (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

module.exports = router
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// db tables
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Enter a name for transaction'
    },
    value: {
      type: Number,
      required: 'Enter an amount'
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Transaction',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction
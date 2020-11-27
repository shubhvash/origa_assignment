const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    noOfOrders: {
      type: Number,
      default: 0
    }
  }, { timestamps: true });

module.exports = mongoose.model('User',userSchema)
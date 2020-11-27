const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true
    },
    date:{
        type: String,
        required: true
    }
  }, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Event',
    required:true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  tickets: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: Date.now,
  },
});

module.exports = mongoose.model('Booking',bookingSchema);
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  availableTickets: {
    type: Number,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

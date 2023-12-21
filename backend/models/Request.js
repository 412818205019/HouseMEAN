const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  housekeeper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Housekeeper',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  feedback: {
    ratings: Number,
    comments: String,
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
